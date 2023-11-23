import { useQuery } from '@tanstack/react-query'
import { getAvailableCardSuggestionList } from '@/services/suggestion/suggestion'

const useSuggestionsQuery = (cardId: number, isMyItem: boolean) => {
  return useQuery({
    queryKey: [cardId, 'suggestions'] as const,
    queryFn: () => getAvailableCardSuggestionList(cardId),
    enabled: !isMyItem,
  })
}

export default useSuggestionsQuery
