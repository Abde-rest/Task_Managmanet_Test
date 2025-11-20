import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
    // https://nextjs.org/docs/app/api-reference/config/next-config-js/typescript
  },
  images: {
    domains: ["images.unsplash.com"],
  },
};

export default nextConfig;
