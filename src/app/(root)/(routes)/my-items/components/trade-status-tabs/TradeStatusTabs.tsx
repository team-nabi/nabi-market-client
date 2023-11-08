import { Tabs, TabsList, TabsTrigger } from '@/components/ui/Tabs'

type TradeStatusTabsProps = {
  currentTab: string
  setCurrentTab: (currentTab: string) => void
}

const TradeStatusTabs = ({
  currentTab,
  setCurrentTab,
}: TradeStatusTabsProps) => {
  const handleChangeCurrentTab = (status: string) => {
    setCurrentTab(status)
  }

  return (
    <Tabs defaultValue={currentTab}>
      <TabsList>
        <TabsTrigger
          value="EXCHANGEABLE"
          onClick={() => handleChangeCurrentTab('EXCHANGEABLE')}
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
          value="COMPLETED"
          onClick={() => handleChangeCurrentTab('COMPLETED')}
        >
          거래성사
        </TabsTrigger>
      </TabsList>
    </Tabs>
  )
}
export default TradeStatusTabs
