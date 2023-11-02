import Cookies from 'js-cookie'
import ApiEndPoint from '@/config/apiEndPoint'
import { Environment } from '@/config/environment'
import apiClient from '../apiClient'

const getKakaoLogin = async () => {
  const response = await apiClient.get(ApiEndPoint.kakaoLogin())

  return response
}

const getGoogleLogin = async () => {
  const response = await apiClient.get(ApiEndPoint.googleLogin())

  return response
}

const getValidateUser = async () => {
  const token = Cookies.get(Environment.tokenName())
  const response = await apiClient.get(
    ApiEndPoint.getValidateUser(),
    {},
    {
      Authorization: `Bearer ${token}`,
    },
  )
  return response
}

export { getKakaoLogin, getGoogleLogin, getValidateUser }
