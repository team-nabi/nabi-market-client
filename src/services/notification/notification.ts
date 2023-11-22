import ApiEndPoint from '@/config/apiEndPoint'
import { Notification } from '@/types/notification'
import { TradeHistory } from '@/types/tradeHistory'
import apiClient from '../apiClient'

export type GetNotificationListReq = {
  isRead: boolean
  cursorId: string | undefined
}
export type GetNotificationListRes = {
  code: string
  message: string
  data: {
    notificationList: Notification[]
    nextCursorId: string
  }
}

const getNotificationList = async ({
  isRead,
  cursorId,
}: GetNotificationListReq) => {
  const response: GetNotificationListRes = await apiClient.get(
    ApiEndPoint.getNotificationList({ isRead, cursorId }),
  )
  return response
}

export { getNotificationList }
