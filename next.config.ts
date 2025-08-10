/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  experimental: {
    swcLoader: true,
    swcMinify: true,
  },
  compiler: {
    swcWasm: true,
  }
};

module.exports = nextConfig;