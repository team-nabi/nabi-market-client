'use client'

import HistoryCard from '@/components/domain/card/trade-history-card'
import useRecentHistoryQuery from '@/hooks/api/queries/useRecentHistoryQuery'
import { TradeHistory } from '@/types/tradeHistory'

const HistorySection = () => {
  const { data: historyData } = useRecentHistoryQuery()
  const historyList = historyData?.data.historyList ?? []

  return (
    historyList.length !== 0 && (
      <section className="flex flex-col w-full px-4 gap-6">
        <div className="text-[24px] font-bold">최근 거래성사된 물건들</div>
        {historyList.map((data: TradeHistory) => (
          <HistoryCard key={data.historyId} history={data} />
        ))}
      </section>
    )
  )
}

export default HistorySection
