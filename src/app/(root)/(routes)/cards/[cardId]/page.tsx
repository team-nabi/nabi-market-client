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
  console.log(data)

  return (
    <main className="flex-col min-h-screen bg-background-color">
      {data ? (
        <>
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
