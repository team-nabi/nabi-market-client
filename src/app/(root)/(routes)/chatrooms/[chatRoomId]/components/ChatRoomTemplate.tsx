'use client'

import React, { useEffect, useRef } from 'react'
import { limit, orderBy, query, addDoc } from 'firebase/firestore'
import { CHAT_LIMIT } from '@/config/firebaseConfig'
import useFirestoreQuery from '@/hooks/useFirestoreQuery'
import { useToast } from '@/hooks/useToast'
import { getMessageRef } from '@/lib/firebase'
import type { User } from '@/types/user'
import ChatInput from './ChatInput'
import ChatList from './ChatList'

type ChatRoomTemplateProps = {
  currentUser: User
  fireStoreId: string
}

const ChatRoomTemplate = ({
  currentUser,
  fireStoreId,
}: ChatRoomTemplateProps) => {
  const { toast } = useToast()

  const messageRef = getMessageRef(fireStoreId)
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
    <>
      <section className="flex flex-col items-center w-full h-full px-2 overflow-scroll overflow-x-hidden">
        <ChatList
          messages={messages}
          currentUserId={currentUser?.userId}
          ref={chatBottomRef}
        />
      </section>
      <ChatInput onSubmit={onSubmitMessage} />
    </>
  )
}

export default ChatRoomTemplate
