import ApiEndPoint from '@/config/apiEndPoint'
import apiClient from '../apiClient'

const getTest = async () => {
  const response = await apiClient.get(ApiEndPoint.test())
  return response
}

export { getTest }
