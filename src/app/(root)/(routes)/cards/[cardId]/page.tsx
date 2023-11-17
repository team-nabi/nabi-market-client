'use client'

import Slider from '@/components/domain/slider'
import useCardInfoQuery from '@/hooks/api/queries/useCardInfoQuery'
import ProfileSection from './components/ProfileSection'
import DescriptionSection from './components/description-section'
import TradeSection from './components/trade-section'

type CardPageProps = {
  params: {
    cardId: string
  }
}

const CardPage = ({ params }: CardPageProps) => {
  const { data } = useCardInfoQuery(Number(params.cardId))
  console.log(data)
  return (
    <main className="flex-col min-h-screen bg-background-color">
      <div>물건상세정보페이지</div>
      {/* <Slider imageData={data.cardInfo.images} imageAspectRatio="square" /> */}
      <div className="p-4">
        {/* <ProfileSection profileImg={null} userName={data.userInfo.userName} />
        <DescriptionSection cardData={data.cardInfo} />
        <TradeSection
          priceRange={data.cardInfo.carriceRange}
          tradeType={data.cardInfo.carradeType}
          tradeArea={data.cardInfo.carradeArea}
          authorId={data.cardInfo.carserId}
          cardId={data.cardInfo.carardId}
          pokeAvailable={data.cardInfo.pokeAvailable}
          status={data.cardInfo.cardStatus}
        /> */}
      </div>
    </main>
  )
}

export default CardPage
