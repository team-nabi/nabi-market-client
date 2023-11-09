import { useInfiniteQuery } from '@tanstack/react-query'
import { getSuggestChecks } from '@/services/suggest-check/suggestCheck'
import { DirectionType, SuggestionType } from '@/types/suggest'

export type UseSuggestChecksQuery = {
  suggestionType: SuggestionType
  directionType: DirectionType
}

export const useSuggestChecksQuery = ({
  suggestionType,
  directionType,
}: UseSuggestChecksQuery) => {
  return useInfiniteQuery({
    queryKey: ['suggest-checks', suggestionType, directionType],
    queryFn: async ({ pageParam = 0 }) =>
      await getSuggestChecks({
        suggestionType,
        directionType,
        cursorId: pageParam,
      }),
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages, lastPageParam) => {
      if (lastPage.length === 0) {
        return undefined
      }
      return lastPageParam + 1
    },
  })
}
