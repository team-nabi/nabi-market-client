import { Fragment, useEffect, useRef } from 'react'
import { InfiniteData } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import TradeHistoryCard from '@/components/domain/card/trade-history-card'
import EmptyDataWrapper from '@/components/domain/empty-data-wrapper'
import NoData from '@/components/domain/no-data'
import AppPath from '@/config/appPath'
import { useMyTradeHistoryQuery } from '@/hooks/api/queries/useMyTradeHistoriesQuery'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'
import { GetMyTradeHistoryListRes } from '@/services/history/history'
import { TradeHistory } from '@/types/tradeHistory'

const MyTradeHistoryList = () => {
  const router = useRouter()
  const {
    data,
    fetchNextPage,

    isFetchingNextPage,
    hasNextPage,
  } = useMyTradeHistoryQuery()

  const lastElementRef = useRef<HTMLDivElement | null>(null)
  const entry = useIntersectionObserver(lastElementRef, { threshold: 1.0 })

  useEffect(() => {
    if (isFetchingNextPage || !hasNextPage) {
      return
    }

    if (entry?.isIntersecting) {
      fetchNextPage()
    }
  }, [entry?.isIntersecting, fetchNextPage, isFetchingNextPage, hasNextPage])

  const isEmpty = data?.pages[0].data.historyList.length === 0
  return (
    <EmptyDataWrapper
      isEmpty={isEmpty}
      fallback={
        <NoData
          title={'거래내역이 없습니다.'}
          buttonContent={'홈으로 이동하기'}
          onClickButton={() => router.push(AppPath.home())}
        />
      }
    >
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
      <div ref={lastElementRef} />
    </EmptyDataWrapper>
  )
}

export default MyTradeHistoryList
