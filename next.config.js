/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  webpack: (config) => {
    config.resolve.preferRelative = true
    return config
  }
};

module.exports = nextConfig;
