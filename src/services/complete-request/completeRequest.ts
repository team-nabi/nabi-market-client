import ApiEndPoint from '@/config/apiEndPoint'
import apiClient from '../apiClient'

const postCompleteRequest = async (fromCardId: number, toCardId: number) => {
  const response = await apiClient.post(
    ApiEndPoint.postCompleteRequest(),
    { fromCardId, toCardId },
    {},
    {
      'Content-Type': 'application/json',
    },
  )
  return response
}

const putCompleteRequest = async (
  fromCardId: number,
  toCardId: number,
  isAccepted: boolean,
) => {
  const response = await apiClient.post(
    ApiEndPoint.putCompleteRequest(),
    { fromCardId, toCardId, isAccepted },
    {},
    {
      'Content-Type': 'application/json',
    },
  )
  return response
}

export { postCompleteRequest, putCompleteRequest }
