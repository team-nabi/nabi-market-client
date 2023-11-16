import { DarkModeButton } from '@/components/ui/dark-mode-button'
import BannerSection from './components/BannerSection'
import CategorySection from './components/CategorySection'
import HistorySection from './components/HistorySection'
import PopularCardSection from './components/PopularCardSection'

function HomePage() {
  return (
    <main className="flex flex-col items-center min-h-screen bg-background-color gap-8">
      <BannerSection />
      <CategorySection />
      <PopularCardSection />
      <HistorySection />
      <DarkModeButton />
    </main>
  )
}

export default HomePage
