import { DarkModeButton } from '@/components/ui/dark-mode-button'
import BannerSection from './components/BannerSection'
import CategorySection from './components/CategorySection'

function HomePage() {
  return (
    <main className="flex flex-col items-center min-h-screen  text-4xl font-bold text-text-color bg-background-color gap-8">
      <BannerSection />
      <CategorySection />
      <DarkModeButton />
    </main>
  )
}

export default HomePage
