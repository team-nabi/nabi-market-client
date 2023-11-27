import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { DirectionType, SuggestionType } from '@/types/suggestion'

type SuggestionStatusTabsProps = {
  setSuggestionTypeState: (_suggestionTypeState: SuggestionType) => void
  setDirectionTypeState: (_directionTypeState: DirectionType) => void
}

const SuggestionStatusTabs = ({
  setSuggestionTypeState,
  setDirectionTypeState,
}: SuggestionStatusTabsProps) => {
  const handleChangeCurrentTab = (
    suggestionType: SuggestionType,
    directionType: DirectionType,
  ) => {
    setSuggestionTypeState(suggestionType)
    setDirectionTypeState(directionType)
  }

  return (
    <Tabs defaultValue="OFFER_RECEIVE">
      <TabsList>
        <TabsTrigger
          value="OFFER_RECEIVE"
          onClick={() => handleChangeCurrentTab('OFFER', 'RECEIVE')}
        >
          받은 오퍼
        </TabsTrigger>
        <TabsTrigger
          value="OFFER_SEND"
          onClick={() => handleChangeCurrentTab('OFFER', 'SEND')}
        >
          보낸 오퍼
        </TabsTrigger>
        <TabsTrigger
          value="POKE_RECEIVE"
          onClick={() => handleChangeCurrentTab('POKE', 'RECEIVE')}
        >
          받은 쩔러보기
        </TabsTrigger>
        <TabsTrigger
          value="POKE_SEND"
          onClick={() => handleChangeCurrentTab('POKE', 'SEND')}
        >
          보낸 쩔러보기
        </TabsTrigger>
      </TabsList>
    </Tabs>
  )
}
export default SuggestionStatusTabs
