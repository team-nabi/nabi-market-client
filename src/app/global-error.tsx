'use client'
//TODO: 추가 테스트 후 코드 추가
export default function GlobalError({
  _error,
  reset,
}: {
  _error: Error
  reset: () => void
}) {
  return (
    <html>
      <body>
        <h2>Something went wrong!</h2>
        <button onClick={() => reset()}>Try again</button>
      </body>
    </html>
  )
}