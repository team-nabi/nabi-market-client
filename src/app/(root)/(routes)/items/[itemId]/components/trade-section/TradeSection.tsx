import Button from '@/components/ui/Button'
import TradeInfo from './TradeInfo'

type TradeSectionProps = {
  priceRange: string
  tradeType: string
  tradeArea: string
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

      <Button className="mt-6" variant={'primary'}>
        제안 확인하기
      </Button>
    </section>
  )
}

export default TradeSection
