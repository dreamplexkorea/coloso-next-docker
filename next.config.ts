import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["terminal.local"],
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "cdn.day1company.io" },
      { protocol: "https", hostname: "cdn.coloso.co.kr" },
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "cdn.imweb.me" },
    ],
  },
  turbopack: {},
};

export default nextConfig;
