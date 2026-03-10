/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  generateBuildId: async () => {
    return 'build-' + Date.now().toString()
  },
}

module.exports = nextConfig
