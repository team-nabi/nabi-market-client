import { useQuery } from '@tanstack/react-query'
import { getAvailableCardSuggestionList } from '@/services/suggestion/suggestion'

const useRecentHistoryQuery = (cardId: number) => {
  //   return useQuery({
  //     //queryKey: ['recentHistory'] as const,
  //     //queryFn: () => getAvailableCardSuggestionList(cardId),
  //   })
}

export default useRecentHistoryQuery
