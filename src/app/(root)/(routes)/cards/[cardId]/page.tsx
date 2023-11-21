'use client'

import { useRouter } from 'next/navigation'
import NoData from '@/components/domain/no-data'
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
  const router = useRouter()
  const { data } = useCardInfoQuery(Number(params.cardId))
  const cardData = data?.data
  console.log(cardData)

  return (
    <main className="flex-col min-h-screen bg-background-color">
      {cardData ? (
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
            <DescriptionSection cardData={cardData.cardInfo} />
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
      ) : (
        <NoData
          title="물건 정보가 없습니다."
          buttonContent="뒤로가기"
          onClickButton={() => router.back()}
        />
      )}
    </main>
  )
}

export default CardPage
