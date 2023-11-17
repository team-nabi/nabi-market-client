import ApiEndPoint from '@/config/apiEndPoint'
import apiClient from '../apiClient'

const getKakaoRedirect = async (code: string) => {
  const response = await apiClient.get(ApiEndPoint.getKakaoRedirect(code))
  return response
}

const getGoogleRedirect = async (code: string) => {
  const response = await apiClient.get(ApiEndPoint.getGoogleRedirect(code))
  return response
}

const getValidateUser = async () => {
  const response = await apiClient.get(ApiEndPoint.getValidateUser())
  return response
}

export { getValidateUser, getKakaoRedirect, getGoogleRedirect }
