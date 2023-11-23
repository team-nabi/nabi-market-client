import ApiEndPoint from '@/config/apiEndPoint'
import { Card } from '@/types/card'
import { User } from '@/types/user'
import apiClient from '../apiClient'

export type GetChatRoomListData = {
  chatRoomId: number
  createdAt: string
  fromCardInfo: {
    cardInfo: Pick<Card, 'cardId' | 'thumbnail' | 'itemName' | 'priceRange'>
    userInfo: Pick<User, 'userId'>
  }
  toCardInfo: {
    cardInfo: Pick<Card, 'cardId' | 'thumbnail' | 'itemName' | 'priceRange'>
    userInfo: Pick<User, 'userId'>
  }
}

export type GetChatRoomListReq = {
  cursorId: string | undefined
}
export type GetChatRoomListRes = {
  code: string
  message: string
  data: {
    chatRoomList: GetChatRoomListData[]
    nextCursorId: string
  }
}

const getChatRoomList = async ({ cursorId }: GetChatRoomListReq) => {
  const response: GetChatRoomListRes = await apiClient.get(
    ApiEndPoint.getChatRoomList({ cursorId }),
  )
  return response
}

export { getChatRoomList }
