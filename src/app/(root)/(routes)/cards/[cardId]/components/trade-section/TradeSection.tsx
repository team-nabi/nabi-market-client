'use client'

import { useState } from 'react'
import { StaticImageData } from 'next/image'
import Button from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import Assets from '@/config/assets'
import { PRICE_RANGE_OBJS, TRADE_TYPE_OBJS } from '@/constants/card'
import { useAuth } from '@/contexts/AuthProvider'
import useSuggestionsQuery from '@/hooks/api/queries/useSuggestionsQuery'
import { TradeStatus } from '@/types/card'
import { getValueByKey } from '@/utils/getValueByKey'
import SuggestList from './SuggestList'
import TradeInfo from './TradeInfo'

type TradeSectionProps = {
  priceRange: string
  tradeType: string
  tradeArea: string
  authorId: number
  cardId: number
  pokeAvailable: boolean
  status: TradeStatus
}

type TradeInfo = {
  title: string
  content: string
  variant: 'primary' | 'information'
  icon: StaticImageData
}

const TradeSection = ({
  priceRange,
  tradeType,
  tradeArea,
  authorId,
  cardId,
  pokeAvailable,
  status,
}: TradeSectionProps) => {
  const { isLoggedIn } = useAuth()
  const { currentUser } = useAuth()

  const isMyItem = currentUser?.userId === authorId
  const suggestAvailable = status === 'TRADE_AVAILABLE'
  const [open, setOpen] = useState(false)

  const tradeInfo: TradeInfo[] = [
    {
      title: '가격대',
      content: getValueByKey(PRICE_RANGE_OBJS, priceRange),
      variant: 'primary',
      icon: Assets.moneyIcon,
    },
    {
      title: '거래 방식',
      content: getValueByKey(TRADE_TYPE_OBJS, tradeType),
      variant: 'information',
      icon: Assets.usersIcon,
    },
    {
      title: '거래 지역',
      content: tradeArea,
      variant: 'information',
      icon: Assets.markerIcon,
    },
  ]

  const onClickButton = async () => {
    if (isMyItem) {
      alert('제안확인 페이지로 이동하기')
    } else {
      setOpen(true)
    }
  }

  const { data: suggestions } = useSuggestionsQuery(cardId)
  return (
    <section className="flex flex-col gap-2 w-full pt-4">
      {tradeInfo.map((v, i) => (
        <TradeInfo
          key={i}
          title={v.title}
          content={v.content}
          variant={v.variant}
          icon={v.icon}
        />
      ))}
      {isLoggedIn && (suggestAvailable || isMyItem) && (
        <Button className="mt-6" variant={'primary'} onClick={onClickButton}>
          {isMyItem ? '제안 확인하기' : '거래 제안하기'}
        </Button>
      )}

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="p-4 pt-14 gap-6 max-h-[576px]">
          <DialogHeader>
            <DialogTitle>제안 가능한 내 물건 보기</DialogTitle>
          </DialogHeader>
          <SuggestList
            toCardId={cardId}
            pokeAvailable={pokeAvailable}
            suggestionData={suggestions ?? []}
          />
        </DialogContent>
      </Dialog>
    </section>
  )
}

export default TradeSection
