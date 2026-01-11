/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  distDir: 'docs',
  basePath: '',
  assetPrefix: '',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
