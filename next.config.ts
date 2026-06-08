import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/bella-africano-skincare',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;