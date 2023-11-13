'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Button from '@/components/ui/button'
import AppPath from '@/config/appPath'
import Assets from '@/config/assets'
import { useAuth } from '@/contexts/AuthProvider'
import Logo from '../logo'
import { MenuButton, Avatar } from './components/Avatar'

// type HeaderProps = {
//   isLogin?: boolean
// }

const Header = () => {
  const { isLoggedIn } = useAuth()
  return (
    <header className="absolute top-0 left-0 z-10 grid items-center justify-between w-full grid-cols-3 px-2 h-nav shadow-bottom bg-background-color">
      <div className="flex items-center justify-start">
        <MenuButton />
      </div>
      <div className="flex items-center justify-center">
        <Logo />
      </div>
      <div className="flex items-center justify-end gap-2">
        {isLoggedIn ? (
          <>
            <Button className="dark:bg-white" variant={null} size="icon">
              <Image src={Assets.alarmIcon} alt="alarm" />
            </Button>
            {/** TODO: 알림 컴포넌트로 변경 */}
            <Avatar />
            {/** TODO: 아바타 컴포넌트로 변경 */}
          </>
        ) : (
          <Button variant={'gradation'}>
            <Link href={AppPath.login()} scroll={false}>
              로그인
            </Link>
          </Button>
        )}
      </div>
    </header>
  )
}

export default Header
