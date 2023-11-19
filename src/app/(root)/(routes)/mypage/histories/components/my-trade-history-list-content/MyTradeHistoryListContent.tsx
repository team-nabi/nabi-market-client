'use client'

import { useEffect, useRef, Fragment } from 'react'
import ExceptionBoundary from '@/components/domain/exception-boundary'
import MaxWidthWrapper from '@/components/domain/max-width-wrapper'
import HistoryCard from '@/components/domain/trade-history-card'
import { useMyTradeHistoryQuery } from '@/hooks/api/queries/useMyTradeHistoriesQuery'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'
import { MyHistoryRes } from '@/services/history/history'
import MyTradeHistoryList from '../my-trade-history-list/MyTradeHistoryList'

const MyTradeHistoryListContent = () => {
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
          <MyTradeHistoryList data={data} />
        </ExceptionBoundary>
      </div>

      <div ref={lastElementRef} />
    </MaxWidthWrapper>
  )
}
export default MyTradeHistoryListContent