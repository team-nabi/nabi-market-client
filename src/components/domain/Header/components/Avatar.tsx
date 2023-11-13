import Cookies from 'js-cookie'
import Image from 'next/image'
import Link from 'next/link'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
} from '@/components/ui/DropdownMenu'
import Button from '@/components/ui/button'
import AppPath from '@/config/appPath'
import Assets from '@/config/assets'
import { Environment } from '@/config/environment'
import apiClient from '@/services/apiClient'

//TODO: 공용 아바타 컴포넌트로 변경

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
  const onClickLogout = () => {
    Cookies.remove(Environment.tokenName())
    apiClient.setDefaultHeader('Authorization', '')
    location.reload()
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={'gradation'}>아바타</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuGroup>
          <DropdownMenuItem onClick={onClickLogout}>로그아웃</DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export { MenuButton, Avatar }
