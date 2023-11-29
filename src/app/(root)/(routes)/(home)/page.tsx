import BannerSection from './components/BannerSection'
import CategorySection from './components/CategorySection'
import HistorySection from './components/HistorySection'
import PopularCardSection from './components/PopularCardSection'

function HomePage() {
  return (
    <main className="flex flex-col items-center min-h-screen gap-12 bg-background-color pb-8">
      <BannerSection />
      <CategorySection />
      <PopularCardSection />
      <HistorySection />
    </main>
  )
}

export default HomePage
