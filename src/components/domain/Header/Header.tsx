import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Button from '@/components/ui/Button'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
} from '@/components/ui/DropdownMenu'
import AppPath from '@/config/appPath'
import Assets from '@/config/assets'
import Logo from '../Logo'

type HeaderProps = {
  isLogin?: boolean
}

const Header = ({ isLogin = false }: HeaderProps) => {
  return (
    <header className="grid items-center justify-between w-full grid-cols-3 px-2 h-14 shadow-bottom bg-background-color">
      <div className="flex items-center justify-start">
        <MenuButton />
      </div>
      <div className="flex items-center justify-center">
        <Logo />
      </div>
      <div className="flex items-center justify-end gap-2">
        {isLogin ? (
          <>
            <Button className="dark:bg-white" variant={null} size="icon">
              <Image src={Assets.alarmIcon} alt="alarm" />
            </Button>
            {/** TODO: 알림 컴포넌트로 변경 */}
            <Avatar />
            {/** TODO: 아바타 컴포넌트로 변경 */}
          </>
        ) : (
          <>
            <Button variant={'gradation'}>
              <Link href={AppPath.login()}>로그인</Link>
            </Button>
          </>
        )}
      </div>
    </header>
  )
}

export default Header

const MenuButton = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="dark:bg-white" size="icon" variant={null}>
          <Image src={Assets.menuIcon} alt="menu" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Link href={AppPath.home()}>홈으로</Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

const Avatar = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={'gradation'}>아바타</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Link href={AppPath.logout()}>로그아웃</Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
