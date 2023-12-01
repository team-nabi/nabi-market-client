import BannerSection from './components/BannerSection'
import CategorySection from './components/CategorySection'
import HistorySection from './components/HistorySection'
import PopularCardSection from './components/PopularCardSection'

function HomePage() {
  return (
    <main className="flex flex-col items-center min-h-screen gap-12 pb-8 bg-background-color">
      <BannerSection />
      <CategorySection />
      <PopularCardSection />
      <HistorySection />
    </main>
  )
}

export default HomePage
