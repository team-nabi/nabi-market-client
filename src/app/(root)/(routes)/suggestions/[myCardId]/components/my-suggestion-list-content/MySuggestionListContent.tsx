'use client'

import { useEffect, useRef, useState } from 'react'
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

  const { data, fetchNextPage, isLoading, isError, isFetchingNextPage } =
    useMySuggestionsQuery(suggestionTypeState, directionTypeState, myCardId)

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
        <MySuggestionList
          data={data}
          suggestionTypeState={suggestionTypeState}
          directionTypeState={directionTypeState}
        />
      </ExceptionBoundary>

      <div ref={lastElementRef} />
    </>
  )
}
export default MySuggestionListContent
