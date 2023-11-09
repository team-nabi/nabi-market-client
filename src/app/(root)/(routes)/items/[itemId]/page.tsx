import { getItemInfo } from '@/services/item/item'
import ProfileSection from './components/ProfileSection'
import DescriptionSection from './components/description-section'
import TradeSection from './components/trade-section'

type ItemPageProps = {
  params: {
    itemId: string
  }
}

async function getItemValue(itemId: string) {
  try {
    const res = await getItemInfo(Number(itemId))
    return res.data.cardResponseDto
  } catch (e) {
    console.log(e)
  }
}

const ItemPage = async ({ params }: ItemPageProps) => {
  const data = await getItemValue(params.itemId)
  console.log(data)
  const {
    cardId,
    userName,
    priceRange,
    tradeType,
    tradeArea,
    userId,
    pokeAvailable,
  } = data

  return (
    <main className="flex-col min-h-screen bg-background-color">
      <div>이미지 슬라이더 영역</div>
      <div className="p-4">
        <ProfileSection profileImg={null} userName={userName} />
        <DescriptionSection itemData={data} />
        <TradeSection
          priceRange={priceRange}
          tradeType={tradeType}
          tradeArea={tradeArea}
          authorId={userId}
          itemId={cardId}
          pokeAvailable={pokeAvailable}
        />
      </div>
    </main>
  )
}

export default ItemPage
