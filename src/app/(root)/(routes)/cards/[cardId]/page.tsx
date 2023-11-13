import Slider from '@/components/domain/slider'
import { getCardInfo } from '@/services/card/card'
import DescriptionSection from './components/DescriptionSection'
import ProfileSection from './components/ProfileSection'
import TradeSection from './components/TradeSection'

type CardPageProps = {
  params: {
    cardId: string
  }
}

async function getCardValue(cardId: string) {
  try {
    const res = await getCardInfo(Number(cardId))
    return res.data.cardResponseDto
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
  } = data

  return (
    <main className="flex-col min-h-screen bg-background-color">
      <Slider imageData={images} imageAspectRatio="square" />
      <div className="p-4">
        <ProfileSection profileImg={null} userName={userName} />
        <DescriptionSection cardData={data} />
        <TradeSection
          priceRange={priceRange}
          tradeType={tradeType}
          tradeArea={tradeArea}
          authorId={userId}
          cardId={cardId}
          pokeAvailable={pokeAvailable}
        />
      </div>
    </main>
  )
}

export default CardPage
