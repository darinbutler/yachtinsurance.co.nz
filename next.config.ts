import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/yachtinsurance.co.nz',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
