import { Fragment } from 'react'
import { InfiniteData } from '@tanstack/react-query'
import TradeHistoryCard from '@/components/domain/trade-history-card'
import { GetMyTradeHistoryListRes } from '@/services/history/history'
import { TradeHistory } from '@/types/tradeHistory'

const MyTradeHistoryList = ({
  data,
}: {
  data: InfiniteData<GetMyTradeHistoryListRes, unknown> | undefined
}) => (
  <>
    {data?.pages.map(
      ({ data: { historyList } }: GetMyTradeHistoryListRes, pageIndex) => (
        <Fragment key={pageIndex}>
          {historyList.map((myHistory: TradeHistory) => (
            <div key={myHistory.historyId} className="mb-6">
              <TradeHistoryCard history={myHistory} />
            </div>
          ))}
        </Fragment>
      ),
    )}
  </>
)

export default MyTradeHistoryList
