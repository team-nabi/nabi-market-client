import { initializeApp } from 'firebase/app'
import {
  CollectionReference,
  getFirestore,
  collection,
} from 'firebase/firestore'
import firebaseConfig from '@/config/firebaseConfig'

const fb = initializeApp(firebaseConfig)
const db = getFirestore(fb)

const getMessageRef = (roomId: string): CollectionReference => {
  return collection(db, 'chats', roomId, 'messages')
}

export { db, getMessageRef }
