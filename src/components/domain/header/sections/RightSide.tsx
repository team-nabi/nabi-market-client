import React from 'react'
import Link from 'next/link'
import Button from '@/components/ui/button'
import ApiEndPoint from '@/config/apiEndPoint'
import AppPath from '@/config/appPath'
import apiClient from '@/services/apiClient'
import { User } from '@/types/user'
import { getServerCookie } from '@/utils/getServerCookie'
import { AvatarWithDropdown, NotificationButton } from '../components'

type RightSideProps = {
  isLoggedIn: boolean
  currentUser: User | null
}

const getUserNotificationCount = async () => {
  try {
    const token = getServerCookie()
    const res = await apiClient.get(
      ApiEndPoint.getNotificationCount(),
      {
        next: { revalidate: 60 },
      },
      {
        Authorization: `${token}`,
      },
    )
    return res.data.unReadCount
  } catch (e) {
    return 0
  }
}

const RightSide = async ({ isLoggedIn, currentUser }: RightSideProps) => {
  const count = await getUserNotificationCount()

  return isLoggedIn ? (
    <>
      <NotificationButton notificationCounts={count} />
      <AvatarWithDropdown imageUrl={currentUser?.imageUrl} />
    </>
  ) : (
    <Button variant={'gradation'}>
      <Link href={AppPath.login()} scroll={false}>
        로그인
      </Link>
    </Button>
  )
}

export default RightSide
