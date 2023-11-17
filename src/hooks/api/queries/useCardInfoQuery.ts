import { useQuery } from '@tanstack/react-query'
import { getCardInfo } from '@/services/card/card'

const useCardInfoQuery = (cardId: number) => {
  return useQuery({
    queryKey: [cardId, 'cardInfo'] as const,
    queryFn: () => getCardInfo(cardId),
  })
}

export default useCardInfoQuery
