import ApiEndPoint from '@/config/apiEndPoint'
import apiClient from '../apiClient'

const getTest = async () => {
  const response = await apiClient.get(
    ApiEndPoint.test(),
    { next: { revalidate: 10 } },
    {
      'Content-Type': 'application/json',
    },
  )
  return response
}

export { getTest }
