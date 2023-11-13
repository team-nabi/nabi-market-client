import { Tabs, TabsList, TabsTrigger } from '@/components/ui/Tabs'
import { DirectionType, SuggestionType } from '@/types/suggest-check'

type SuggestStatusTabsProps = {
  setSuggestionTypeState: (suggestionTypeState: SuggestionType) => void
  setDirectionTypeState: (directionTypeState: DirectionType) => void
}

const SuggestStatusTabs = ({
  setSuggestionTypeState,
  setDirectionTypeState,
}: SuggestStatusTabsProps) => {
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
export default SuggestStatusTabs
