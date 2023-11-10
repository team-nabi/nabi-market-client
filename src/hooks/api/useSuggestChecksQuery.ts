import { useInfiniteQuery } from '@tanstack/react-query'
import { getSuggestChecks } from '@/services/suggest-check/suggestCheck'
import {
  DirectionType,
  SuggestCheck,
  SuggestionType,
} from '@/types/suggest-check'

export const useSuggestChecksQuery = (
  suggestionType: SuggestionType,
  directionType: DirectionType,
  itemId: string | null,
) => {
  return useInfiniteQuery({
    queryKey: ['suggest-checks', suggestionType, directionType, itemId],
    queryFn: async ({ pageParam = 0 }) => {
      const data = await getSuggestChecks({
        suggestionType,
        directionType,
        itemId,
        cursorId: pageParam,
      })

      const dataContainingPageInfo = data.map((suggestCheck: SuggestCheck) => ({
        ...suggestCheck,
        pageInfo: pageParam,
      }))

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
