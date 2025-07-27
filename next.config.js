/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  // Optional: allow hosted assets like avatars
  images: {
    domains: ['avatars.githubusercontent.com', 'ui-avatars.com'],
  },

  // Optional: Enable path aliases in runtime (not always required but useful)
  webpack: (config) => {
    config.resolve.alias['@'] = __dirname;
    return config;
  },

  // Optional: Helpful for deployment portability (Vercel/docker)
  output: 'standalone'
};

module.exports = nextConfig;
