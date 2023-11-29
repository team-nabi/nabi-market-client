'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import Slider from '@/components/domain/slider'
import Button from '@/components/ui/button'
import Assets from '@/config/assets'
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
  const router = useRouter()
  const { data } = useCardInfoQuery(Number(params.cardId), isLoggedIn)
  const cardData = data?.data

  return (
    <main className="flex-col min-h-screen bg-background-color">
      {cardData && (
        <>
          <Button
            className="absolute top-[66px] z-10"
            variant={null}
            size={'icon'}
            onClick={() => router.back()}
          >
            <Image
              className="w-10 h-10"
              alt={'arrow-button'}
              src={Assets.chevronLeftGray}
            />
          </Button>
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
