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
import useCardStatusUpdateMutation from '@/hooks/api/mutations/useCardStatusUpdateMutation'
import { toast } from '@/hooks/useToast'
import { handleApiError } from '@/lib/handleApiError'
import { deleteCard } from '@/services/card/card'
import { TradeStatusObjs } from '@/types/card'

type MoreButtonProps = {
  cardId: number
  status: TradeStatusObjs['key']
}

type CardStatusMap = {
  [key: TradeStatusObjs['key']]: {
    text: '예약중으로 돌리기' | '거래가능으로 돌리기'
    statusToChange: TradeStatusObjs['key']
  }
}

const MoreButton = ({ cardId, status }: MoreButtonProps) => {
  const cardStatusMap: CardStatusMap = {
    TRADE_AVAILABLE: {
      text: '예약중으로 돌리기',
      statusToChange: 'RESERVED',
    },
    RESERVED: {
      text: '거래가능으로 돌리기',
      statusToChange: 'TRADE_AVAILABLE',
    },
  }

  const router = useRouter()
  const { mutate } = useCardStatusUpdateMutation(cardId, status)

  const onClickDelete = async () => {
    try {
      await deleteCard(cardId)
      router.push(AppPath.home())
      toast({
        title: '삭제를 완료하였습니다',
        duration: 2000,
      })
    } catch (error) {
      const { shouldRedirect } = handleApiError(error)
      if (shouldRedirect) {
        router.push(shouldRedirect)
      } else {
        toast({
          title: '삭제를 실패했습니다',
          duration: 2000,
        })
      }
    }
  }

  const handleChangeStatus = async (status: TradeStatusObjs['key']) => {
    mutate({ cardId, status })
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="ml-auto" size="icon_sm" variant={null}>
          <Image src={Assets.vMoreIcon} alt="more" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="min-w-[10rem] -right-4">
        <DropdownMenuGroup>
          <DropdownMenuItem
            onClick={() => router.push(AppPath.modifyCard(String(cardId)))}
          >
            수정하기
          </DropdownMenuItem>
          <DropdownMenuItem onClick={onClickDelete}>삭제하기</DropdownMenuItem>
          <DropdownMenuItem
            onClick={() =>
              handleChangeStatus(cardStatusMap[status].statusToChange)
            }
          >
            {cardStatusMap[status].text}
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default MoreButton
