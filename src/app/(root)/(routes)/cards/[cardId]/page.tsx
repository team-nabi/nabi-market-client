'use client'

import Slider from '@/components/domain/slider'
import { useAuth } from '@/contexts/AuthProvider'
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
  const { isLoggedIn } = useAuth()
  const { data } = useCardInfoQuery(Number(params.cardId), isLoggedIn)
  const cardData = data?.data

  return (
    <main className="flex-col min-h-screen bg-background-color">
      {cardData && (
        <>
          <Slider
            imageData={cardData.cardInfo.images}
            imageAspectRatio="square"
          />
          <div className="p-4">
            <ProfileSection
              profileImg={cardData.userInfo.imageUrl ?? null}
              userName={cardData.userInfo.nickname}
            />
            <DescriptionSection
              cardData={cardData.cardInfo}
              authorId={cardData.userInfo.userId}
            />
            <TradeSection
              priceRange={cardData.cardInfo.priceRange}
              tradeType={cardData.cardInfo.tradeType}
              tradeArea={cardData.cardInfo.tradeArea}
              authorId={cardData.userInfo.userId}
              cardId={cardData.cardInfo.cardId}
              pokeAvailable={cardData.cardInfo.pokeAvailable}
              status={cardData.cardInfo.status}
            />
          </div>
        </>
      )}
    </main>
  )
}

export default CardPage
