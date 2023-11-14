/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'cdn.cetizen.com',
      'airplanning-bucket.s3.ap-northeast-2.amazonaws.com',
      'github.com',
    ],
  },
}

module.exports = nextConfig
