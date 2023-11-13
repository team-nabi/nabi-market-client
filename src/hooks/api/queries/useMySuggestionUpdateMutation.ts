import { useMutation, useQueryClient } from '@tanstack/react-query'
import { MySuggestionRes } from '@/services/suggestion/suggestion'
import {
  DirectionType,
  SuggestionStatus,
  SuggestionType,
} from '@/types/suggestion'

export const useMySuggestionUpdateMutation = (
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
      const oldMySuggestionList = queryClient.getQueryData([
        'suggest-checks',
        suggestionType,
        directionType,
        itemId,
      ])

      const newMySuggestionList: any = structuredClone(oldMySuggestionList)
      const currentPageMySuggstionList = newMySuggestionList.pages[currentPage]
      const currentSuggestCheck = currentPageMySuggstionList.find(
        (suggestCheck: MySuggestionRes) =>
          suggestCheck.suggestion.suggestionId === suggestionId,
      )
      currentSuggestCheck.suggestionStatus = suggestionStatus

      queryClient.setQueryData(
        ['suggest-checks', suggestionType, directionType, itemId],
        newMySuggestionList,
      )
      return { oldMySuggestionList, newMySuggestionList }
    },
    // TODO : 에러처리 및 각 종 Optimistic Update 관련 기능 처리하기
  })
}
