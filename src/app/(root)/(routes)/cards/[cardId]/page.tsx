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
  //TODO - data가 null일때 처리

  return (
    data && (
      <main className="flex-col min-h-screen bg-background-color">
        <Slider imageData={data.cardInfo.images} imageAspectRatio="square" />
        <div className="p-4">
          <ProfileSection
            profileImg={data.userInfo.imageUrl ?? null}
            userName={data.userInfo.nickname}
          />
          <DescriptionSection cardData={data.cardInfo} />
          <TradeSection
            priceRange={data.cardInfo.priceRange}
            tradeType={data.cardInfo.tradeType}
            tradeArea={data.cardInfo.tradeArea}
            authorId={data.userInfo.userId}
            cardId={data.cardInfo.cardId}
            pokeAvailable={data.cardInfo.pokeAvailable}
            status={data.cardInfo.status}
          />
        </div>
      </main>
    )
  )
}

export default CardPage
