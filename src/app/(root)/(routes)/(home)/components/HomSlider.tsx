import Slider from '@/components/domain/Slider'
import Assets from '@/config/assets'

const HomeSlider = () => {
  const bannerArr = [
    { _id: 1, image: Assets.banner1 },
    { _id: 2, image: Assets.banner2 },
    { _id: 3, image: Assets.banner3 },
  ]
  return <Slider imageData={bannerArr} imageAspectRatio="auto" />
}

export default HomeSlider
