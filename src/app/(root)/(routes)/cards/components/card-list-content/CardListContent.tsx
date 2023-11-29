'use client'

import { Suspense } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import Loading from '@/app/loading'
import DefaultErrorTemplate from '@/components/domain/errors/DefaultErrorTemplate'
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
        <Suspense fallback={<Loading />}>
          <CardList />
        </Suspense>
      </ErrorBoundary>
    </>
  )
}
export default CardListContent
