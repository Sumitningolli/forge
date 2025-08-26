import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  // Avoid failing builds on type or lint issues
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

// Build as a static export in production (no basePath/assetPrefix)
if (process.env.NODE_ENV === 'production') {
  nextConfig.output = "export";
}

export default nextConfig;
