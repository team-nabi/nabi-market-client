'use client'

import { useEffect, useRef } from 'react'
import ExceptionBoundary from '@/components/domain/exception-boundary'
import { useMyDibsQuery } from '@/hooks/api/queries/useMyDibsQuery'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'
import MyDibsList from './MyDibsList'

const MyDibsTemplate = () => {
  const { data, fetchNextPage, isLoading, isError, isFetchingNextPage } =
    useMyDibsQuery()
  console.log(data)

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

  const isEmpty = data?.pages[0].data.dibList.length === 0

  return (
    <>
      <ExceptionBoundary
        isLoading={isLoading}
        isError={isError}
        isEmpty={isEmpty}
        isFetchingNextPage={isFetchingNextPage}
      >
        <MyDibsList data={data} />
      </ExceptionBoundary>

      <div ref={lastElementRef} />
    </>
  )
}
export default MyDibsTemplate
