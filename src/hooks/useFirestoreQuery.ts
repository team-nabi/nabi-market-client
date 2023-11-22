'use client'

import { useEffect, useRef, useState } from 'react'
import { Query, onSnapshot, queryEqual } from 'firebase/firestore'
import { Message } from '@/types/message'

const isMessageType = (arg: any): arg is Message => {
  return (
    arg.text !== undefined &&
    arg.createdAt !== undefined &&
    arg.sender !== undefined
  )
}

const useFirestoreQuery = (query: Query) => {
  const [docs, setDocs] = useState<Message[]>([])

  const queryRef = useRef(query)

  useEffect(() => {
    if (!queryEqual(queryRef?.current, query)) {
      queryRef.current = query
    }
  })

  useEffect(() => {
    if (!queryRef.current) {
      return
    }

    const unsubscribe = onSnapshot(queryRef.current, (snapshot) => {
      const messages = snapshot.docs
        .map((doc) => ({ ...doc.data(), id: doc.id }))
        .filter(isMessageType)

      setDocs(() => messages)
    })

    return unsubscribe
  }, [queryRef])

  return docs
}

export default useFirestoreQuery
