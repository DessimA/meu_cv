# Guia de Deploy - Portfolio José Anderson

Este documento fornece instruções detalhadas para fazer o deploy do portfolio em diferentes plataformas.

## 🚀 Opções de Deploy

### 1. Vercel (Recomendado) - GRATUITO

A Vercel é a plataforma criada pela equipe do NextJS e oferece a melhor integração.

#### Passos:

1. **Criar conta na Vercel**
   - Acesse [vercel.com](https://vercel.com)
   - Faça login com GitHub, GitLab ou Bitbucket

2. **Preparar o código**
   ```bash
   # Criar repositório Git (se ainda não tiver)
   git init
   git add .
   git commit -m "Portfolio inicial"
   
   # Fazer push para GitHub/GitLab
   git remote add origin https://github.com/seu-usuario/portfolio-jose-anderson.git
   git push -u origin main
   ```

3. **Deploy na Vercel**
   - Clique em "New Project"
   - Conecte seu repositório
   - Configure:
     - Framework Preset: Next.js
     - Root Directory: ./
     - Build Command: `npm run build`
     - Output Directory: `.next`
   - Clique em "Deploy"

4. **Configurar domínio personalizado (opcional)**
   - Vá em Settings > Domains
   - Adicione seu domínio personalizado

### 2. Netlify - GRATUITO

#### Passos:

1. **Build do projeto**
   ```bash
   npm run build
   npm run export  # Se configurado para static export
   ```

2. **Deploy manual**
   - Acesse [netlify.com](https://netlify.com)
   - Arraste a pasta `out/` para a área de deploy

3. **Deploy automático**
   - Conecte seu repositório Git
   - Configure:
     - Build command: `npm run build && npm run export`
     - Publish directory: `out`

### 3. GitHub Pages - GRATUITO

#### Configuração:

1. **Instalar gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Configurar package.json**
   ```json
   {
     "scripts": {
       "deploy": "gh-pages -d out"
     },
     "homepage": "https://seu-usuario.github.io/portfolio-jose-anderson"
   }
   ```

3. **Configurar next.config.js**
   ```javascript
   /** @type {import('next').NextConfig} */
   const nextConfig = {
     output: 'export',
     trailingSlash: true,
     images: {
       unoptimized: true
     }
   }
   
   module.exports = nextConfig
   ```

4. **Deploy**
   ```bash
   npm run build
   npm run deploy
   ```

### 4. Hospedagem Tradicional (cPanel, etc.)

#### Passos:

1. **Build estático**
   ```bash
   npm run build
   npm run export
   ```

2. **Upload**
   - Faça upload da pasta `out/` para o diretório público do servidor
   - Renomeie `out/` para `public_html/` ou conforme necessário

## 🔧 Configurações Específicas

### Variáveis de Ambiente

Se precisar de variáveis de ambiente:

1. **Criar arquivo `.env.local`**
   ```
   NEXT_PUBLIC_SITE_URL=https://seudominio.com
   NEXT_PUBLIC_ANALYTICS_ID=seu-id-analytics
   ```

2. **Configurar na plataforma de deploy**
   - Vercel: Settings > Environment Variables
   - Netlify: Site settings > Environment variables

### Otimizações para Produção

#### 1. Configurar next.config.js
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Otimizações de performance
  compress: true,
  poweredByHeader: false,
  
  // Configurações de imagem
  images: {
    domains: ['exemplo.com'],
    formats: ['image/webp', 'image/avif'],
  },
  
  // Headers de segurança
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig
```

#### 2. Configurar robots.txt
```
User-agent: *
Allow: /

Sitemap: https://seudominio.com/sitemap.xml
```

#### 3. Configurar sitemap.xml
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://seudominio.com</loc>
    <lastmod>2025-01-01</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
```

## 📊 Monitoramento e Analytics

### Google Analytics

1. **Criar conta no Google Analytics**
2. **Adicionar tracking code**
   ```javascript
   // Em _app.tsx ou layout.tsx
   import Script from 'next/script'
   
   export default function Layout({ children }) {
     return (
       <>
         <Script
           src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
           strategy="afterInteractive"
         />
         <Script id="google-analytics" strategy="afterInteractive">
           {`
             window.dataLayer = window.dataLayer || [];
             function gtag(){dataLayer.push(arguments);}
             gtag('js', new Date());
             gtag('config', 'GA_MEASUREMENT_ID');
           `}
         </Script>
         {children}
       </>
     )
   }
   ```

### Vercel Analytics

Se usar Vercel, ative o Analytics gratuito:
```bash
npm install @vercel/analytics
```

```javascript
// Em _app.tsx
import { Analytics } from '@vercel/analytics/react'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  )
}
```

## 🔒 Segurança

### Headers de Segurança

Configure headers de segurança no next.config.js:

```javascript
const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on'
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload'
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block'
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN'
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  },
  {
    key: 'Referrer-Policy',
    value: 'origin-when-cross-origin'
  }
]
```

## 🚨 Troubleshooting

### Problemas Comuns

1. **Build falha**
   ```bash
   # Limpar cache
   rm -rf .next
   npm run build
   ```

2. **Imagens não carregam**
   - Verificar configuração de domínios em next.config.js
   - Para static export, usar `unoptimized: true`

3. **Rotas não funcionam**
   - Configurar `trailingSlash: true` para hospedagem estática
   - Verificar configuração do servidor

4. **CSS não carrega**
   - Verificar se Tailwind está configurado corretamente
   - Verificar imports dos arquivos CSS

## 📞 Suporte

Para problemas específicos de deploy:

- **Vercel**: [vercel.com/docs](https://vercel.com/docs)
- **Netlify**: [docs.netlify.com](https://docs.netlify.com)
- **NextJS**: [nextjs.org/docs](https://nextjs.org/docs)

---

**Boa sorte com o deploy! 🚀**

