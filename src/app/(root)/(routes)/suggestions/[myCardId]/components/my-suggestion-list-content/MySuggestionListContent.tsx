'use client'

import { Suspense, useState } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import Loading from '@/app/loading'
import DefaultErrorTemplate from '@/components/domain/errors/DefaultErrorTemplate'
import { DirectionType, SuggestionType } from '@/types/suggestion'
import MySuggestionList from '../my-suggestion-list/MySuggestionList'
import SuggestionStatusTabs from '../suggestion-status-tabs'

const MySuggestionListContent = () => {
  const [suggestionTypeState, setSuggestionTypeState] =
    useState<SuggestionType>('OFFER')
  const [directionTypeState, setDirectionTypeState] =
    useState<DirectionType>('RECEIVE')
  return (
    <>
      <SuggestionStatusTabs
        setSuggestionTypeState={setSuggestionTypeState}
        setDirectionTypeState={setDirectionTypeState}
      />

      <ErrorBoundary
        fallback={
          <DefaultErrorTemplate onClickButton={() => console.log('재시도')} />
        }
      >
        <Suspense fallback={<Loading />}>
          <MySuggestionList
            suggestionTypeState={suggestionTypeState}
            directionTypeState={directionTypeState}
          />
        </Suspense>
      </ErrorBoundary>
    </>
  )
}
export default MySuggestionListContent
