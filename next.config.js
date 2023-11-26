/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'airplanning-bucket.s3.ap-northeast-2.amazonaws.com',
      },
      {
        protocol: 'https',
        hostname: 'team-01-bucket.s3.ap-northeast-2.amazonaws.com',
      },
      //FIXME - 삭제 예정
      {
        protocol: 'http',
        hostname: 'dummyimage.com',
      },
    ],
  },
}

module.exports = nextConfig
