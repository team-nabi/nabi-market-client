import { FunctionComponent } from 'react'
import HistoryCard from '@/components/domain/history-card'
import PageTitle from '@/components/domain/page-title'
import { PriceRange } from '@/types/card'

interface MyHistoryListPageProps {}

const myHistory = {
  historyId: '1',
  fromCard: {
    cardId: 9,
    itemName: 'string',
    thumbnail:
      'https://cdn.cetizen.com/CDN/market/market_large_crop/202203/20220318/220318152808_1_2913635.jpg',
    priceRange: '20만원대' as PriceRange,
  },
  toCard: {
    cardId: 10,
    itemName: 'string',
    thumbnail:
      'https://cdn.cetizen.com/CDN/market/market_large_crop/202203/20220318/220318152808_1_2913635.jpg',
    priceRange: '20만원대' as PriceRange,
  },
  createdAt: '2023-11-10T16:24:34',
  modifiedAt: '2023-11-10T16:24:51',
}

const MyHistoryListPage: FunctionComponent<MyHistoryListPageProps> = ({}) => {
  return (
    <div>
      <PageTitle title="내 거래 완료 내역" />
      <HistoryCard history={myHistory} />
    </div>
  )
}

export default MyHistoryListPage
