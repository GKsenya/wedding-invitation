import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  reactStrictMode: true,
  trailingSlash: true,
  experimental: {
    optimizePackageImports: ['@mantine/hooks'],
  },
};

export default nextConfig;
