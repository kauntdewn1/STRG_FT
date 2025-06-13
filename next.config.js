/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com'],
  },
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/duyt2iykf/**',
      },
    ],
    minimumCacheTTL: 60,
  },
  experimental: {
    optimizeCss: true,
  },
  // Configuração para páginas estáticas
  generateBuildId: async () => {
    return 'build-' + Date.now()
  },
}

module.exports = nextConfig 