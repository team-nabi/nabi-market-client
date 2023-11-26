'use client'

import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import Button from '@/components/ui/button'
import AppPath from '@/config/appPath'
import Assets from '@/config/assets'
import { cn } from '@/utils'

const MAX_NOTIFICATION_COUNT = 99

const NotificationButton = ({
  notificationCounts = 0,
}: {
  notificationCounts?: number
}) => {
  const router = useRouter()

  const onClickButton = () => {
    router.push(AppPath.notifications())
  }

  return (
    <Button
      onClick={onClickButton}
      className="relative dark:bg-white"
      variant={null}
      size="icon"
    >
      <span
        className={cn(
          'absolute flex items-center justify-center w-5 h-5 text-xs text-white bg-red-500 rounded-full -top-1 -right-1 transition-all duration-200',
          { invisible: notificationCounts === 0 },
        )}
      >
        {notificationCounts > MAX_NOTIFICATION_COUNT
          ? '99+'
          : notificationCounts}
      </span>

      <Image src={Assets.alarmIcon} alt="alarm" />
    </Button>
  )
}

export default NotificationButton
