import ApiEndPoint from '@/config/apiEndPoint'
import apiClient from '../apiClient'

const postImageFile = async (file: File) => {
  const formData = new FormData()
  formData.append('file', file)

  const response = await apiClient.post(
    ApiEndPoint.postImageFile(),
    formData,
    {},
  )

  return response
}

export { postImageFile }
