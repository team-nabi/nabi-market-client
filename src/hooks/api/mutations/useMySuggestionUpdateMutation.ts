import {
  InfiniteData,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query'
import { toast } from '@/hooks/useToast'
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
  const queryKey = ['my-suggestions', suggestionType, directionType, cardId]
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
        queryKey,
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
      queryClient.setQueryData(queryKey, newMySuggestionList)

      return { oldMySuggestionList }
    },

    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey,
      })
    },
    onSuccess: () => {
      toast({
        title: '해당 물건에 대한 교환 제안을 수락 하셨습니다.',
        duration: 1000,
      })
    },
    onError: (error, _, context) => {
      queryClient.setQueryData(queryKey, context?.oldMySuggestionList)
      toast({
        title: '교환 제안을 결정하던 중 문제가 생겼습니다.',
        duration: 2000,
      })
    },
  })
}
