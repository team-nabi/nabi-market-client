'use client'

import { useEffect, useRef, Fragment } from 'react'
import TradeStatusCard from '@/components/domain/card/trade-status-card'
import ExceptionBoundary from '@/components/domain/exception-boundary'
import { useMyDibsQuery } from '@/hooks/api/queries/useMyDibsQuery'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'
import { Card } from '@/types/card'

const MyDibsList = () => {
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

  const isEmpty = data?.pages[0].length === 0
  return (
    <>
      <div className="flex flex-col items-center mt-6">
        <ExceptionBoundary
          isLoading={isLoading}
          isError={isError}
          isEmpty={isEmpty}
          isFetchingNextPage={isFetchingNextPage}
        >
          <>
            {data?.pages.map((currentPage, pageIndex) => (
              <Fragment key={pageIndex}>
                {currentPage.map((item: Card) => (
                  <TradeStatusCard key={item.cardId} card={item} />
                ))}
              </Fragment>
            ))}
          </>
        </ExceptionBoundary>
      </div>

      <div ref={lastElementRef} />
    </>
  )
}
export default MyDibsList
