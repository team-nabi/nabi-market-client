import PopularCardSlider from './Slider'

const popularCardData = [
  {
    cardId: 14,
    itemName: '아이패드 Pro 11',
    priceRange: 'PRICE_RANGE_EIGHT',
    thumbnail:
      'https://team-01-bucket.s3.ap-northeast-2.amazonaws.com/1f134814-6e58-4ea5-9782-a16661bac2bb-8.jpg',
  },
  {
    cardId: 4,
    itemName: '갤럭시 워치5',
    priceRange: 'PRICE_RANGE_FIVE',
    thumbnail:
      'https://team-01-bucket.s3.ap-northeast-2.amazonaws.com/1f134814-6e58-4ea5-9782-a16661bac2bb-8.jpg',
  },
  {
    cardId: 6,
    itemName: '신비키즈폰2',
    priceRange: 'PRICE_RANGE_FOUR',
    thumbnail:
      'https://team-01-bucket.s3.ap-northeast-2.amazonaws.com/1f134814-6e58-4ea5-9782-a16661bac2bb-8.jpg',
  },
  {
    cardId: 2,
    itemName: '에어팟 3세대',
    priceRange: 'PRICE_RANGE_FIVE',
    thumbnail:
      'https://team-01-bucket.s3.ap-northeast-2.amazonaws.com/1f134814-6e58-4ea5-9782-a16661bac2bb-8.jpg',
  },
  {
    cardId: 13,
    itemName: '갤럭시버즈2프로',
    priceRange: 'PRICE_RANGE_THREE',
    thumbnail:
      'https://team-01-bucket.s3.ap-northeast-2.amazonaws.com/1f134814-6e58-4ea5-9782-a16661bac2bb-8.jpg',
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
