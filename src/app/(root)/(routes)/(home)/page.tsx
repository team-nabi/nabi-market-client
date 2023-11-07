import Link from 'next/link'
import { DarkModeButton } from '@/components/ui/DarkModeButton'
import TestBlock from './components/TestBlock'

function HomePage() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24 text-4xl font-bold text-text-color bg-background-color">
      hi
      <Link href={'/test-auth-only'}>auth only</Link>
      <Link href={'/test-not-auth-only'}>not auth only</Link>
      <TestBlock />
      <DarkModeButton />
    </main>
  )
}

export default HomePage
