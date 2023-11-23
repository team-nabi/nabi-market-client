import { useQuery } from '@tanstack/react-query'
import { getCompleteRequest } from '@/services/card/card'

const useCompleteRequestQuery = (completeRequestId: number) => {
  return useQuery({
    queryKey: [completeRequestId, 'completeReqeust'] as const,
    queryFn: () => {
      const res = getCompleteRequest(completeRequestId)
      return res
    },
  })
}

export default useCompleteRequestQuery
