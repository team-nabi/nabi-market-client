import { Timestamp } from 'firebase/firestore'

interface Message {
  text: string
  createdAt: Timestamp
  sender: string
  id: string
}

export type { Message }
