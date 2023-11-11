'use client'

import { useEffect, useRef, Fragment } from 'react'
import TradeStateCard from '@/components/domain/card/trade-state-card'
import { useMyDibsQuery } from '@/hooks/api/queries/useMyDibsQuery'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'
import { Item } from '@/types'

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

  return (
    <>
      <div>
        {data?.pages.map((group, i) => (
          <Fragment key={i}>
            {group.map((item: Item) => (
              <TradeStateCard key={item.cardId} item={item} className="mb-6" />
            ))}
          </Fragment>
        ))}
        {isFetchingNextPage && '데이터 불러오는 중'}
      </div>

      <div ref={lastElementRef} />
    </>
  )
}
export default MyDibsList
