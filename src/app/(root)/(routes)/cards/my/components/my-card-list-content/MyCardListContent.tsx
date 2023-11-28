'use client'

import { useEffect, useRef, useState } from 'react'
import ExceptionBoundary from '@/components/domain/exception-boundary'
import { useMyCardsQuery } from '@/hooks/api/queries/useMyCardsQuery'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'
import { TradeStatus } from '@/types/card'
import MyCardList from '../my-card-list/MyCardList'
import TradeStatusTabs from '../trade-status-tabs'

const MyCardListContent = () => {
  const [tradeStatus, setTradeStatus] = useState<TradeStatus>('TRADE_AVAILABLE')

  const { data, fetchNextPage, isLoading, isError, isFetchingNextPage } =
    useMyCardsQuery({
      tradeStatus,
    })

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
        <MyCardList data={data} />
      </ExceptionBoundary>


      <div ref={lastElementRef} />
    </>
  )
}
export default MyCardListContent
