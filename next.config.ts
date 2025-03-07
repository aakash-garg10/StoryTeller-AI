import type { NextConfig } from "next";

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "replicate.delivery",
        pathname: "**", // Allow all paths under this domain
      },
    ],
  },
};

export default nextConfig;
