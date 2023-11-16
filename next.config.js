/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'cdn.cetizen.com',
      'airplanning-bucket.s3.ap-northeast-2.amazonaws.com',
      'github.com',
    ],
  },
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: `${process.env.NEXT_PUBLIC_API_ADDRESS}/:path*`,
      },
    ]
  },
}

module.exports = nextConfig
