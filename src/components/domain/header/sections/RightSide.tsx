'use client'

import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Button from '@/components/ui/button'
import AppPath from '@/config/appPath'
import useNotificationCountQuery from '@/hooks/api/queries/useNotificationCountQuery'
import { User } from '@/types/user'
import { AvatarWithDropdown, NotificationButton } from '../components'

type RightSideProps = {
  isLoggedIn: boolean
  currentUser: User | null
}

// const getUserNotificationCount = async () => {
//   try {
//     const token = getServerCookie()
//     const res = await apiClient.get(
//       ApiEndPoint.getNotificationCount(),
//       {
//         cache: 'no-store',
//       },
//       {
//         Authorization: `${token}`,
//       },
//     )
//     return res.data.unReadCount
//   } catch (e) {
//     return 0
//   }
// }

const RightSide = ({ isLoggedIn, currentUser }: RightSideProps) => {
  const { data } = useNotificationCountQuery({ isLoggedIn })
  const router = useRouter()

  return isLoggedIn ? (
    <>
      <NotificationButton notificationCounts={data?.data.unReadCount ?? 0} />
      <AvatarWithDropdown imageUrl={currentUser?.imageUrl} />
    </>
  ) : (
    <Button
      variant={'gradation'}
      onClick={() => {
        router.push(AppPath.login(), { scroll: false })
      }}
    >
      로그인
    </Button>
  )
}

export default RightSide
