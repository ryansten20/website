const repo = 'website'
const onGithubActions = process.env.GITHUB_ACTIONS === 'true'

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },

  ...(onGithubActions ? { basePath: `/${repo}`, assetPrefix: `/${repo}/` } : {}),
}

module.exports = nextConfig