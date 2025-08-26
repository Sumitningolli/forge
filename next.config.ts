import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
};

// Only apply export settings when building for production
if (process.env.NODE_ENV === 'production') {
  nextConfig.output = "export";
  nextConfig.basePath = "/forge";
  nextConfig.assetPrefix = "/forge/";
}

export default nextConfig;
