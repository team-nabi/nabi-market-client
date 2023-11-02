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
import Dibs from './Dibs'

type DescriptionSectionProps = {
  itemData: ItemDetail
}

type TradeStateMap = {
  [key: string]: {
    style:
      | 'primary'
      | 'secondary'
      | 'gradation'
      | 'information'
      | null
      | undefined
    text: string
  }
}

const DescriptionSection = ({
  itemData: { status, cardTitle, category, createdAt, dibsCount, content },
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
        <h3 className={`${TYPHOGRAPHY.title} ml-2`}>{cardTitle}</h3>
        <MoreButton />
      </div>
      <div className="flex flex-row items-center">
        <p
          className={`${TYPHOGRAPHY.description} mr-2 text-text-secondary-color`}
        >
          <u>{category}</u>
        </p>
        <p className={`${TYPHOGRAPHY.description} text-text-secondary-color`}>
          {createdAt}
        </p>
        <Dibs count={dibsCount} />
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
