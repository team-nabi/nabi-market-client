import { useMutation, useQueryClient } from '@tanstack/react-query'
import {
  DirectionType,
  SuggestionStatus,
  SuggestionType,
} from '@/types/suggestion'

export const useMySuggestionUpdateMutation = (
  suggestionType: SuggestionType,
  directionType: DirectionType,
  cardId: string | string[],
) => {
  const queryClient = useQueryClient()
  return useMutation({
    onMutate: async ({
      suggestionId,
      suggestionStatus,
    }: {
      suggestionId: string
      suggestionStatus: SuggestionStatus
    }) => {
      // await queryClient.cancelQueries({
      //   queryKey: ['my-suggestions', suggestionType, directionType, cardId],
      // })
      // console.log(
      //   suggestionType,
      //   directionType,
      //   cardId,
      //   suggestionId,
      // )
      // const oldMySuggestionList = queryClient.getQueryData([
      //   'my-suggestions',
      //   suggestionType,
      //   directionType,
      //   cardId,
      // ])

      // const newMySuggestionList: any = structuredClone(oldMySuggestionList)
      // const currentPageMySuggstionList =
      //   // newMySuggestionList.pages[currentCursorId]
      // const currentMySuggestionList = currentPageMySuggstionList.find(
      //   (mySuggestion: MySuggestionRes) =>
      //     mySuggestion.suggestionInfo.suggestionId === suggestionId,
      // )
      // currentMySuggestionList.suggestionInfo.suggestionStatus = suggestionStatus
      // console.log(newMySuggestionList)

      // queryClient.setQueryData(
      //   ['my-suggestions', suggestionType, directionType, cardId],
      //   newMySuggestionList,
      // )
      // return { oldMySuggestionList, newMySuggestionList }
      console.log('점검중')
    },
    // TODO : 에러처리 및 각 종 Optimistic Update 관련 기능 처리하기
  })
}
