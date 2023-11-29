'use client'

import { useEffect, useRef, Fragment } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import ExceptionBoundary from '@/components/domain/exception-boundary'
import { useMyTradeHistoryQuery } from '@/hooks/api/queries/useMyTradeHistoriesQuery'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'
import MyTradeHistoryList from '../my-trade-history-list/MyTradeHistoryList'

const MyTradeHistoryListContent = () => {
  const {
    data,
    fetchNextPage,
    isLoading,
    isError,
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
    <>
      <ExceptionBoundary
        isLoading={isLoading}
        isError={isError}
        isEmpty={isEmpty}
        isFetchingNextPage={isFetchingNextPage}
      >
        <ErrorBoundary fallback={<div>렌더링 중 문제가 발생했습니다.</div>}>
          <MyTradeHistoryList data={data} />
        </ErrorBoundary>
      </ExceptionBoundary>

      <div ref={lastElementRef} />
    </>
  )
}
export default MyTradeHistoryListContent
