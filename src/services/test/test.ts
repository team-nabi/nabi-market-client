import ApiEndPoint from '@/config/apiEndPoint'
import FetchAPI from '@/lib/fetchAPI'

const getTest = async () => {
  const api = FetchAPI.getInstance()
  const response = await api.get(ApiEndPoint.test())
  return response
}

export { getTest }
