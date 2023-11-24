import React from 'react'
import PageTitle from '@/components/domain/page-title'
import ApiEndPoint from '@/config/apiEndPoint'
import apiClient from '@/services/apiClient'
import { getServerCookie } from '@/utils/getServerCookie'
import ChatRoomTemplate from './components/ChatRoomTemplate'
import CompleteRequestButton from './components/CompleteRequestButton'
import CompleteReqeustTemplate from './components/CompleteRequestTemplate'

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
  return res.data.chatRoomInfo //NOTE - .fireStoreChatRoomId지움. chatRoomInfo필요
}

const getCompleteRequestInfo = async (completeRequestId: number) => {
  const token = getServerCookie()
  const res = await apiClient.get(
    ApiEndPoint.getCompleteRequest(completeRequestId),
    {},
    {
      Authorization: `${token}`,
    },
  )
  return res.data.completeRequestInfo
}

const ChatPage = async ({ params }: ChatPageProps) => {
  const initialUserInfo = await getInitialUser()
  const initialChatRoom = await getInitialChatRoom(params.chatRoomId)

  //NOTE - completeRequestId가 -1이 아닐때만 호출해야하는데 어떻게? -1로 호출하면 서버 500에러남.
  const completeRequestInfo = await getCompleteRequestInfo(
    initialChatRoom.completeRequestId,
  )

  //NOTE - 둘 중 아무라도 거래성사 요청을 했을 경우
  const isCompleteRequested = initialChatRoom.completeRequestId !== -1

  return (
    <main className="relative flex flex-col items-center w-full gap-10 h-page pb-chat_input">
      <header className="w-full flex flex-row items-center px-4">
        <PageTitle title="채팅방" />
        {!isCompleteRequested && (
          <CompleteRequestButton
            currentUser={initialUserInfo}
            fromCardData={initialChatRoom.fromCadInfo}
            toCardData={initialChatRoom.toCardInfo}
          />
        )}
      </header>
      {isCompleteRequested && (
        <CompleteReqeustTemplate
          currentUser={initialUserInfo}
          completeRequestData={completeRequestInfo}
        />
      )}
      <ChatRoomTemplate
        currentUser={initialUserInfo}
        fireStoreId={initialChatRoom.fireStoreChatRoomId}
      />
      <div className="w-full h-0 border border-t-background-secondary-color" />
    </main>
  )
}

export default ChatPage
