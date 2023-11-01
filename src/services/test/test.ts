import ApiEndPoint from '@/config/apiEndPoint'
import FetchAPI from '@/lib/fetchAPI'

const getTest = async () => {
  const api = FetchAPI.getInstance()
  const response = await api.get(
    ApiEndPoint.test(),
    { next: { revalidate: 10 } },
    {
      'Content-Type': 'application/json',
    },
  )
  return response
}

export { getTest }
