import { useMutation, useQueryClient } from '@tanstack/react-query'
import {
  PutMySuggestionStatusReq,
  putMySuggestionStatus,
} from '@/services/suggestion/suggestion'
import { DirectionType, SuggestionType } from '@/types/suggestion'

export const useMySuggestionUpdateMutation = (
  suggestionType: SuggestionType,
  directionType: DirectionType,
  cardId: string | string[],
) => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: async ({
      fromCardId,
      toCardId,
      isAccepted,
    }: PutMySuggestionStatusReq) => {
      await putMySuggestionStatus({ fromCardId, toCardId, isAccepted })
    },
    onMutate: async (variables: any) => {
      console.log('onMutate', variables)
      //   const oldMySuggestionList = queryClient.getQueryData([
      //     'my-suggestions',
      //     suggestionType,
      //     directionType,
      //     myCardId,
      //   ])
      //   console.log(oldMySuggestionList)
      // },
      // onError: (error, variable, rollback) => {
      //   if (rollback) rollback()
      //   else console.log(error)
      // },
      // onSettled: () => {
      //   queryClient.invalidateQueries([
      //     'my-suggestions',
      //     suggestionType,
      //     directionType,
      //     cardId,
      //   ])
      // },
      // TODO : 에러처리 및 각 종 Optimistic Update 관련 기능 처리하기
    },

    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: ['my-suggestions', suggestionType, directionType, cardId],
      })
    },
  })
}
