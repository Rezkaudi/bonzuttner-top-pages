import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    STRAPI_API_TOKEN: process.env.STRAPI_API_TOKEN,
    TENANT_ID: process.env.TENANT_ID,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
