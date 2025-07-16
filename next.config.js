const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: isProd ? '/meu_cv' : '',
  assetPrefix: isProd ? '/meu_cv/' : '',
  /* config options here */
};

module.exports = nextConfig;