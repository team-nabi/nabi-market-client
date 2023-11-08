'use client'

import { useEffect, useRef, Fragment } from 'react'
import { useSearchParams } from 'next/navigation'
import { useMyItemsQuery } from '@/hooks/api/useMyItemsQuery'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'
import { MyItems } from '@/types'
import MyItemCard from '../my-item-card'

const MyItemList = () => {
  const searchParams = useSearchParams()

  // TODO: 현재 API 명세에 status에 어떤 값을 줘야하는지에 대한 정의가 되어 있지 않기 때문에 임시로 상수 값을 전달함 => 추후에 실제 동작 값으로 고치기
  // TODO: size에 숫자 5를 넣었지만 상수 처리하여 바꿔줄 것
  const { data, fetchNextPage, isFetchingNextPage } = useMyItemsQuery({
    status: 'EXCHANGEABLE',
  })

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
      <div className="h-9 flex justify-between items-center mb-6"></div>
      <div>
        {data?.pages[0].length !== 0
          ? data?.pages.map((group, i) => (
              <Fragment key={i}>
                {group.map((item: MyItems) => (
                  <MyItemCard key={item.cardId} myItems={item} />
                ))}
              </Fragment>
            ))
          : '데이터가 없습니다.'}
        {/*TODO: 로딩 부분에 대한 처리 논의 후 구체적으로 적용 할 것 => <Suspense> 를 사용할지, isLoading으로 처리할지 논의 */}
        {isFetchingNextPage && '데이터 불러오는 중'}
      </div>

      <div ref={lastElementRef} />
    </>
  )
}
export default MyItemList
