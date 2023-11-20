import Slider from '@/components/domain/slider'
import { getCardInfo } from '@/services/card/card'
import ProfileSection from './components/ProfileSection'
import DescriptionSection from './components/description-section'
import TradeSection from './components/trade-section'

type CardPageProps = {
  params: {
    cardId: string
  }
}

async function getCardValue(cardId: string) {
  try {
    const res = await getCardInfo(Number(cardId))
    return res.data.cardInfo
  } catch (e) {
    console.log(e)
  }
}

const CardPage = async ({ params }: CardPageProps) => {
  const data = await getCardValue(params.cardId)
  console.log(data)
  const {
    cardId,
    userName,
    priceRange,
    tradeType,
    tradeArea,
    userId,
    images,
    pokeAvailable,
    status,
  } = data! // TODO: data가 null일 때 처리

  return (
    <main className="flex-col min-h-screen bg-background-color">
      <Slider imageData={images} imageAspectRatio="square" />
      <div className="p-4">
        <ProfileSection profileImg={null} userName={userName} />
        <DescriptionSection cardData={data!} />
        {
          // TODO: data가 null일 때 처리
        }
        <TradeSection
          priceRange={priceRange}
          tradeType={tradeType}
          tradeArea={tradeArea}
          authorId={userId}
          cardId={cardId}
          pokeAvailable={pokeAvailable}
          status={status}
        />
      </div>
    </main>
  )
}

export default CardPage
