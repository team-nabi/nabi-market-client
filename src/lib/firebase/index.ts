import { initializeApp } from 'firebase/app'
import {
  CollectionReference,
  getFirestore,
  collection,
} from 'firebase/firestore'

export const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
}

const fb = initializeApp(firebaseConfig)
const db = getFirestore(fb)

const getMessageRef = (roomId: string): CollectionReference => {
  return collection(db, 'chats', roomId, 'messages')
}

// async function getData(db: Firestore) {
//   const dataCol = collection(db, 'chats', 'room2', 'messages')
//   const dataSnap = await getDocs(dataCol)
//   const dataList = dataSnap.docs.map((doc) => doc.data())
//   return dataList
// }

export { db, getMessageRef }
