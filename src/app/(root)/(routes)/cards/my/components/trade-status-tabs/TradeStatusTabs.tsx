import { Tabs, TabsTrigger, TabsList } from '@/components/ui/tabs'
import { TradeStatus } from '@/types/card'

type TradeStatusTabsProps = {
  tradeStatus: TradeStatus
  setTradeStatus: (tradeStatus: TradeStatus) => void
}

const TradeStatusTabs = ({
  tradeStatus,
  setTradeStatus,
}: TradeStatusTabsProps) => {
  const handleChangeCurrentTab = (tradeStatus: TradeStatus) => {
    setTradeStatus(tradeStatus)
  }

  return (
    <Tabs defaultValue={tradeStatus}>
      <TabsList>
        <TabsTrigger
          value="TRADE_AVAILABLE"
          onClick={() => handleChangeCurrentTab('TRADE_AVAILABLE')}
        >
          거래가능
        </TabsTrigger>
        <TabsTrigger
          value="RESERVED"
          onClick={() => handleChangeCurrentTab('RESERVED')}
        >
          예약중
        </TabsTrigger>
        <TabsTrigger
          value="TRADE_COMPLETE"
          onClick={() => handleChangeCurrentTab('TRADE_COMPLETE')}
        >
          거래성사
        </TabsTrigger>
      </TabsList>
    </Tabs>
  )
}
export default TradeStatusTabs
