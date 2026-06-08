import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/bella-africano-skincare",
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;