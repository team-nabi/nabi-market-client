'use client'

import HistoryCard from '@/components/domain/card/trade-history-card'
import useRecentHistoryQuery from '@/hooks/api/queries/useRecentHistoryQuery'

const dummyData = [
  {
    historyId: '1',
    fromCard: {
      cardId: 9,
      itemName: '아이폰12',
      thumbnail:
        'https://cdn.cetizen.com/CDN/market/market_large_crop/202203/20220318/220318152808_1_2913635.jpg',
      priceRange: 'PRICE_RANGE_ONE',
    },
    toCard: {
      cardId: 10,
      itemName: '아이폰11',
      thumbnail:
        'https://cdn.cetizen.com/CDN/market/market_large_crop/202203/20220318/220318152808_1_2913635.jpg',
      priceRange: 'PRICE_RANGE_ONE',
    },
    createdAt: '2023-11-10T14:42:09',
    modifiedAt: '2023-11-10T14:42:34',
  },
]
const HistorySection = () => {
  const { data: historyData } = useRecentHistoryQuery()
  console.log(historyData)

  return (
    <section className="flex flex-col w-full px-4 gap-6">
      <div className="text-[24px] font-bold">최근 거래성사된 물건들</div>
      {dummyData.map((data, i) => (
        <HistoryCard key={data.historyId} history={data} />
      ))}
    </section>
  )
}

export default HistorySection
