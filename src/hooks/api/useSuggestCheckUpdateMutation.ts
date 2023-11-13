import { useMutation, useQueryClient } from '@tanstack/react-query'
import {
  DirectionType,
  SuggestCheck,
  SuggestionStatus,
  SuggestionType,
} from '@/types/suggest-check'

export const useSuggestCheckUpdateMutation = (
  suggestionType: SuggestionType,
  directionType: DirectionType,
  itemId: string | null,
) => {
  const queryClient = useQueryClient()
  return useMutation({
    onMutate: async ({
      suggestionId,
      suggestionStatus,
      currentPage,
    }: {
      suggestionId: string
      suggestionStatus: SuggestionStatus
      currentPage: number
    }) => {
      await queryClient.cancelQueries({
        queryKey: ['suggest-checks', suggestionType, directionType, itemId],
      })
      const oldSuggestChecks = queryClient.getQueryData([
        'suggest-checks',
        suggestionType,
        directionType,
        itemId,
      ])

      const newSuggestChecks: any = structuredClone(oldSuggestChecks)
      const currentPageSuggestChecks = newSuggestChecks.pages[currentPage]
      const currentSuggestCheck = currentPageSuggestChecks.find(
        (suggestCheck: SuggestCheck) =>
          suggestCheck.suggestionId === suggestionId,
      )
      currentSuggestCheck.suggestionStatus = suggestionStatus

      queryClient.setQueryData(
        ['suggest-checks', suggestionType, directionType, itemId],
        newSuggestChecks,
      )
      return { oldSuggestChecks, newSuggestChecks }
    },
    // TODO : 에러처리 및 각 종 Optimistic Update 관련 기능 처리하기
  })
}
