import Image from 'next/image'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
} from '@/components/ui/DropdownMenu'
import Assets from '@/config/assets'
import { TYPHOGRAPHY } from '@/styles/sizes'
import { ItemDetail } from '@/types'
import { cn } from '@/utils'
import Dibs from './Dibs'

type DescriptionSectionProps = {
  itemData: ItemDetail
}

type TradeStateMap = {
  [key: string]: {
    style: 'primary' | 'secondary' | 'gradation' | 'information'
    text: '거래가능' | '예약중' | '거래성사'
  }
}

const DescriptionSection = ({
  itemData: { status, cardTitle, category, createdAt, dibs, content, cardId },
}: DescriptionSectionProps) => {
  const tradeStateMap: TradeStateMap = {
    TRADE_AVAILABLE: {
      style: 'primary',
      text: '거래가능',
    },
    RESERVED: {
      style: 'secondary',
      text: '예약중',
    },
    TRADE_COMPLETE: {
      style: 'gradation',
      text: '거래성사',
    },
  }
  return (
    <article className="flex flex-col w-full pt-4 pb-8  border-b-[1px] gap-4">
      <div className="flex flex-row items-center">
        <Badge variant={tradeStateMap[status].style}>
          {tradeStateMap[status].text}
        </Badge>
        <h3 className={cn('ml-2', TYPHOGRAPHY.title)}>{cardTitle}</h3>
        <MoreButton />
      </div>
      <div className="flex flex-row items-center">
        <p
          className={cn(
            'mr-2 text-text-secondary-color',
            TYPHOGRAPHY.description,
          )}
        >
          <u>{category}</u>
        </p>
        <p className={cn('text-text-secondary-color', TYPHOGRAPHY.description)}>
          {createdAt}
        </p>
        <Dibs itemId={cardId} dibsData={dibs} />
      </div>
      <p className="">{content}</p>
    </article>
  )
}

export default DescriptionSection

const MoreButton = () => {
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
          <DropdownMenuItem>삭제하기</DropdownMenuItem>
          <DropdownMenuItem>거래완료</DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
