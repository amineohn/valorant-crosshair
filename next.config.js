/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: false,
  },
  images: {
    domains: ["images.unsplash.com", "www.notebookcheck.net"],
  },
};

module.exports = nextConfig;
