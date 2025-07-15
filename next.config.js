/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/meu_cv',
  assetPrefix: './', // Adiciona assetPrefix para caminhos relativos
  /* config options here */
};

module.exports = nextConfig;