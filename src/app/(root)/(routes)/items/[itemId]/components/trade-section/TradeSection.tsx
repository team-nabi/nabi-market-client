import Button from '@/components/ui/Button'
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/Dialog'
import SuggestList from './SuggestList'
import TradeInfo from './TradeInfo'

type TradeSectionProps = {
  priceRange: string
  tradeType: string
  tradeArea: string
  itemId: string
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
  itemId,
}: TradeSectionProps) => {
  const tradeInfo: TradeInfo[] = [
    { title: '가격대', content: priceRange, variant: 'primary' },
    { title: '거래 방식', content: tradeType, variant: 'information' },
    { title: '거래 지역', content: tradeArea, variant: 'information' },
  ]

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

      <Dialog>
        <DialogTrigger asChild>
          <Button className="mt-6" variant={'primary'}>
            제안 확인하기
          </Button>
        </DialogTrigger>
        <DialogContent className="p-4 pt-14 gap-6 max-h-[576px]">
          <DialogHeader>
            <DialogTitle>제안 가능한 내 물건 보기</DialogTitle>
          </DialogHeader>
          <SuggestList itemId={itemId} />
        </DialogContent>
      </Dialog>
    </section>
  )
}

export default TradeSection
