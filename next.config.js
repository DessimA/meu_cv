const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self' 'unsafe-eval' 'unsafe-inline' https://challenges.cloudflare.com;
  child-src 'self';
  style-src 'self' 'unsafe-inline';
  font-src 'self';
  frame-src https://challenges.cloudflare.com;
`;

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove estas linhas se existirem:
  // basePath: '/meu_cv',
  // assetPrefix: '/meu_cv',
  // output: 'export',
  
  images: {
    unoptimized: false, // Na Vercel pode usar otimização de imagens
  },

  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: ContentSecurityPolicy.replace(/\s{2,}/g, ' ').trim(),
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig
