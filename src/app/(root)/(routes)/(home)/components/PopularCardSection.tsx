import PopularCardSlider from './Slider'

const PopularCardSection = async () => {
  //TODO - 오늘의 인기 물건 API 배포되면 실제 데이터로 연결 예정
  //const  data = await getPopularCardList()
  return (
    <section className="flex flex-col w-full  gap-6">
      <div className="text-[24px] font-bold px-4">오늘의 인기 물건</div>
      {/* <PopularCardSlider cardData={data} /> */}
    </section>
  )
}

export default PopularCardSection
