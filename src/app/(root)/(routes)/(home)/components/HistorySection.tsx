import HistoryCard from '@/components/domain/card/trade-history-card'
import { RECENT_HISTORY_SIZE } from '@/constants/pageSize'
import { getRecentTradeHistoryList } from '@/services/history/history'
import { TradeHistory } from '@/types/tradeHistory'

async function getRecentHistory() {
  try {
    const res = await getRecentTradeHistoryList(RECENT_HISTORY_SIZE)
    const data = await res
    return data.data.historyList
  } catch (error: any) {
    throw new Error(error)
  }
}

const HistorySection = async () => {
  const historyList = await getRecentHistory()

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
