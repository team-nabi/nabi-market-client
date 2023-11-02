import Button from '@/components/ui/Button'
import TradeInfo from './TradeInfo'

type TradeSectionProps = {}

const TradeSection = ({}: TradeSectionProps) => {
  return (
    <section className="flex flex-col gap-2 w-full pt-4">
      <TradeInfo />
      <TradeInfo />
      <TradeInfo />
      <Button className="mt-6" variant={'primary'}>
        제안 확인하기
      </Button>
    </section>
  )
}

export default TradeSection
