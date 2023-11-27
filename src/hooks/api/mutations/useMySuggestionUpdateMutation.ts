import {
  InfiniteData,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query'
import {
  GetMySuggestionListRes,
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
    onMutate: async ({ fromCardId, isAccepted }: PutMySuggestionStatusReq) => {
      await queryClient.cancelQueries({
        queryKey: ['my-suggestions', suggestionType, directionType, cardId],
      })
      const oldMySuggestionList:
        | InfiniteData<GetMySuggestionListRes, unknown>
        | undefined = queryClient.getQueryData([
        'my-suggestions',
        suggestionType,
        directionType,
        cardId,
      ])

      const newMySuggestionList = {
        ...oldMySuggestionList,
        pages: oldMySuggestionList?.pages.map((page) => ({
          ...page,
          data: {
            ...page.data,
            suggestionList: page.data.suggestionList.map((suggestion) =>
              suggestion.cardInfo.cardId === fromCardId
                ? {
                    ...suggestion,
                    suggestionInfo: {
                      ...suggestion.suggestionInfo,
                      suggestionStatus: isAccepted ? 'ACCEPTED' : 'REFUSED',
                    },
                  }
                : suggestion,
            ),
          },
        })),
      }
      queryClient.setQueryData(
        ['my-suggestions', suggestionType, directionType, cardId],
        newMySuggestionList,
      )

      return { oldMySuggestionList }
    },

    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: ['my-suggestions', suggestionType, directionType, cardId],
      })
    },
    onError: (error, variable, rollback) => {
      console.log('에러', error)
      // if (rollback) rollback()
      // else console.log(error)
    },
    // TODO : 에러처리 및 각 종 Optimistic Update 관련 기능 처리하기
  })
}
