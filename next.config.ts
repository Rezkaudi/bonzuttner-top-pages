import { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {

  env: {
    STRAPI_API_TOKEN: process.env.STRAPI_API_TOKEN,
    TENANT_ID: process.env.TENANT_ID,
  },
  images: {
    unoptimized: true,
  },
};
const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);