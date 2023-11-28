'use client'

import { useState } from 'react'
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
import { postCompleteRequest } from '@/services/complete-request/completeRequest'

type CompleteRequestButtonProps = {
  myCardId: number
  otherCardId: number
}

const CompleteRequestButton = ({
  myCardId,
  otherCardId,
}: CompleteRequestButtonProps) => {
  const [isCompleteRequested, setIsCompleteRequested] = useState(false)

  const handleRequestButton = async () => {
    try {
      await postCompleteRequest(myCardId, otherCardId)
      setIsCompleteRequested(true)
      toast({
        title: '거래성사를 요청하였습니다',
        variant: 'default',
        duration: 2000,
      })
    } catch (error) {
      toast({
        title: '거래성사 요청이 실패했습니다.',
        variant: 'destructive',
        duration: 2000,
      })
    }
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        {!isCompleteRequested && (
          <Button className="ml-auto" size="icon_sm" variant={null}>
            <Image src={Assets.vMoreIcon} alt="more" />
          </Button>
        )}
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
