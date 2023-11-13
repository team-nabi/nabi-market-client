'use client'

import { useState } from 'react'
import Button from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import useSuggestionsQuery from '@/hooks/api/queries/useSuggestionsQuery'
import SuggestList from './SuggestList'
import TradeInfo from './TradeInfo'

type TradeSectionProps = {
  priceRange: string
  tradeType: string
  tradeArea: string
  authorId: number
  cardId: number
  pokeAvailable: boolean
}

type TradeInfo = {
  title: string
  content: string
  variant: 'primary' | 'information'
}

const TradeSection = ({
  priceRange,
  tradeType,
  tradeArea,
  authorId,
  cardId,
  pokeAvailable,
}: TradeSectionProps) => {
  // FIX : 로그인 관련 완성되면 실제 데이터로 수정
  // const { isLoggedIn } = useAuth()
  // const {currentUser} = useAuth();

  const currentUser = {
    imageUrl: 'http://asdf~',
    nickname: '병원에 간 미어캣',
    userId: 2,
  }

  const isLoggedIn = true
  const isMyItem = currentUser.userId === authorId
  const [open, setOpen] = useState(false)

  const tradeInfo: TradeInfo[] = [
    { title: '가격대', content: priceRange, variant: 'primary' },
    { title: '거래 방식', content: tradeType, variant: 'information' },
    { title: '거래 지역', content: tradeArea, variant: 'information' },
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
        />
      ))}
      {isLoggedIn && (
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
