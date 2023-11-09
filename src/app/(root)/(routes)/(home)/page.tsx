import Link from 'next/link'
import Slider from '@/components/domain/Slider/Slider'
import { DarkModeButton } from '@/components/ui/DarkModeButton'
import Assets from '@/config/assets'
import TestBlock from './components/TestBlock'

function HomePage() {
  const bannerArr = [
    { _id: 1, image: Assets.banner1 },
    { _id: 2, image: Assets.banner2 },
    { _id: 3, image: Assets.banner3 },
  ]
  return (
    <main className="flex flex-col items-center justify-between min-h-screen  text-4xl font-bold text-text-color bg-background-color">
      <Slider imageData={bannerArr} imageAspectRatio="auto" />
      <Link href={'/test-auth-only'}>auth only</Link>
      <Link href={'/test-not-auth-only'}>not auth only</Link>
      <TestBlock />
      <DarkModeButton />
    </main>
  )
}

export default HomePage
