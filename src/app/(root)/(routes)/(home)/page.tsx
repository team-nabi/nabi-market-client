import Link from 'next/link'

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24 text-4xl font-bold text-red-500">
      hi
      <Link href={'/login'}>로긴</Link>
    </main>
  )
}
