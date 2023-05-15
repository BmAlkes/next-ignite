/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_KEY: process.env.API_KEY,
  },
  reactStrictMode: true,
  images: {
    domains: ["files.stripe.com"],
  },
};

module.exports = nextConfig;
