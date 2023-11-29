import { Fragment, useEffect, useRef } from 'react'
import { useParams, useRouter } from 'next/navigation'
import EmptyDataWrapper from '@/components/domain/empty-data-wrapper'
import NoData from '@/components/domain/no-data'
import AppPath from '@/config/appPath'
import { useMySuggestionsQuery } from '@/hooks/api/queries/useMySuggestionsQuery'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'
import { GetMySuggestionListRes } from '@/services/suggestion/suggestion'
import { Card } from '@/types/card'
import { DirectionType, Suggestion, SuggestionType } from '@/types/suggestion'
import MySuggestionCard from '../my-suggestion-card'

const MySuggestionList = ({
  suggestionTypeState,
  directionTypeState,
}: {
  suggestionTypeState: SuggestionType
  directionTypeState: DirectionType
}) => {
  const router = useRouter()
  const { myCardId } = useParams()

  const {
    data,
    fetchNextPage,

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
    <EmptyDataWrapper
      isEmpty={isEmpty}
      fallback={
        <NoData
          title={'제안이 없습니다.'}
          buttonContent={'제안 하러가기'}
          onClickButton={() => router.push(AppPath.cards())}
        />
      }
    >
      {data?.pages.map(
        ({ data: { suggestionList } }: GetMySuggestionListRes, pageIndex) => (
          <Fragment key={pageIndex}>
            {suggestionList.map(
              (mySuggestion: {
                cardInfo: Card
                suggestionInfo: Suggestion
              }) => (
                <MySuggestionCard
                  key={mySuggestion.suggestionInfo.suggestionId}
                  mySuggestion={mySuggestion}
                  suggestionTypeState={suggestionTypeState}
                  directionTypeState={directionTypeState}
                />
              ),
            )}
          </Fragment>
        ),
      )}
      <div ref={lastElementRef} />
    </EmptyDataWrapper>
  )
}

export default MySuggestionList
