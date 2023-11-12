import { Tabs, TabsList, TabsTrigger } from '@/components/ui/Tabs'
import { Status } from '@/types/item'

type TradeStatusTabsProps = {
  status: Status
  setStatus: (status: Status) => void
}

const TradeStatusTabs = ({ status, setStatus }: TradeStatusTabsProps) => {
  const handleChangeCurrentTab = (status: Status) => {
    setStatus(status)
  }

  return (
    <Tabs defaultValue={status}>
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
