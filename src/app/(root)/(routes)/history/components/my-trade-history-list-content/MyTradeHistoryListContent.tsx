'use client'

import { Suspense } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import Loading from '@/app/loading'
import DefaultErrorTemplate from '@/components/domain/errors/DefaultErrorTemplate'
import MyTradeHistoryList from '../my-trade-history-list/MyTradeHistoryList'

const MyTradeHistoryListContent = () => {
  return (
    <>
      <ErrorBoundary
        fallback={
          <DefaultErrorTemplate onClickButton={() => console.log('재시도')} />
        }
      >
        <Suspense fallback={<Loading />}>
          <MyTradeHistoryList />
        </Suspense>
      </ErrorBoundary>
    </>
  )
}
export default MyTradeHistoryListContent
