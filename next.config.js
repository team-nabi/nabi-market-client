/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'team-01-bucket.s3.ap-northeast-2.amazonaws.com',
      'dummyimage.com',
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'airplanning-bucket.s3.ap-northeast-2.amazonaws.com',
      },
    ],
  },
}

module.exports = nextConfig
