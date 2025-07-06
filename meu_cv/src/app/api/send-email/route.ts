import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Inicializa o cliente do Resend com a chave da API do ambiente.
const resend = new Resend(process.env.RESEND_API_KEY);
const emailTo = process.env.EMAIL_TO;

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();

    if (!emailTo) {
      throw new Error('Email de destino não configurado.');
    }

    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>', // Use o domínio verificado ou o padrão do Resend.
      to: [emailTo],
      subject: `Nova mensagem do Portfolio: ${subject}`,
      replyTo: email,
      // Template de email em HTML para um visual mais limpo.
      html: `
        <div style="font-family: sans-serif; line-height: 1.6;">
          <h2>Nova mensagem de contato do seu portfolio!</h2>
          <p><strong>De:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <hr style="border: none; border-top: 1px solid #eee;" />
          <h3>Assunto: ${subject}</h3>
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend API Error:", error);
      return NextResponse.json({ error: 'Erro ao enviar o email.' }, { status: 500 });
    }

    return NextResponse.json({ message: 'Email enviado com sucesso!', data }, { status: 200 });
  } catch (err) {
    console.error("Internal Server Error:", err);
    // TypeScript pode tratar 'err' como 'unknown', então verificamos se é um Error.
    const errorMessage = err instanceof Error ? err.message : 'Ocorreu um erro desconhecido.';
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}