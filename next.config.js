/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['ggsc.s3.amazonaws.com']
  }
}

module.exports = nextConfig
