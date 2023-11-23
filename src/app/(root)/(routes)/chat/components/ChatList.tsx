import React, { forwardRef, memo } from 'react'
import { TYPOGRAPHY } from '@/styles/sizes'
import type { Message } from '@/types/message'
import { cn } from '@/utils'

type ChatListProps = {
  messages: Message[]
  currentUserNickname?: string
}

type ChatProps = {
  message: Message
  isMyMessage: boolean
}

const ChatList = forwardRef<HTMLDivElement, ChatListProps>(
  ({ messages, currentUserNickname }, ref) => {
    return (
      <ul className="flex flex-col w-full h-full gap-1">
        {messages.map((message: Message) => {
          return (
            <Chat
              key={message.id}
              message={message}
              isMyMessage={message.sender === currentUserNickname}
            />
          )
        })}
        {messages.length === 0 && (
          <h1 className="text-red-500">채팅을 시작해보세요!</h1>
        )}
        <div className="invisible" ref={ref} />
      </ul>
    )
  },
)
ChatList.displayName = 'ChatList'

export default memo(ChatList)

const Chat = ({ message, isMyMessage }: ChatProps) => {
  return isMyMessage ? (
    <MyChat message={message} />
  ) : (
    <OtherChat message={message} />
  )
}

const MyChat = ({ message }: Pick<ChatProps, 'message'>) => {
  return (
    <li className={cn('flex flex-row gap-2 justify-end')}>
      <p className={cn('mt-auto break-keep', TYPOGRAPHY.description)}>
        {message.createdAt.toDate().toLocaleTimeString().slice(0, -3)}
      </p>
      <div
        className={
          'p-2 text-black rounded-lg max-w-[75%] w-fit bg-background-secondary-color'
        }
      >
        {message.text}
      </div>
    </li>
  )
}

const OtherChat = ({ message }: Pick<ChatProps, 'message'>) => {
  return (
    <li className={cn('flex flex-row gap-2 mr-auto justify-start')}>
      <div
        className={'p-2 text-white rounded-lg max-w-[75%] bg-primary-color '}
      >
        {message.text}
      </div>
      <p className={cn('mt-auto break-keep', TYPOGRAPHY.description)}>
        {message.createdAt.toDate().toLocaleTimeString().slice(0, -3)}
      </p>
    </li>
  )
}
