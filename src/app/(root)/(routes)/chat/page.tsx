'use client'

import React, { useEffect, useRef } from 'react'
import { limit, orderBy, query, addDoc } from 'firebase/firestore'
import PageTitle from '@/components/domain/page-title'
import { CHAT_LIMIT } from '@/config/firebaseConfig'
import { useAuth } from '@/contexts/AuthProvider'
import useFirestoreQuery from '@/hooks/useFirestoreQuery'
import { useToast } from '@/hooks/useToast'
import { getMessageRef } from '@/lib/firebase'
import { postCompleteRequest } from '@/services/card/card'
import ChatInput from './components/ChatInput'
import ChatList from './components/ChatList'
import CompleteReqeustSection from './components/CompleteRequestSection'
import CompleteRequestButton from './components/complete-request-button/CompleteRequestButton'

const ChatPage = () => {
  const { currentUser } = useAuth()
  const { toast } = useToast()

  const messageRef = getMessageRef('room2') // TODO: room id를 받아서 처리
  const messages = useFirestoreQuery(
    query(messageRef, orderBy('createdAt', 'asc'), limit(CHAT_LIMIT)),
  )

  const chatBottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (chatBottomRef.current) {
      chatBottomRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [messageRef])

  const onSubmitMessage = async (message: string) => {
    chatBottomRef.current?.scrollIntoView({ behavior: 'smooth' })

    try {
      await addDoc(messageRef, {
        text: message,
        sender: currentUser?.nickname ?? '익명',
        createdAt: new Date(),
      })
    } catch (e) {
      toast({
        title: '메세지 전송에 실패했습니다.',
        variant: 'destructive',
        duration: 3000,
      })
    }
  }

  const handleRequestButton = async () => {
    try {
      await postCompleteRequest(1, 2) //FIXME - api 나오면 실제 cardId로 변경 예정
    } catch (error) {
      toast({
        title: '거래성사 요청이 실패했습니다.',
        variant: 'destructive',
        duration: 2000,
      })
    }
  }
  //TODO - completeRequestId가 null이 아닌 경우는 CompleteRequestButton이 보이지 X
  //TODO - completeRequestId가 null인 경우 CompleteRequestSection이 보이지 X

  return (
    <main className="relative flex flex-col items-center w-full gap-4 h-page pb-chat_input">
      <header className="w-full flex flex-row items-center px-4">
        <PageTitle title="채팅방" />
        <CompleteRequestButton onClickButton={handleRequestButton} />
      </header>
      <CompleteReqeustSection completeRequestId={1} />
      <section className="flex flex-col items-center px-2 overflow-scroll overflow-x-hidden">
        <ChatList
          messages={messages}
          currentUserNickname={currentUser?.nickname}
          ref={chatBottomRef}
        />
      </section>
      <ChatInput onSubmit={onSubmitMessage} />
      <div className="w-full h-0 border border-t-background-secondary-color" />
    </main>
  )
}

export default ChatPage
