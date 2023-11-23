'use client'

import React, { useEffect, useRef } from 'react'
import { limit, orderBy, query, addDoc } from 'firebase/firestore'
import PageTitle from '@/components/domain/page-title'
import { CHAT_LIMIT } from '@/config/firebaseConfig'
import { useAuth } from '@/contexts/AuthProvider'
import useFirestoreQuery from '@/hooks/useFirestoreQuery'
import { useToast } from '@/hooks/useToast'
import { getMessageRef } from '@/lib/firebase'
import ChatInput from './components/ChatInput'
import ChatList from './components/ChatList'

const ChatPage = () => {
  const { currentUser } = useAuth()
  const { toast } = useToast()

  const messageRef = getMessageRef('FROM00000037TO00000039') // TODO: room id를 받아서 처리
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
        sender: currentUser?.userId.toString(),
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

  return (
    <main className="relative flex flex-col items-center w-full gap-10 h-page pb-chat_input">
      <PageTitle title="채팅방" />
      <section className="flex flex-col items-center w-full h-full px-2 overflow-scroll overflow-x-hidden">
        <ChatList
          messages={messages}
          currentUserId={currentUser?.userId}
          ref={chatBottomRef}
        />
      </section>
      <ChatInput onSubmit={onSubmitMessage} />
      <div className="w-full h-0 border border-t-background-secondary-color" />
    </main>
  )
}

export default ChatPage
