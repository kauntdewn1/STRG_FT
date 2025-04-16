/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
<<<<<<< HEAD
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
=======
  images: {
    domains: ['res.cloudinary.com'],
>>>>>>> a73b54eddfb150a40b8283ef9102b7090f1fe1ab
  },
}

module.exports = nextConfig 