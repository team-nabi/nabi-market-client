import { Fragment } from 'react'
import { InfiniteData } from '@tanstack/react-query'
import TradeHistoryCard from '@/components/domain/trade-history-card'
import { MyHistoryRes } from '@/services/history/history'

const MyTradeHistoryList = ({
  data,
}: {
  data: InfiniteData<MyHistoryRes[], unknown> | undefined
}) => (
  <>
    {data?.pages.map((currentPage, pageIndex) => (
      <Fragment key={pageIndex}>
        {currentPage.map((myHistory: MyHistoryRes) => (
          <div key={myHistory.historyId} className="mb-6">
            <TradeHistoryCard history={myHistory} />
          </div>
        ))}
      </Fragment>
    ))}
  </>
)

export default MyTradeHistoryList
