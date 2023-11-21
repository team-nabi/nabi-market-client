import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from '@/hooks/useToast'
import {
  AvailableCardSuggestionListRes,
  postSuggestion,
} from '@/services/suggestion/suggestion'

const useSuggestMutation = (toCardId: number, fromCardId: number) => {
  const queryClient = useQueryClient()

  const queryKey = [toCardId, 'suggestions']
  return useMutation({
    mutationFn: postSuggestion,
    onMutate: async () => {
      // 롤백을 위한 이전 값 저장
      const previousSuggestions = queryClient.getQueryData([
        toCardId,
        'suggestions',
      ])
      if (previousSuggestions) {
        await queryClient.cancelQueries({ queryKey })

        const updateSuggestions: any = structuredClone(previousSuggestions)
        //낙관적 업데이트
        const indexToUpdate = updateSuggestions.findIndex(
          (card: AvailableCardSuggestionListRes) =>
            card.cardInfo.cardId === fromCardId,
        )
        updateSuggestions[indexToUpdate].suggestionInfo.suggestionStatus =
          'WAITING'
        queryClient.setQueryData(queryKey, updateSuggestions)
      }
      return { previousSuggestions }
    },
    onError: (error, _, context) => {
      queryClient.setQueryData(queryKey, context?.previousSuggestions)
      toast({
        title: '제안을 실패했습니다',
        duration: 2000,
      })
    },
  })
}

export default useSuggestMutation
