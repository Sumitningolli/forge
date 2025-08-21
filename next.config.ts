import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Required for GitHub Pages
  images: {
    unoptimized: true, // Disable Next.js image optimization (not supported on GitHub Pages)
  },
  basePath: "/forge", // Repo name
  assetPrefix: "/forge/", // Repo name
};

export default nextConfig;
