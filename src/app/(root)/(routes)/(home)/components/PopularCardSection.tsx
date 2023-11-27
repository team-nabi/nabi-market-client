import { getPopularCardList } from '@/services/card/card'
import PopularCardSlider from './Slider'

async function getPopularCardValue() {
  try {
    const res = await getPopularCardList()
    const data = await res
    return data.data
  } catch (error: any) {
    console.log(error)
    throw new Error(error.message)
  }
}

const PopularCardSection = async () => {
  const data = await getPopularCardValue()

  return (
    data && (
      <section className="flex flex-col w-full  gap-6">
        <div className="text-[24px] font-bold px-4">오늘의 인기 물건</div>
        <PopularCardSlider cardData={data} />
      </section>
    )
  )
}

export default PopularCardSection
