import ApiEndPoint from '@/config/apiEndPoint'
import apiClient from '../apiClient'

type ReissueAccessTokenRes = {
  data: {
    accessToken: string
  }
}

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

const reissueAccessToken = async ({
  refreshToken,
}: {
  refreshToken: string
}) => {
  const response: ReissueAccessTokenRes = await apiClient.get(
    ApiEndPoint.reissueAccessToken(),
    {},
    {
      Authorization: refreshToken,
    },
  )
  return response
}

export {
  getValidateUser,
  getKakaoRedirect,
  getGoogleRedirect,
  reissueAccessToken,
}
