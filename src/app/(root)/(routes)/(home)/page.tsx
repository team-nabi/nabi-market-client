import Link from 'next/link'
import Button from '@/components/ui/Button'
import { DarkModeButton } from '@/components/ui/DarkModeButton'

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24 text-4xl font-bold text-text-color bg-background-color">
      hi
      <DarkModeButton />
      <Link href={'/login'}>로긴</Link>
      <Button variant={'gradation'}>버튼</Button>
    </main>
  )
}
