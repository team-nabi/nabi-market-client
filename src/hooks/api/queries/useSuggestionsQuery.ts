import { useQuery } from '@tanstack/react-query'
import { getAvailableCardSuggestionList } from '@/services/suggestion/suggestion'

const useSuggestionsQuery = (cardId: number) => {
  return useQuery({
    queryKey: [cardId, 'suggestions'] as const,
    queryFn: () => getAvailableCardSuggestionList(cardId),
  })
}

export default useSuggestionsQuery
