import React from 'react'
import PageTitle from '@/components/domain/page-title'
import ApiEndPoint from '@/config/apiEndPoint'
import apiClient from '@/services/apiClient'
import { getServerCookie } from '@/utils/getServerCookie'
import ChatRoomTemplate from './components/ChatRoomTemplate'
import CompleteRequestButton from './components/CompleteRequestButton'
import CompleteReqeustSection from './components/CompleteRequestTemplate'

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
  console.log(chatRoomId)
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

  //TODO - completeRequestId가 -1이 아닌 경우는 CompleteRequestButton이 보이지 X
  //TODO - completeRequestId가 -1인 경우 CompleteRequestSection이 보이지 X
  return (
    <main className="relative flex flex-col items-center w-full gap-10 h-page pb-chat_input">
      <header className="w-full flex flex-row items-center px-4">
        <PageTitle title="채팅방" />
        <CompleteRequestButton />
      </header>
      <CompleteReqeustSection completeRequestId={3} />
      <ChatRoomTemplate
        currentUser={initialUserInfo}
        fireStoreId={initialChatRoom}
      />
      <div className="w-full h-0 border border-t-background-secondary-color" />
    </main>
  )
}

export default ChatPage
