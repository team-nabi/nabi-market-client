import { useQuery } from '@tanstack/react-query'
import Cookies from 'js-cookie'
import { Environment } from '@/config/environment'
import apiClient from '@/services/apiClient'
import { getCardInfo } from '@/services/card/card'

const useCardInfoQuery = (cardId: number, isLoggedIn: boolean) => {
  const token = Cookies.get(Environment.tokenName())

  return useQuery({
    queryKey: [cardId, 'cardInfo', token, isLoggedIn] as const,
    queryFn: () => {
      if (isLoggedIn) apiClient.setDefaultHeader('Authorization', `${token}`)
      const res = getCardInfo(cardId)
      return res
    },
  })
}

export default useCardInfoQuery
