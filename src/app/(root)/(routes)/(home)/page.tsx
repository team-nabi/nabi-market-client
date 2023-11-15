import Link from 'next/link'
import { DarkModeButton } from '@/components/ui/dark-mode-button'
import BannerSection from './components/BannerSection'
import CategorySection from './components/CategorySection'
import TestBlock from './components/TestBlock'

function HomePage() {
  return (
    <main className="flex flex-col items-center min-h-screen  text-4xl font-bold text-text-color bg-background-color gap-8">
      <BannerSection />
      <CategorySection />
      <Link href={'/test-auth-only'}>auth only</Link>
      <Link href={'/test-not-auth-only'}>not auth only</Link>
      <TestBlock />
      <DarkModeButton />
    </main>
  )
}

export default HomePage
