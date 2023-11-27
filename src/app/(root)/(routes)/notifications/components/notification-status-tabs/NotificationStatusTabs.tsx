import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'

type NotificationStatusTabsProps = {
  setIsRead: (isRead: boolean) => void
}

const NotificationStatusTabs = ({ setIsRead }: NotificationStatusTabsProps) => {
  const handleChangeCurrentTab = (isReadValue: boolean) => {
    setIsRead(isReadValue)
  }

  return (
    <Tabs
      defaultValue="isRead_true"
      className="h-9 flex justify-center items-center my-12"
    >
      <TabsList>
        <TabsTrigger
          value="isRead_true"
          onClick={() => handleChangeCurrentTab(false)}
        >
          새 소식
        </TabsTrigger>
        <TabsTrigger
          value="isRead_false"
          onClick={() => handleChangeCurrentTab(true)}
        >
          지난 소식
        </TabsTrigger>
      </TabsList>
    </Tabs>
  )
}
export default NotificationStatusTabs
