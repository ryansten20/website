/** @type {import('next').NextConfig} */
const repo = 'website' // <-- change this

const nextConfig = {
  reactStrictMode: true,

  output: 'export',
  trailingSlash: true,

  basePath: `/${repo}`,
  assetPrefix: `/${repo}/`,

  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig

