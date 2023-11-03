import ApiEndPoint from '@/config/apiEndPoint'
import apiClient from '../apiClient'

const getKakaoLogin = async () => {
  const response = await apiClient.get(ApiEndPoint.kakaoLogin())

  return response
}

const getGoogleLogin = async () => {
  const response = await apiClient.get(ApiEndPoint.googleLogin())

  return response
}

export { getKakaoLogin, getGoogleLogin }
