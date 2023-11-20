import { useInfiniteQuery } from '@tanstack/react-query'
import { getMySuggestionList } from '@/services/suggestion/suggestion'
import { MySuggestionRes } from '@/services/suggestion/suggestion'
import { DirectionType, SuggestionType } from '@/types/suggestion'

export const useMySuggestionsQuery = (
  suggestionType: SuggestionType,
  directionType: DirectionType,
  cardId: string | null,
) => {
  return useInfiniteQuery({
    queryKey: ['my-suggestions', suggestionType, directionType, cardId],
    queryFn: async ({ pageParam = 0 }) => {
      const data = await getMySuggestionList({
        suggestionType,
        directionType,
        cardId,
        cursorId: pageParam,
      })

      const dataContainingPageInfo = data.map(
        (mySuggestion: MySuggestionRes) => ({
          ...mySuggestion,
          pageInfo: pageParam,
        }),
      )

      return dataContainingPageInfo
    },

    initialPageParam: undefined,
    getNextPageParam: (lastPage, allPages, lastPageParam) => {
      if (lastPage.length === 0) {
        return undefined
      }
      return lastPage.nextCursorId
    },
  })
}
