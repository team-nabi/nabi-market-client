'use client'

import { useEffect, useRef, Fragment } from 'react'
import HistoryCard from '@/components/domain/card/trade-history-card'
import ExceptionBoundary from '@/components/domain/exception-boundary'
import MaxWidthWrapper from '@/components/domain/max-width-wrapper'
import { useMyTradeHistoryQuery } from '@/hooks/api/queries/useMyTradeHistoriesQuery'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'
import { MyHistoryRes } from '@/services/history/history'

const MyCardList = () => {
  const { data, fetchNextPage, isLoading, isError, isFetchingNextPage } =
    useMyTradeHistoryQuery()

  const lastElementRef = useRef<HTMLDivElement | null>(null)
  const entry = useIntersectionObserver(lastElementRef, { threshold: 1.0 })

  useEffect(() => {
    if (isFetchingNextPage) {
      return
    }

    if (entry?.isIntersecting) {
      fetchNextPage()
    }
  }, [entry?.isIntersecting, fetchNextPage, isFetchingNextPage])

  const isEmpty = data?.pages[0].length === 0

  return (
    <MaxWidthWrapper>
      <div>
        <ExceptionBoundary
          isLoading={isLoading}
          isError={isError}
          isEmpty={isEmpty}
          isFetchingNextPage={isFetchingNextPage}
        >
          <>
            {data?.pages.map((currentPage, pageIndex) => (
              <Fragment key={pageIndex}>
                {currentPage.map((myHistory: MyHistoryRes) => (
                  <div key={myHistory.historyId} className="mb-6">
                    <HistoryCard history={myHistory} />
                  </div>
                ))}
              </Fragment>
            ))}
          </>
        </ExceptionBoundary>

        {/*TODO: 로딩 부분에 대한 처리 논의 후 구체적으로 적용 할 것 => <Suspense> 를 사용할지, isLoading으로 처리할지 논의 */}
      </div>

      <div ref={lastElementRef} />
    </MaxWidthWrapper>
  )
}
export default MyCardList
