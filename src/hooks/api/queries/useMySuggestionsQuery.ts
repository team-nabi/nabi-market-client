import { useInfiniteQuery } from '@tanstack/react-query'
import { getMySuggestionList } from '@/services/suggestion/suggestion'
import { MySuggestionRes } from '@/services/suggestion/suggestion'
import { DirectionType, SuggestionType } from '@/types/suggestion'

export const useMySuggestionsQuery = (
  suggestionType: SuggestionType,
  directionType: DirectionType,
  itemId: string | null,
) => {
  return useInfiniteQuery({
    queryKey: ['my-suggestions', suggestionType, directionType, itemId],
    queryFn: async ({ pageParam = 0 }) => {
      const data: MySuggestionRes[] = await getMySuggestionList({
        suggestionType,
        directionType,
        itemId,
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

    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages, lastPageParam) => {
      if (lastPage.length === 0) {
        return undefined
      }
      return lastPageParam + 1
    },
  })
}
