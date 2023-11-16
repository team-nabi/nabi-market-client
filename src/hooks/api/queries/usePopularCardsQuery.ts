import { useQuery } from '@tanstack/react-query'
import { getPopularCardList } from '@/services/card/card'

const usePopularCardsQuery = () => {
  return useQuery({
    queryKey: ['popularCards'] as const,
    queryFn: getPopularCardList,
  })
}

export default usePopularCardsQuery
