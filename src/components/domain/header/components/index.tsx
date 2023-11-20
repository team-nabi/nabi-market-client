import Cookies from 'js-cookie'
import Image from 'next/image'
import Link from 'next/link'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import Button from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu'
import AppPath from '@/config/appPath'
import Assets from '@/config/assets'
import { Environment } from '@/config/environment'
import { DEFAULT_PROFILE_IMG } from '@/constants/image'
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

const AvatarWithDropdown = ({ imageUrl }: { imageUrl?: string }) => {
  const onClickLogout = () => {
    Cookies.remove(Environment.tokenName())
    apiClient.setDefaultHeader('Authorization', '')
    location.reload()
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={null}>
          <Avatar size="md">
            <AvatarImage imgUrl={imageUrl ?? DEFAULT_PROFILE_IMG} />
            <AvatarFallback>profile</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuGroup>
          <DropdownMenuItem onClick={onClickLogout}>로그아웃</DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export { MenuButton, AvatarWithDropdown }
