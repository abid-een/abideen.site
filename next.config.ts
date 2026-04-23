import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // If you're deploying to a sub-path (e.g. github.io/repo-name/), uncomment the line below:
  // basePath: '/abideen.site',
};

export default nextConfig;
