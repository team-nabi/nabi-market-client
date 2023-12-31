import React from 'react'
import PageTitle from '@/components/domain/page-title'
import ApiEndPoint from '@/config/apiEndPoint'
import errorCodes from '@/config/errorCodes'
import ErrorMessages from '@/config/errorMessages'
import { ForbiddenError } from '@/lib/errors'
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
  try {
    const token = getServerCookie()
    const res = await apiClient.get(
      ApiEndPoint.getChatRoom(chatRoomId),
      {},
      {
        Authorization: `${token}`,
      },
    )
    return res.data.chatRoomInfo
  } catch (e: any) {
    const log = await e.response.json()
    if (log.code === errorCodes.forbidden.code) {
      throw new ForbiddenError(new Response(ErrorMessages.Forbidden))
    }

    throw new Error(e)
  }
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

  //NOTE - 둘 중 아무라도 거래성사 요청을 했을 경우
  const isCompleteRequested = initialChatRoom.completeRequestId !== -1
  const completeRequestInfo = isCompleteRequested
    ? await getCompleteRequestInfo(initialChatRoom.completeRequestId)
    : null

  const suggestionDataArray = [
    initialChatRoom.fromCardInfo,
    initialChatRoom.toCardInfo,
  ]
  const myCardId = suggestionDataArray.find(
    (obj) => obj.userInfo.userId === initialUserInfo.userId,
  ).cardInfo.cardId

  const otherCardId = suggestionDataArray.find(
    (obj) => obj.userInfo.userId !== initialUserInfo.userId,
  ).cardInfo.cardId

  return (
    <main className="relative flex flex-col items-center w-full h-page pb-chat_input">
      <header className="flex flex-row items-center w-full px-4">
        <PageTitle title="채팅방" />
        {!isCompleteRequested && (
          <CompleteRequestButton
            myCardId={myCardId}
            otherCardId={otherCardId}
          />
        )}
      </header>
      {isCompleteRequested && (
        <CompleteReqeustTemplate
          currentUser={initialUserInfo}
          completeRequestData={completeRequestInfo}
        />
      )}
      <div className="w-full h-0 my-5 border border-b-0 opacity-50 border-background-secondary-color" />
      <ChatRoomTemplate
        currentUser={initialUserInfo}
        fireStoreId={initialChatRoom.fireStoreChatRoomId}
      />
      <div className="w-full h-0 border border-t-background-secondary-color" />
    </main>
  )
}

export default ChatPage
