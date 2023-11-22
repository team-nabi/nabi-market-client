'use client'

import React from 'react'
import { collection, limit, orderBy, query, addDoc } from 'firebase/firestore'
import useFirestoreQuery, { Message } from '@/hooks/useFirestoreQuery'
import { db, getMessageRef } from '@/lib/firebase'

const ChatPage = () => {
  const messageRef = getMessageRef('room2')
  const messages = useFirestoreQuery(
    query(messageRef, orderBy('createdAt', 'asc'), limit(200)),
  )

  const [newMessage, setNewMessage] = React.useState<string>('')

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setNewMessage(e.target.value)
  }

  return (
    <div className="flex flex-col items-center w-full gap-10">
      <h1 className="text-4xl">chat</h1>
      <h1>new message</h1>
      <form
        onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault()
          console.log(newMessage)
          addDoc(collection(db, 'chats', 'room2', 'messages'), {
            text: newMessage,
            sender: 'me',
            createdAt: new Date().toISOString(),
          }).then(() => {
            setNewMessage('')
          })
        }}
      >
        <input
          onChange={onChange}
          value={newMessage}
          type="text"
          placeholder="메세지를 입력하세요."
        />
        <button type="submit">send</button>
      </form>
      <div className="flex flex-col items-center w-full">
        {messages.map((item: Message, idx: number) => {
          console.log(item)
          return (
            <div key={idx} className="flex flex-row gap-2">
              <h2>{`${item.sender}:`} </h2>
              <h2>{item.text}</h2>
            </div>
          )
        })}
        {messages.length === 0 && <h1 className="text-red-500">no data</h1>}
      </div>
    </div>
  )
}

export default ChatPage
