/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['pix1.agoda.net', 'pix2.agoda.net', 'pix4.agoda.net'], // Include all required domains
  },
};

module.exports = nextConfig;
