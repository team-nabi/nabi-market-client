'use client'

import { useEffect, useRef, Fragment, useState } from 'react'
import { useSuggestChecksQuery } from '@/hooks/api/useSuggestChecksQuery'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'
import { SuggestList } from '@/types/suggest'
import SuggestCheckCard from '../suggest-check-card'

const SuggestCheckList = () => {
  //   const [suggestionType, setSuggestionType] = useState('TRADE_AVAILABLE')
  //   const []

  // TODO: 현재 API 명세에 status에 어떤 값을 줘야하는지에 대한 정의가 되어 있지 않기 때문에 임시로 상수 값을 전달함 => 추후에 실제 동작 값으로 고치기
  const { data, fetchNextPage, isFetchingNextPage } = useSuggestChecksQuery({
    suggestionType: 'OFFER',
    directionType: 'RECEIVE',
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
      <div className="h-9 flex justify-center items-center my-12">
        {/* <SuggestStatusTabs
          currentTab={currentTab}
          setCurrentTab={setCurrentTab}
        /> */}
      </div>
      <div>
        {data?.pages[0].length !== 0
          ? data?.pages.map((group, i) => (
              <Fragment key={i}>
                {group.map((item: SuggestList) => (
                  <SuggestCheckCard
                    key={item.suggestionId}
                    suggestList={item}
                  />
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
export default SuggestCheckList
