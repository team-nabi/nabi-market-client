import { useQuery } from '@tanstack/react-query'
import Cookies from 'js-cookie'
import { Environment } from '@/config/environment'
import apiClient from '@/services/apiClient'
import { getCardInfo } from '@/services/card/card'

const useCardInfoQuery = (cardId: number, isLoggedIn: boolean) => {
  const token = Cookies.get(Environment.tokenName())

  return useQuery({
    // eslint-disable-next-line @tanstack/query/exhaustive-deps
    queryKey: [cardId, 'cardInfo'] as const,
    queryFn: () => {
      if (isLoggedIn) apiClient.setDefaultHeader('Authorization', `${token}`)
      const res = getCardInfo(cardId)
      return res
    },
    staleTime: 0,
  })
}

export default useCardInfoQuery
