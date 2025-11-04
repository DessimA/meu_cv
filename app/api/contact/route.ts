import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { OFFENSIVE_WORDS, LEGITIMATE_DOMAINS, DISPOSABLE_DOMAINS } from '@/data/validationSets';

// Schema de validação
const contactSchema = z.object({
  name: z.string().min(2, 'Nome deve ter pelo menos 2 caracteres'),
  email: z.string().email('Email inválido'),
  subject: z.string().min(5, 'Assunto deve ter pelo menos 5 caracteres'),
  message: z.string().min(10, 'Mensagem deve ter pelo menos 10 caracteres'),
  'cf-turnstile-response': z.string().min(1, 'Captcha é obrigatório')
});

// Função para verificar Turnstile
async function verifyTurnstile(token: string, ip: string): Promise<boolean> {
  const secretKey = process.env.TURNSTILE_SECRET_KEY;
  
  if (!secretKey) {
    console.error('TURNSTILE_SECRET_KEY não configurada');
    return false;
  }

  try {
    const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        secret: secretKey,
        response: token,
        remoteip: ip
      }),
    });

    const data = await response.json();
    return data.success === true;
  } catch (error) {
    console.error('Erro ao verificar Turnstile:', error);
    return false;
  }
}

// Função para validar domínio de email
function validateEmailDomain(email: string): { valid: boolean; reason?: string } {
  const domain = email.split('@')[1]?.toLowerCase();

  if (!domain) {
    return { valid: false, reason: 'Email inválido' };
  }

  // Bloquear domínios descartáveis
  if (DISPOSABLE_DOMAINS.some(d => domain.includes(d))) {
    return { valid: false, reason: 'Emails temporários não são aceitos' };
  }

  // Verificar se o domínio está na lista de domínios legítimos ou corresponde a um padrão
  const isLegitimate = LEGITIMATE_DOMAINS.some(legitDomain => {
    if (legitDomain.startsWith('*.')) {
      // Trata o caso de subdomínios, como '*.edu.br'
      const baseDomain = legitDomain.substring(2);
      return domain.endsWith(baseDomain);
    } else {
      return domain === legitDomain;
    }
  });

  if (isLegitimate) {
    return { valid: true };
  }

  return { valid: false, reason: 'Domínio de email não permitido' };
}

// Função para verificar conteúdo ofensivo
function checkOffensiveContent(text: string): { hasOffensive: boolean; words: string[] } {
  const lowerText = text.toLowerCase();
  const foundWords: string[] = [];

  for (const word of OFFENSIVE_WORDS) {
    if (lowerText.includes(word)) {
      foundWords.push(word);
    }
  }

  return {
    hasOffensive: foundWords.length > 0,
    words: foundWords
  };
}

// Função para verificar CAPS LOCK excessivo
function hasExcessiveCaps(text: string): boolean {
  const capsCount = (text.match(/[A-Z]/g) || []).length;
  const totalLetters = (text.match(/[a-zA-Z]/g) || []).length;
  
  if (totalLetters < 10) return false; // Texto muito curto, ignorar
  
  const capsPercentage = (capsCount / totalLetters) * 100;
  return capsPercentage > 60; // Mais de 60% em maiúsculas = suspeito
}

// Função para enviar email via Formspree
async function sendToFormspree(data: any): Promise<boolean> {
  const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_SECRET;

  if (!formspreeId) {
    console.error('NEXT_PUBLIC_FORMSPREE_SECRET não configurada');
    return false;
  }

  try {
    const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(data)
    });

    return response.ok;
  } catch (error) {
    console.error('Erro ao enviar para Formspree:', error);
    return false;
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // 1. Validar schema
    const validation = contactSchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json(
        { error: 'Dados inválidos', details: validation.error.issues },
        { status: 400 }
      );
    }

    const { name, email, subject, message } = validation.data;
    const turnstileToken = body['cf-turnstile-response'];

    // 2. Obter IP do cliente
    const ip = request.headers.get('x-forwarded-for') || 
               request.headers.get('x-real-ip') || 
               'unknown';

    // 3. Verificar Turnstile (CAPTCHA)
    const isTurnstileValid = await verifyTurnstile(turnstileToken, ip);
    if (!isTurnstileValid) {
      return NextResponse.json(
        { error: 'Verificação de segurança falhou. Tente novamente.' },
        { status: 403 }
      );
    }

    // 4. Validar domínio do email
    const emailValidation = validateEmailDomain(email);
    if (!emailValidation.valid) {
      return NextResponse.json(
        { error: emailValidation.reason || 'Email não permitido' },
        { status: 400 }
      );
    }

    // 5. Verificar conteúdo ofensivo
    const fullText = `${name} ${subject} ${message}`;
    const offensiveCheck = checkOffensiveContent(fullText);
    
    if (offensiveCheck.hasOffensive) {
      // Log para monitoramento (opcional)
      console.warn('Conteúdo ofensivo detectado:', {
        email,
        words: offensiveCheck.words,
        ip,
        timestamp: new Date().toISOString()
      });

      return NextResponse.json(
        { error: 'Sua mensagem contém conteúdo inadequado e não pode ser enviada.' },
        { status: 400 }
      );
    }

    // 6. Verificar CAPS LOCK excessivo
    if (hasExcessiveCaps(message)) {
      return NextResponse.json(
        { error: 'Por favor, evite escrever em MAIÚSCULAS.' },
        { status: 400 }
      );
    }

    // 7. Enviar mensagem principal para você
    const mainEmailSent = await sendToFormspree({
      name,
      email,
      subject,
      message
    });

    if (!mainEmailSent) {
      return NextResponse.json(
        { error: 'Erro ao enviar mensagem. Tente novamente.' },
        { status: 500 }
      );
    }

    // 8. Enviar email com dados do remetente (notificação do sistema)
    const userAgent = request.headers.get('user-agent') || 'unknown';
    const timestamp = new Date().toLocaleString('pt-BR', { 
      timeZone: 'America/Fortaleza',
      dateStyle: 'full',
      timeStyle: 'long'
    });

    await sendToFormspree({
      name: 'Sistema de Notificação',
      email: process.env.SYSTEM_NOTIFICATION_EMAIL || email,
      subject: `[Sistema] Dados do remetente: ${name}`,
      message: `
📧 DADOS DO CONTATO RECEBIDO

👤 Remetente: ${name}
📬 Email: ${email}
📌 Assunto: ${subject}

🌐 Informações Técnicas:
• IP: ${ip}
• User-Agent: ${userAgent}
• Data/Hora: ${timestamp}

✅ Todas as validações passaram:
• CAPTCHA verificado
• Email legítimo
• Sem conteúdo ofensivo
• Sem spam detectado

---
Mensagem original:
${message}
      `.trim()
    });

    return NextResponse.json(
      { 
        success: true, 
        message: 'Mensagem enviada com sucesso!' 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Erro no processamento:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
}