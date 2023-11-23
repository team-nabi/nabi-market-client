import Image from 'next/image'
import Button from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import Assets from '@/config/assets'
import { toast } from '@/hooks/useToast'
import { postCompleteRequest } from '@/services/card/card'

interface CompleteRequestButtonProps {
  onClickButton?: () => Promise<void>
}
const handleRequestButton = async () => {
  try {
    await postCompleteRequest(45, 46) //FIXME - api 나오면 실제 cardId로 변경 예정
  } catch (error) {
    toast({
      title: '거래성사 요청이 실패했습니다.',
      variant: 'destructive',
      duration: 2000,
    })
  }
}

const CompleteRequestButton = ({
  onClickButton,
}: CompleteRequestButtonProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="ml-auto" size="icon_sm" variant={null}>
          <Image src={Assets.vMoreIcon} alt="more" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="min-w-[8rem]">
        <DropdownMenuGroup>
          <DropdownMenuItem onClick={handleRequestButton}>
            거래성사 요청
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
export default CompleteRequestButton
