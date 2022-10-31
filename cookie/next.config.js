/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: '/abc/:path*',
        destination: '/'
      },
      {
        source: '/rewrite/RewriteTest1',
        destination: '/'
      },
      // {
      //   source: '/rewrite/RewriteTest3',
      //   destination: 'www.naver.com'
      // }
    ]
  }
}

module.exports = nextConfig
