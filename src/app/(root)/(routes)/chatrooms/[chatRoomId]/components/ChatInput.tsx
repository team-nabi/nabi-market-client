import React, { useState } from 'react'
import Image from 'next/image'
import Button from '@/components/ui/button'
import Input from '@/components/ui/input'
import Assets from '@/config/assets'

const ChatInput = ({
  onSubmit,
}: {
  onSubmit: (_newMessage: string) => void
}) => {
  const [newMessage, setNewMessage] = useState<string>('')

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setNewMessage(e.target.value)
  }

  const onSubmitMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!newMessage.trim()) return

    onSubmit(newMessage)
    setNewMessage('')
  }

  return (
    <form
      onSubmit={onSubmitMessage}
      className="absolute bottom-0 grid items-center w-full grid-cols-7 p-4 align-middle h-chat_input"
    >
      <Input
        onChange={onChange}
        value={newMessage}
        type="text"
        placeholder="메세지를 입력하세요."
        className="col-span-6"
      />
      <div className="flex justify-center col-span-1">
        <Button
          type="submit"
          variant={null}
          className="transition-opacity hover:opacity-70"
        >
          <Image src={Assets.sendIcon} alt="발송" />
        </Button>
      </div>
    </form>
  )
}

export default ChatInput
