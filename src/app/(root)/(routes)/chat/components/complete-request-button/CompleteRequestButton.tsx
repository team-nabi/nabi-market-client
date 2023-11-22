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

interface CompleteRequestButtonProps {
  onClickButton: () => Promise<void>
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
          <DropdownMenuItem onClick={onClickButton}>
            거래성사 요청
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
export default CompleteRequestButton
