'use client'

import { useEffect, useRef, Fragment, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import MaxWidthWrapper from '@/components/domain/max-width-wrapper'
import { useSuggestChecksQuery } from '@/hooks/api/useSuggestChecksQuery'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'
import {
  DirectionType,
  SuggestCheck,
  SuggestionType,
} from '@/types/suggest-check'
import SuggestCheckCard from '../suggest-check-card'
import SuggestStatusTabs from '../suggest-status-tabs'

const SuggestCheckList = () => {
  const [suggestionTypeState, setSuggestionTypeState] =
    useState<SuggestionType>('OFFER')
  const [directionTypeState, setDirectionTypeState] =
    useState<DirectionType>('RECEIVE')
  const searchParams = useSearchParams()

  const { data, fetchNextPage, isFetchingNextPage } = useSuggestChecksQuery(
    suggestionTypeState,
    directionTypeState,
    searchParams.get('itemId'),
  )

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
        <SuggestStatusTabs
          setSuggestionTypeState={setSuggestionTypeState}
          setDirectionTypeState={setDirectionTypeState}
        />
      </div>
      <div>
        {hasData
          ? pages?.map((currentPage, pageIndex) => (
              <Fragment key={pageIndex}>
                {currentPage.map((suggestCheck: SuggestCheck) => (
                  <SuggestCheckCard
                    key={suggestCheck.suggestionId}
                    suggestCheck={suggestCheck}
                    suggestionTypeState={suggestionTypeState}
                    directionTypeState={directionTypeState}
                  />
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
export default SuggestCheckList
