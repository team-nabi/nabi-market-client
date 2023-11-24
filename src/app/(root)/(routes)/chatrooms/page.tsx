import React from 'react'
import Link from 'next/link'

const page = () => {
  const a = '5'
  return (
    <div>
      <Link as={`/chatroomsa`} href={`/chatrooms?id=${a}`}>
        ccc
      </Link>
    </div>
  )
}

export default page
