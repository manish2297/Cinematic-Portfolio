/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  basePath: isProd ? '/Cinematic-Portfolio' : '',
  assetPrefix: isProd ? '/Cinematic-Portfolio/' : '',
  env: {
    NEXT_PUBLIC_BASE_PATH: isProd ? '/Cinematic-Portfolio' : '',
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;