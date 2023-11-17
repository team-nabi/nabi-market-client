import { getPopularCardList } from '@/services/card/card'
import PopularCardSlider from './Slider'

const popularCardData = [
  {
    cardId: 1,
    itemName: '아이패드 Pro 11',
    priceRange: 'PRICE_RANGE_EIGHT',
    thumbnail:
      'https://cdn.cetizen.com/CDN/market/market_large_crop/202311/20231115/231115145116_1_602265.jpeg',
  },
  {
    cardId: 4,
    itemName: '갤럭시 워치5',
    priceRange: 'PRICE_RANGE_FIVE',
    thumbnail:
      'https://cdn.cetizen.com/CDN/market/market_large_crop/202309/20230916/230916110503_1_1651983.jpg',
  },
  {
    cardId: 6,
    itemName: '신비키즈폰2',
    priceRange: 'PRICE_RANGE_FOUR',
    thumbnail: 'https://cdn.cetizen.com/CDN/review/thumb_350/7822.jpg',
  },
  {
    cardId: 2,
    itemName: '에어팟 3세대',
    priceRange: 'PRICE_RANGE_FIVE',
    thumbnail:
      'https://cdn.cetizen.com/CDN/market/market_large_crop/202310/20231030/231030191325_1_1754713.jpg',
  },
  {
    cardId: 13,
    itemName: '갤럭시버즈2프로',
    priceRange: 'PRICE_RANGE_THREE',
    thumbnail: 'https://cdn.cetizen.com/CDN/review/thumb_350/7874.jpg',
  },
]
const PopularCardSection = async () => {
  //TODO - 오늘의 인기 물건 API 배포되면 실제 데이터로 연결 예정
  //const  data = await getPopularCardList()
  return (
    <section className="flex flex-col w-full  gap-6">
      <div className="text-[24px] font-bold px-4">오늘의 인기 물건</div>
      <PopularCardSlider cardData={popularCardData} />
    </section>
  )
}

export default PopularCardSection
