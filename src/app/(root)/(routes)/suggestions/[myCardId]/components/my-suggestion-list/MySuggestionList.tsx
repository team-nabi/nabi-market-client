import { Fragment } from 'react'
import { InfiniteData } from '@tanstack/react-query'
import { GetMySuggestionListRes } from '@/services/suggestion/suggestion'
import { Card } from '@/types/card'
import { DirectionType, Suggestion, SuggestionType } from '@/types/suggestion'
import MySuggestionCard from '../my-suggestion-card'

const MySuggestionList = ({
  data,
  suggestionTypeState,
  directionTypeState,
}: {
  data: InfiniteData<GetMySuggestionListRes, unknown> | undefined
  suggestionTypeState: SuggestionType
  directionTypeState: DirectionType
}) => (
  <>
    {data?.pages.map(
      ({ data: { suggestionList } }: GetMySuggestionListRes, pageIndex) => (
        <Fragment key={pageIndex}>
          {suggestionList.map(
            (mySuggestion: { cardInfo: Card; suggestionInfo: Suggestion }) => (
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
  </>
)

export default MySuggestionList
