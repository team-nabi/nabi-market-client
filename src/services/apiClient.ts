import { Environment } from '@/config/environment'
import FetchAPI from '@/lib/fetchAPI'

const apiClient = FetchAPI.getInstance()
apiClient.setDefaultHeader('Content-Type', 'application/json')
apiClient.setBaseURL(Environment.apiAddress() ?? '')

export default apiClient
