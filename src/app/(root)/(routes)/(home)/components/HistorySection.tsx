'use client'

import HistoryCard from '@/components/domain/card/trade-history-card'
import useRecentHistoryQuery from '@/hooks/api/queries/useRecentHistoryQuery'
import { TradeHistory } from '@/types/tradeHistory'

const HistorySection = () => {
  const { data: historyData } = useRecentHistoryQuery()
  const historyList = historyData?.data.historyList ?? []

  return (
    historyList.length !== 0 && (
      <div className="flex flex-col w-full gap-2">
        <div className="text-[24px] w-full px-4 font-bold">
          최근 거래성사된 물건들
        </div>
        <section className="flex flex-col w-full gap-6 px-4">
          {historyList.map((data: TradeHistory) => (
            <HistoryCard key={data.historyId} history={data} />
          ))}
        </section>
      </div>
    )
  )
}

export default HistorySection
