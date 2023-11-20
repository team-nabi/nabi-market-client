import ApiEndPoint from '@/config/apiEndPoint'
import apiClient from '../apiClient'

const putUserProfile = async (imageUrl: string) => {
  const response = await apiClient.put(ApiEndPoint.putUserProfile(), {
    imageUrl,
  })

  return response
}

const putUserNickname = async (nickname: string) => {
  const response = await apiClient.put(ApiEndPoint.putUserNickname(), {
    nickname,
  })

  return response
}

export { putUserProfile, putUserNickname }
