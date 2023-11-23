'use client'

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
import { Card } from '@/types/card'
import { User } from '@/types/user'

type CompleteRequestButtonProps = {
  currentUser: User
  fromCardData: {
    cardInfo: Pick<Card, 'cardId' | 'thumbnail' | 'itemName'>
    userInfo: Pick<User, 'userId'>
  }
  toCardData: {
    cardInfo: Pick<Card, 'cardId' | 'thumbnail' | 'itemName'>
    userInfo: Pick<User, 'userId'>
  }
}

const CompleteRequestButton = ({
  currentUser,
  fromCardData,
  toCardData,
}: CompleteRequestButtonProps) => {
  const handleRequestButton = async () => {
    //NOTE - 현재 로그인한 사람의 아이디로 내 카드 id찾기 -> 삼항연산자 vs find함수 중 어떤 것이 더 나은 방법인지 모르겠음
    const suggestionDataArray = [fromCardData, toCardData]
    const myCardId = suggestionDataArray.find(
      (obj) => obj.userInfo.userId === currentUser.userId,
    )?.cardInfo.cardId as number
    const otherCardId = suggestionDataArray.find(
      (obj) => obj.userInfo.userId !== currentUser.userId,
    )?.cardInfo.cardId as number

    try {
      await postCompleteRequest(myCardId, otherCardId)
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
