'use client'

import { useEffect, useRef, Fragment, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import MaxWidthWrapper from '@/components/domain/max-width-wrapper'
import { useMySuggestionsQuery } from '@/hooks/api/queries/useMySuggestionsQuery'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'
import { MySuggestionRes } from '@/services/suggestion/suggestion'
import { DirectionType, SuggestionType } from '@/types/suggestion'
import MySuggestionCard from '../my-suggestion-card'
import SuggestionStatusTabs from '../suggestion-status-tabs'

const MySuggestionList = () => {
  const [suggestionTypeState, setSuggestionTypeState] =
    useState<SuggestionType>('OFFER')
  const [directionTypeState, setDirectionTypeState] =
    useState<DirectionType>('RECEIVE')
  const searchParams = useSearchParams()

  const { data, fetchNextPage, isFetchingNextPage } = useMySuggestionsQuery(
    suggestionTypeState,
    directionTypeState,
    searchParams.get('cardId'),
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
        <SuggestionStatusTabs
          setSuggestionTypeState={setSuggestionTypeState}
          setDirectionTypeState={setDirectionTypeState}
        />
      </div>
      <div>
        {hasData
          ? pages?.map((currentPage, pageIndex) => (
              <Fragment key={pageIndex}>
                {currentPage.map(
                  (
                    mySuggestionListResponseData: MySuggestionRes & {
                      pageInfo: number
                    },
                  ) => (
                    <MySuggestionCard
                      key={
                        mySuggestionListResponseData.suggestionInfo.suggestionId
                      }
                      mySuggestionListResponseData={
                        mySuggestionListResponseData
                      }
                      suggestionTypeState={suggestionTypeState}
                      directionTypeState={directionTypeState}
                    />
                  ),
                )}
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
export default MySuggestionList
