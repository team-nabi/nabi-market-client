'use client'

import HistoryCard from '@/components/domain/card/trade-history-card'
import useRecentHistoryQuery from '@/hooks/api/queries/useRecentHistoryQuery'
import { TradeHistory } from '@/types/tradeHistory'

// FIXME : 더미데이터 삭제 예정
const DUMMY_DATA = [
  {
    historyId: '1',
    fromCard: {
      cardId: 9,
      itemName: '아이폰13 Pro',
      thumbnail:
        'https://team-01-bucket.s3.ap-northeast-2.amazonaws.com/1f134814-6e58-4ea5-9782-a16661bac2bb-8.jpg',
      priceRange: 'PRICE_RANGE_EIGHT',
    },
    toCard: {
      cardId: 10,
      itemName: '갤럭시워치6',
      thumbnail:
        'https://team-01-bucket.s3.ap-northeast-2.amazonaws.com/1f134814-6e58-4ea5-9782-a16661bac2bb-8.jpg',
      priceRange: 'PRICE_RANGE_THREE',
    },
    createdAt: '2023-11-10T14:42:09',
    modifiedAt: '2023-11-10T14:42:34',
  },
]

const HistorySection = () => {
  const { data: historyData } = useRecentHistoryQuery()
  const historyList = historyData?.data.historyList ?? []

  // FIXME : DUMMY_DATA -> historyList로 변경 예정
  return (
    DUMMY_DATA.length !== 0 && (
      <section className="flex flex-col w-full px-4 gap-6">
        <div className="text-[24px] font-bold">최근 거래성사된 물건들</div>
        {DUMMY_DATA.map((data: TradeHistory) => (
          <HistoryCard key={data.historyId} history={data} />
        ))}
      </section>
    )
  )
}

export default HistorySection
