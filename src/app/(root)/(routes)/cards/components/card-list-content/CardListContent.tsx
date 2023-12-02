'use client'

import { Suspense } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import DefaultErrorTemplate from '@/components/domain/errors/DefaultErrorTemplate'
import InfiniteScrollLoading from '@/components/domain/infinite-scroll-loading'
import CardFilterSection from '../card-filter-section'
import CardList from '../card-list/CardList'

const CardListContent = () => {
  return (
    <>
      <CardFilterSection />
      <ErrorBoundary
        fallback={
          <DefaultErrorTemplate onClickButton={() => console.log('재시도')} />
        }
      >
        <Suspense fallback={<InfiniteScrollLoading />}>
          <CardList />
        </Suspense>
      </ErrorBoundary>
    </>
  )
}
export default CardListContent
