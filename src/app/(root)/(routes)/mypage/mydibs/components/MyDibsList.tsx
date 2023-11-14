'use client'

import { useEffect, useRef, Fragment } from 'react'
import TradeStatusCard from '@/components/domain/card/trade-status-card'
import { useMyDibsQuery } from '@/hooks/api/queries/useMyDibsQuery'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'
import { Card } from '@/types/card'

const MyDibsList = () => {
  const { data, fetchNextPage, isFetchingNextPage } = useMyDibsQuery()
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

  const hasData = data?.pages[0].length !== 0
  const pages = data?.pages
  return (
    <>
      <div className="flex flex-col items-center mt-6">
        {hasData
          ? pages?.map((currentPage, pageIndex) => (
              <Fragment key={pageIndex}>
                {currentPage.map((item: Card) => (
                  <TradeStatusCard
                    key={item.cardId}
                    card={item}
                    className="mb-6"
                  />
                ))}
              </Fragment>
            ))
          : '데이터가 없습니다.'}
        {isFetchingNextPage && '데이터 불러오는 중'}
      </div>

      <div ref={lastElementRef} />
    </>
  )
}
export default MyDibsList
