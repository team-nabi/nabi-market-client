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
  cardId: string | null,
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
        queryKey: ['my-suggestions', suggestionType, directionType, cardId],
      })
      console.log(
        suggestionType,
        directionType,
        cardId,
        suggestionId,
        currentPage,
      )
      const oldMySuggestionList = queryClient.getQueryData([
        'my-suggestions',
        suggestionType,
        directionType,
        cardId,
      ])

      const newMySuggestionList: any = structuredClone(oldMySuggestionList)
      const currentPageMySuggstionList = newMySuggestionList.pages[currentPage]
      const currentMySuggestionList = currentPageMySuggstionList.find(
        (mySuggestion: MySuggestionRes) =>
          mySuggestion.suggestionInfo.suggestionId === suggestionId,
      )
      currentMySuggestionList.suggestionInfo.suggestionStatus = suggestionStatus
      console.log(newMySuggestionList)

      queryClient.setQueryData(
        ['my-suggestions', suggestionType, directionType, cardId],
        newMySuggestionList,
      )
      return { oldMySuggestionList, newMySuggestionList }
    },
    // TODO : 에러처리 및 각 종 Optimistic Update 관련 기능 처리하기
  })
}
