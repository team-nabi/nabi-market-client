import { useInfiniteQuery } from '@tanstack/react-query'
import { getMySuggestionList } from '@/services/suggestion/suggestion'
import { DirectionType, SuggestionType } from '@/types/suggestion'

export const useMySuggestionsQuery = (
  suggestionType: SuggestionType,
  directionType: DirectionType,
  cardId: string | string[],
) => {
  return useInfiniteQuery({
    queryKey: ['my-suggestions', suggestionType, directionType, cardId],
    queryFn: async ({ pageParam = undefined }) =>
      await getMySuggestionList({
        suggestionType,
        directionType,
        cardId,
        cursorId: pageParam,
      }),
    initialPageParam: undefined,
    getNextPageParam: (lastPage: any) => {
      return lastPage.data.nextCursorId
    },
  })
}
