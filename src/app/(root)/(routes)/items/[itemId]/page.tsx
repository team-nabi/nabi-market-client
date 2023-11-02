import { getItemInfo } from '@/services/item/item'
import ProfileSection from './components/ProfileSection'
import DescriptionSection from './components/description-section/DescriptionSection'
import TradeSection from './components/trade-section'

type ItemPageProps = {
  params: {
    itemId: string
  }
}

async function getItemValue(itemId: string) {
  const res = await getItemInfo(itemId)
  return res
}

const ItemPage = async ({ params }: ItemPageProps) => {
  const itemData = await getItemValue(params.itemId)
  console.log(itemData)

  return (
    <main className="flex-col min-h-screen bg-background-color">
      <div>이미지 슬라이더 영역</div>
      <div className="p-4">
        <ProfileSection profileImg={null} userName="임시이름" />
        <DescriptionSection />
        <TradeSection />
      </div>
    </main>
  )
}

export default ItemPage
