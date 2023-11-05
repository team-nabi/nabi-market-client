'use client'

import Button from '@/components/ui/Button'
import TradeInfo from './TradeInfo'

type TradeSectionProps = {
  priceRange: string
  tradeType: string
  tradeArea: string
  authorId: number
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
}: TradeSectionProps) => {
  // FIX : 로그인 관련 완성되면 실제 데이터로 수정
  // const { isLoggedIn } = useAuth()
  // const {currentUser} = useAuth();

  const currentUser = {
    imageUrl: 'http://asdf~',
    nickname: '병원에 간 미어캣',
    userId: 3,
  }
  const isLoggedIn = true
  const isMyItem = currentUser.userId === authorId

  const tradeInfo: TradeInfo[] = [
    { title: '가격대', content: priceRange, variant: 'primary' },
    { title: '거래 방식', content: tradeType, variant: 'information' },
    { title: '거래 지역', content: tradeArea, variant: 'information' },
  ]

  const onClickButton = () => {
    if (isMyItem) {
      alert('제안확인 페이지로 이동하기')
    } else {
      // FIX: NABI-88 머지시 Dialog open하도록 수정
    }
  }

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
    </section>
  )
}

export default TradeSection
