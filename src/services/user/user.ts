import ApiEndPoint from '@/config/apiEndPoint'
import apiClient from '../apiClient'

type putUserProfileReq = {
  file: File
}

const putUserProfile = async ({ file }: putUserProfileReq) => {
  const formData = new FormData()
  formData.append('profile', file)
  const response = await apiClient.put(
    ApiEndPoint.putUserProfile(),
    formData,
    {},
    {
      'Content-Type': 'multipart/form-data',
    },
  )
  console.log(response)
  return response
}

export { putUserProfile }
