import { useQuery } from '@tanstack/react-query'
import { RECENT_HISTORY_SIZE } from '@/constants/pageSize'
import { getRecentTradeHistoryList } from '@/services/history/history'

const useRecentHistoryQuery = () => {
  return useQuery({
    queryKey: ['recentHistory'] as const,
    queryFn: () => getRecentTradeHistoryList(RECENT_HISTORY_SIZE),
  })
}

export default useRecentHistoryQuery
