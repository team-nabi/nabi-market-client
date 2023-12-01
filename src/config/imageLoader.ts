export default function nabiImageLoader({
  src,
  width,
  quality,
}: {
  src: string
  width: number
  quality?: number
}) {
  return `https://team-01-bucket.s3.ap-northeast-2.amazonaws.com/${src}?w=${width}&q=${
    quality ?? 50
  }`
}
