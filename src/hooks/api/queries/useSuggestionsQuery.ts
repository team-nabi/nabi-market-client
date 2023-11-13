import { useQuery } from '@tanstack/react-query'
import { getSuggestions } from '@/services/suggest/suggest'

const useSuggestionsQuery = (itemId: number) => {
  return useQuery({
    queryKey: [itemId, 'suggestions'] as const,
    queryFn: () => getSuggestions(itemId),
  })
}

export default useSuggestionsQuery
