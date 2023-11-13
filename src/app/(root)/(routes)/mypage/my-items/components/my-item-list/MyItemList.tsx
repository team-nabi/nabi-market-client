'use client'

import { useEffect, useRef, Fragment, useState } from 'react'
import MaxWidthWrapper from '@/components/domain/max-width-wrapper'
import { useMyItemsQuery } from '@/hooks/api/useMyItemsQuery'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'
import { MyItem } from '@/types'
import { Status } from '@/types/item'
import MyItemCard from '../my-item-card'
import TradeStatusTabs from '../trade-status-tabs'

const MyItemList = () => {
  const [status, setStatus] = useState<Status>('TRADE_AVAILABLE')

  const { data, fetchNextPage, isFetchingNextPage } = useMyItemsQuery({
    status,
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

  const hasData = data?.pages[0].length !== 0
  const pages = data?.pages

  return (
    <MaxWidthWrapper>
      <div className="h-9 flex justify-center items-center my-12">
        <TradeStatusTabs status={status} setStatus={setStatus} />
      </div>
      <div>
        {hasData
          ? pages?.map((currentPage, pageIndex) => (
              <Fragment key={pageIndex}>
                {currentPage.map((myItem: MyItem) => (
                  <MyItemCard key={myItem.cardId} myItem={myItem} />
                ))}
              </Fragment>
            ))
          : '데이터가 없습니다.'}
        {/*TODO: 로딩 부분에 대한 처리 논의 후 구체적으로 적용 할 것 => <Suspense> 를 사용할지, isLoading으로 처리할지 논의 */}
        {isFetchingNextPage && '데이터 불러오는 중'}
      </div>

      <div ref={lastElementRef} />
    </MaxWidthWrapper>
  )
}
export default MyItemList
