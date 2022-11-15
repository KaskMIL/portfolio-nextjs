/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
      hostname: 'res.cloudinary.com',
      },
    ],
  },
}

module.exports = nextConfig
