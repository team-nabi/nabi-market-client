'use client'

import { useEffect, useRef, useState } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import ExceptionBoundary from '@/components/domain/exception-boundary'
import { useMyCardsQuery } from '@/hooks/api/queries/useMyCardsQuery'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'
import { TradeStatus } from '@/types/card'
import MyCardList from '../my-card-list/MyCardList'
import TradeStatusTabs from '../trade-status-tabs'

const MyCardListContent = () => {
  const [tradeStatus, setTradeStatus] = useState<TradeStatus>('TRADE_AVAILABLE')

  const {
    data,
    fetchNextPage,
    isLoading,
    isError,
    isFetchingNextPage,
    hasNextPage,
  } = useMyCardsQuery({
    tradeStatus,
  })

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

  const isEmpty = data?.pages[0].data.cardList.length === 0
  return (
    <>
      <TradeStatusTabs
        tradeStatus={tradeStatus}
        setTradeStatus={setTradeStatus}
      />
      <ExceptionBoundary
        isLoading={isLoading}
        isError={isError}
        isEmpty={isEmpty}
        isFetchingNextPage={isFetchingNextPage}
      >
        <ErrorBoundary fallback={<div>렌더링 중 문제가 발생했습니다.</div>}>
          <MyCardList data={data} />
        </ErrorBoundary>
      </ExceptionBoundary>

      <div ref={lastElementRef} />
    </>
  )
}
export default MyCardListContent
