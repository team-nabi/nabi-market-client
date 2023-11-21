interface User {
  userId: number
  accountId: string
  nickname: string
  role: 'USER' | 'ADMIN'
  createdDate: string
  modifiedDate: string
  imageUrl?: string
}

export type { User }
