import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
};

// Build as a static export in production (no basePath/assetPrefix)
if (process.env.NODE_ENV === 'production') {
  nextConfig.output = "export";
}

export default nextConfig;
