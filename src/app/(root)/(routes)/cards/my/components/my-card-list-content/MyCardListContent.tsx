'use client'

import { Suspense, useState } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import DefaultErrorTemplate from '@/components/domain/errors/DefaultErrorTemplate'
import InfiniteScrollLoading from '@/components/domain/infinite-scroll-loading'
import { TradeStatus } from '@/types/card'
import MyCardList from '../my-card-list/MyCardList'
import TradeStatusTabs from '../trade-status-tabs'

const MyCardListContent = () => {
  const [tradeStatus, setTradeStatus] = useState<TradeStatus>('TRADE_AVAILABLE')

  return (
    <>
      <TradeStatusTabs
        tradeStatus={tradeStatus}
        setTradeStatus={setTradeStatus}
      />
      <ErrorBoundary
        fallback={
          <DefaultErrorTemplate onClickButton={() => console.log('재시도')} />
        }
      >
        <Suspense fallback={<InfiniteScrollLoading />}>
          <MyCardList tradeStatus={tradeStatus} />
        </Suspense>
      </ErrorBoundary>
    </>
  )
}
export default MyCardListContent
