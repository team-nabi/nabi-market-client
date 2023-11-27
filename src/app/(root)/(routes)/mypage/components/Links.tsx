import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import AppPath from '@/config/appPath'
import Assets from '@/config/assets'

const pages = [
  {
    id: 1,
    text: '내 물건 페이지',
    path: AppPath.myCards(),
    icon: Assets.shoppingIcon,
  },
  { id: 2, text: '찜 목록', path: AppPath.myDibs(), icon: Assets.heartIcon },
  {
    id: 3,
    text: '거래 내역',
    path: AppPath.myHistory(),
    icon: Assets.refreshIcon,
  },
  {
    id: 4,
    text: '채팅방 목록',
    path: AppPath.chatRooms(),
    icon: Assets.chatIcon,
  },
  {
    id: 5,
    text: '알림',
    path: AppPath.myNotifications(),
    icon: Assets.alarmIcon,
  },
]

const Links = () => {
  return (
    <div className="flex flex-col w-full px-4">
      {pages.map((page) => (
        <>
          <PageLink
            key={page.id}
            text={page.text}
            path={page.path}
            icon={page.icon}
          />
          <div className="h-0 border border-b-0 opacity-30 border-background-secondary-color" />
        </>
      ))}
    </div>
  )
}

export default Links

const PageLink = ({
  text,
  path,
  icon,
}: {
  text: string
  path: string
  icon: string
}) => (
  <Link
    href={path}
    className="relative flex flex-row w-5/6 gap-4 py-6 mx-auto align-middle justify-left"
  >
    <Image src={icon} alt="page-icon" className="" />
    <span className={'text-xl font-bold'}>{text}</span>
    <Image
      src={Assets.arrowRightIcon}
      alt="arrow"
      className="absolute right-1"
    />
  </Link>
)
