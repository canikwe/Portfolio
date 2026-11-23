import type { NextConfig } from 'next'

// Static export so the site keeps deploying to GitHub Pages.
// The custom domain (public/CNAME) serves from the root, so no basePath is needed.
const nextConfig: NextConfig = {
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,
}

export default nextConfig
