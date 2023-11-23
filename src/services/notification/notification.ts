import ApiEndPoint from '@/config/apiEndPoint'
import { Notification } from '@/types/notification'
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

export type PutNotificationListReq = {
  notificationIds: number[] | undefined
}
export type PutNotificationListRes = {
  code: string
  message: string
}

const putNotificationList = async ({
  notificationIds,
}: PutNotificationListReq) => {
  const response: GetNotificationListRes = await apiClient.put(
    ApiEndPoint.putNotificationList(),
    {
      notificationIds,
    },
    {},
    {
      'Content-Type': 'application/json',
    },
  )

  return response
}

export { getNotificationList, putNotificationList }
