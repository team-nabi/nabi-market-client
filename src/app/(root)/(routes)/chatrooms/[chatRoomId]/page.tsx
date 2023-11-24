import React from 'react'
import PageTitle from '@/components/domain/page-title'
import ApiEndPoint from '@/config/apiEndPoint'
import apiClient from '@/services/apiClient'
import { getServerCookie } from '@/utils/getServerCookie'
import ChatRoomTemplate from './components/ChatRoomTemplate'

type ChatPageProps = {
  params: {
    chatRoomId: string
  }
}

const getInitialUser = async () => {
  const token = getServerCookie()
  const res = await apiClient.get(
    ApiEndPoint.getValidateUser(),
    {},
    {
      Authorization: `${token}`,
    },
  )
  return res.data.userInfo
}

const getInitialChatRoom = async (chatRoomId: string) => {
  const token = getServerCookie()
  const res = await apiClient.get(
    ApiEndPoint.getChatRoom(chatRoomId),
    {},
    {
      Authorization: `${token}`,
    },
  )
  return res.data.chatRoomInfo.fireStoreChatRoomId
}

const ChatPage = async ({ params }: ChatPageProps) => {
  const initialUserInfo = await getInitialUser()
  const initialChatRoom = await getInitialChatRoom(params.chatRoomId)

  return (
    <main className="relative flex flex-col items-center w-full gap-10 h-page pb-chat_input">
      <PageTitle title="채팅방" />
      <ChatRoomTemplate
        currentUser={initialUserInfo}
        fireStoreId={initialChatRoom}
      />
      <div className="w-full h-0 border border-t-background-secondary-color" />
    </main>
  )
}

export default ChatPage
