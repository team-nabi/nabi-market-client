import { useQuery } from '@tanstack/react-query'
import Cookies from 'js-cookie'
import { Environment } from '@/config/environment'
import apiClient from '@/services/apiClient'
import { getCardInfo } from '@/services/card/card'

const useCardInfoQuery = (cardId: number) => {
  const token = Cookies.get(Environment.tokenName())

  return useQuery({
    queryKey: [cardId, 'cardInfo', token] as const,
    queryFn: () => {
      apiClient.setDefaultHeader('Authorization', `${token}`)
      const res = getCardInfo(cardId)
      return res
    },
  })
}

export default useCardInfoQuery
