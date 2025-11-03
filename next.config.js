/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove estas linhas se existirem:
  // basePath: '/meu_cv',
  // assetPrefix: '/meu_cv',
  // output: 'export',
  
  images: {
    unoptimized: false, // Na Vercel pode usar otimização de imagens
  },
}

module.exports = nextConfig
