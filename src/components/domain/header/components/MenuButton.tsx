import Image from 'next/image'
import Link from 'next/link'
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

const MenuButton = () => {
  const router = useRouter()
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="dark:bg-white" size="icon" variant={null}>
          <Image src={Assets.menuIcon} alt="menu" />
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
          <DropdownMenuItem
            onClick={() => {
              router.push(AppPath.newCard())
            }}
          >
            상품 등록
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => {
              router.push(AppPath.chatRoomList())
            }}
          >
            채팅방 조회
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default MenuButton
