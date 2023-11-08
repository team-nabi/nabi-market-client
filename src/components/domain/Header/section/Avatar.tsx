import Cookies from 'js-cookie'
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
import { Environment } from '@/config/environment'

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
