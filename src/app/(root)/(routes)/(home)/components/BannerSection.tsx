import Slider from '@/components/domain/slider'
import Assets from '@/config/assets'

const BannerSection = () => {
  const bannerArr = [
    { id: 1, image: Assets.banner1 },
    { id: 2, image: Assets.banner2 },
    { id: 3, image: Assets.banner3 },
  ]
  return <Slider imageData={bannerArr} imageAspectRatio="auto" />
}

export default BannerSection
