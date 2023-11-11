'use client'

import { useEffect, useRef, Fragment, useState } from 'react'
import TradeStateCard from '@/components/domain/card/trade-state-card'
import { useDibsQuery } from '@/hooks/api/queries/useDibsQuery'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'
import { Item } from '@/types'

const MyDibsList = () => {
  // TODO: 현재 API 명세에 status에 어떤 값을 줘야하는지에 대한 정의가 되어 있지 않기 때문에 임시로 상수 값을 전달함 => 추후에 실제 동작 값으로 고치기
  // TODO: size에 숫자 5를 넣었지만 상수 처리하여 바꿔줄 것
  const { data, fetchNextPage, isFetchingNextPage } = useDibsQuery()
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
              <TradeStateCard key={item._id} item={item} className="mb-6" />
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
