'use client'

import { useEffect, useRef, Fragment } from 'react'
import HistoryCard from '@/components/domain/history-card'
import MaxWidthWrapper from '@/components/domain/max-width-wrapper'
import { useMyHistoryQuery } from '@/hooks/api/queries/useMyHistoriesQuery'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'
import { MyHistoryRes } from '@/services/history/history'

const MyCardList = () => {
  const { data, fetchNextPage, isFetchingNextPage } = useMyHistoryQuery()

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
      <div>
        {hasData
          ? pages?.map((currentPage, pageIndex) => (
              <Fragment key={pageIndex}>
                {currentPage.map((myHistory: MyHistoryRes) => (
                  <div key={myHistory.historyId} className="mb-6">
                    <HistoryCard history={myHistory} />
                  </div>
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
export default MyCardList
