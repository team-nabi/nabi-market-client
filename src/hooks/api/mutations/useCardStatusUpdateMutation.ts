import { useMutation, useQueryClient } from '@tanstack/react-query'
import Cookies from 'js-cookie'
import { Environment } from '@/config/environment'
import { toast } from '@/hooks/useToast'
import { putCardStatus } from '@/services/card/card'
import { TradeStatusObjs } from '@/types/card'

const useCardStatusUpdateMutation = (
  cardId: number,
  status: TradeStatusObjs['key'],
) => {
  const queryClient = useQueryClient()
  const token = Cookies.get(Environment.tokenName())

  const queryKey = [cardId, 'cardInfo', token]
  return useMutation({
    mutationFn: putCardStatus,
    onMutate: async () => {
      const previousCardInfo = queryClient.getQueryData(queryKey)
      if (previousCardInfo) {
        await queryClient.cancelQueries({ queryKey })

        const updatedCardInfo: any = structuredClone(previousCardInfo)
        updatedCardInfo.data.cardInfo.status =
          status === 'TRADE_AVAILABLE' ? 'RESERVED' : 'TRADE_AVAILABLE'
        queryClient.setQueryData(queryKey, updatedCardInfo)
      }
      return { previousCardInfo }
    },
    onSuccess: () => {
      toast({
        title: '물건의 상태 변경을 성공했습니다',
        duration: 1000,
      })
    },
    onError: (error, _, context) => {
      queryClient.setQueryData(queryKey, context?.previousCardInfo)
      toast({
        title: '물건의 상태 변경을 실패했습니다',
        duration: 2000,
      })
    },
  })
}

export default useCardStatusUpdateMutation
