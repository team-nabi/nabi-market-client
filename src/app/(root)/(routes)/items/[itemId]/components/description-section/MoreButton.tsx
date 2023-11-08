import Image from 'next/image'
import { useRouter } from 'next/navigation'
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
import { toast } from '@/hooks/useToast'
import { handleApiError } from '@/lib/handleApiError'
import { deleteItem } from '@/services/item/item'

type MoreButtonProps = {
  itemId: number
}
const MoreButton = ({ itemId }: MoreButtonProps) => {
  const router = useRouter()

  const onClickDelete = async () => {
    try {
      await deleteItem(itemId)
      router.push(AppPath.home())
      toast({
        title: '삭제를 완료하였습니다',
        duration: 1000,
      })
    } catch (error) {
      const { shouldRedirect, message } = handleApiError(error)
      if (shouldRedirect) {
        router.push(shouldRedirect)
      } else {
        console.log(shouldRedirect, error)
        toast({
          title: '삭제를 실패했습니다',
          description: message,
          duration: 1000,
        })
      }
    }
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="ml-auto" size="icon_sm" variant={null}>
          <Image src={Assets.vMoreIcon} alt="more" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuGroup>
          <DropdownMenuItem>수정하기</DropdownMenuItem>
          <DropdownMenuItem onClick={onClickDelete}>삭제하기</DropdownMenuItem>
          <DropdownMenuItem>거래완료</DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default MoreButton
