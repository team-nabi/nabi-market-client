import Slider from '@/components/domain/slider'
import Assets from '@/config/assets'

const BannerSection = () => {
  const bannerArr = [
    { url: Assets.banner1 },
    { url: Assets.banner2 },
    { url: Assets.banner3 },
  ]
  return <Slider imageData={bannerArr} imageAspectRatio="auto" />
}

export default BannerSection
