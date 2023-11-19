import { Fragment } from 'react'
import { InfiniteData } from '@tanstack/react-query'
import { MySuggestionRes } from '@/services/suggestion/suggestion'
import { DirectionType, SuggestionType } from '@/types/suggestion'
import MySuggestionCard from '../my-suggestion-card'

const MySuggestionList = ({
  data,
  suggestionTypeState,
  directionTypeState,
}: {
  data: InfiniteData<any, unknown> | undefined
  suggestionTypeState: SuggestionType
  directionTypeState: DirectionType
}) => (
  <>
    {data?.pages.map(({ suggestionList }, pageIndex) => (
      <Fragment key={pageIndex}>
        {suggestionList.map(
          (
            mySuggestionRes: MySuggestionRes & {
              pageInfo: number
            },
          ) => (
            <MySuggestionCard
              key={mySuggestionRes.suggestionInfo.suggestionId}
              mySuggestionRes={mySuggestionRes}
              suggestionTypeState={suggestionTypeState}
              directionTypeState={directionTypeState}
            />
          ),
        )}
      </Fragment>
    ))}
  </>
)

export default MySuggestionList
