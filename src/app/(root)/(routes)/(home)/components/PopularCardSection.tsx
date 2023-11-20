import { getPopularCardList } from '@/services/card/card'
import PopularCardSlider from './Slider'

const PopularCardSection = async () => {
  const data = await getPopularCardList()

  return (
    <section className="flex flex-col w-full  gap-6">
      <div className="text-[24px] font-bold px-4">오늘의 인기 물건</div>
      <PopularCardSlider cardData={data} />
    </section>
  )
}

export default PopularCardSection
