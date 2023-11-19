import { Fragment } from 'react'
import { InfiniteData } from '@tanstack/react-query'
import TradeHistoryCard from '@/components/domain/trade-history-card'
import { MyHistoryRes } from '@/services/history/history'

const MyTradeHistoryList = ({
  data,
}: {
  data: InfiniteData<any, unknown> | undefined
}) => (
  <>
    {data?.pages.map(({ historyId }, pageIndex) => (
      <Fragment key={pageIndex}>
        {historyId.map((myHistory: MyHistoryRes) => (
          <div key={myHistory.historyId} className="mb-6">
            <TradeHistoryCard history={myHistory} />
          </div>
        ))}
      </Fragment>
    ))}
  </>
)

export default MyTradeHistoryList
