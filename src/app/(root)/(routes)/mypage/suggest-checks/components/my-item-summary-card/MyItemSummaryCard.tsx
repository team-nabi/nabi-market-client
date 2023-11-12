import TradeStatusCard from '@/components/domain/card/trade-status-card'
import { Item } from '@/types'

type MyItemSummaryCardProps = {
  item: Item
  params: any
}

const MyItemSummaryCard = ({ item, params }: MyItemSummaryCardProps) => {
  return <TradeStatusCard item={item} className={'border-none'} />
}
export default MyItemSummaryCard
