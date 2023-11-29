'use client'

import { useEffect, useRef, useState } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { useParams } from 'next/navigation'
import ExceptionBoundary from '@/components/domain/exception-boundary'
import { useMySuggestionsQuery } from '@/hooks/api/queries/useMySuggestionsQuery'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'
import { DirectionType, SuggestionType } from '@/types/suggestion'
import MySuggestionList from '../my-suggestion-list/MySuggestionList'
import SuggestionStatusTabs from '../suggestion-status-tabs'

const MySuggestionListContent = () => {
  const [suggestionTypeState, setSuggestionTypeState] =
    useState<SuggestionType>('OFFER')
  const [directionTypeState, setDirectionTypeState] =
    useState<DirectionType>('RECEIVE')
  const { myCardId } = useParams()

  const {
    data,
    fetchNextPage,
    isLoading,
    isError,
    isFetchingNextPage,
    hasNextPage,
  } = useMySuggestionsQuery(suggestionTypeState, directionTypeState, myCardId)

  const lastElementRef = useRef<HTMLDivElement | null>(null)
  const entry = useIntersectionObserver(lastElementRef, { threshold: 1.0 })

  useEffect(() => {
    if (isFetchingNextPage || !hasNextPage) {
      return
    }

    if (entry?.isIntersecting) {
      fetchNextPage()
    }
  }, [entry?.isIntersecting, fetchNextPage, isFetchingNextPage, hasNextPage])

  const isEmpty = data?.pages[0].data.suggestionList.length === 0
  return (
    <>
      <SuggestionStatusTabs
        setSuggestionTypeState={setSuggestionTypeState}
        setDirectionTypeState={setDirectionTypeState}
      />
      <ExceptionBoundary
        isLoading={isLoading}
        isError={isError}
        isEmpty={isEmpty}
        isFetchingNextPage={isFetchingNextPage}
      >
        <ErrorBoundary fallback={<div>렌더링 중 문제가 발생했습니다.</div>}>
          <MySuggestionList
            data={data}
            suggestionTypeState={suggestionTypeState}
            directionTypeState={directionTypeState}
          />
        </ErrorBoundary>
      </ExceptionBoundary>

      <div ref={lastElementRef} />
    </>
  )
}
export default MySuggestionListContent
