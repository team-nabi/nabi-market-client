'use client'

import { Suspense } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import Loading from '@/app/loading'
import DefaultErrorTemplate from '@/components/domain/errors/DefaultErrorTemplate'
import MyDibsList from './MyDibsList'

const MyDibsTemplate = () => {
  return (
    <>
      <ErrorBoundary
        fallback={
          <DefaultErrorTemplate onClickButton={() => console.log('재시도')} />
        }
      >
        <Suspense fallback={<Loading />}>
          <MyDibsList />
        </Suspense>
      </ErrorBoundary>
    </>
  )
}
export default MyDibsTemplate
