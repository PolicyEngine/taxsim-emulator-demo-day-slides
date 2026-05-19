/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/taxsim-emulator-demo-day-slides',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
