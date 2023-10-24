import Link from 'next/link'
import { DarkModeButton } from '@/components/ui/DarkModeButton'

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24 text-4xl font-bold text-background-color bg-primary-color">
      hi
      <DarkModeButton />
      <Link href={'/login'}>로긴</Link>
    </main>
  )
}
