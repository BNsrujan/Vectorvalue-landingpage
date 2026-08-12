import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["127.0.0.1"],
  async redirects() {
    return [
      {
        source: "/core-expertise/foundation-engineering",
        destination: "/core-expertise/ground-engineering",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
