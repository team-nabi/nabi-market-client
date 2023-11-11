import { formatDistanceToNow } from 'date-fns'
import koLocale from 'date-fns/locale/ko'
import TradeStateCard from '@/components/domain/card/trade-state-card'
import { getItemInfo } from '@/services/item/item'

async function getItemValue(itemId: string) {
  try {
    const res = await getItemInfo(itemId)
    const data = await res
    console.log(res)
    data.data.cardResponseDto.image =
      'https://cdn.cetizen.com/CDN/market/market_large_crop/202203/20220318/220318152808_1_2913635.jpg'
    console.log(data)
    return data.data.cardResponseDto
  } catch (e) {
    console.log(e)
  }
}

const MyItemSummaryCard = async ({ params }: { params: any }) => {
  const data = await getItemValue('3')
  console.log('ditto', data)
  return <TradeStateCard item={data} className={'border-none'} />
}
export default MyItemSummaryCard
