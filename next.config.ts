import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Only apply export settings when building for production
  ...(process.env.NODE_ENV === 'production' && {
    output: "export",
    basePath: "/forge",
    assetPrefix: "/forge/",
  }),
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
