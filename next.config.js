/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'team-01-bucket.s3.ap-northeast-2.amazonaws.com',
      },
    ],
    imageSizes: [12, 16],
    deviceSizes: [480, 640],
  },
}

module.exports = nextConfig
