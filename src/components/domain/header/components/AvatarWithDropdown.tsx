'use client'

import Cookies from 'js-cookie'
import { useRouter } from 'next/navigation'
import { Avatar, AvatarImage } from '@/components/ui/avatar'
import Button from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu'
import AppPath from '@/config/appPath'
import { Environment } from '@/config/environment'
import { DEFAULT_PROFILE_IMG } from '@/constants/image'
import apiClient from '@/services/apiClient'

const AvatarWithDropdown = ({ imageUrl }: { imageUrl?: string }) => {
  const router = useRouter()

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
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="absolute -right-5">
        <DropdownMenuGroup>
          <DropdownMenuItem
            onClick={() => {
              router.push(AppPath.mypage())
            }}
          >
            마이페이지
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => {
              router.push(AppPath.newCard())
            }}
          >
            새 물건 등록하기
          </DropdownMenuItem>
          <DropdownMenuItem onClick={onClickLogout}>로그아웃</DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default AvatarWithDropdown
