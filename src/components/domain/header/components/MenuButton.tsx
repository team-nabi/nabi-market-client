'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
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

const MenuButton = ({ isLoggedIn }: { isLoggedIn: boolean }) => {
  const router = useRouter()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="dark:bg-white" variant={null}>
          <Image className="w-7 h-7" src={Assets.menuIcon} alt="menu" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuGroup>
          <DropdownMenuItem
            onClick={() => {
              router.push(AppPath.cards())
            }}
          >
            전체 물건 보기
          </DropdownMenuItem>
          {isLoggedIn && (
            <>
              <DropdownMenuItem
                onClick={() => {
                  router.push(AppPath.myCards())
                }}
              >
                내 물건 목록
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => {
                  router.push(AppPath.myDibs())
                }}
              >
                내 찜 목록
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => {
                  router.push(AppPath.chatRooms())
                }}
              >
                채팅 목록
              </DropdownMenuItem>
            </>
          )}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default MenuButton
