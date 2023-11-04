import SuggestCard from '@/components/domain/card/suggest-card'
import { Tabs, TabsTrigger, TabsList, TabsContent } from '@/components/ui/Tabs'
import { getSuggestions } from '@/services/suggest/suggest'
import { ItemSuggestion } from '@/types'

type SuggestListProps = {
  itemId: string
}

async function getSuggestionsValue(itemId: string) {
  try {
    const res = await getSuggestions(itemId)
    const data = await res.json()

    return data.data.cardList
  } catch (e) {
    console.log(e)
  }
}
/**
 * TODO : 스크롤바 디자인 수정
 * TODO : 실제 API 연결(useMutation 사용해서)
 */
const SuggestList = async ({ itemId }: SuggestListProps) => {
  const suggestions = await getSuggestionsValue(itemId)
  return (
    <Tabs defaultValue="offer">
      <TabsList>
        <TabsTrigger value="offer">오퍼하기</TabsTrigger>
        <TabsTrigger value="poke">찔러보기</TabsTrigger>
      </TabsList>
      {['offer', 'poke'].map((type) => (
        <TabsContent
          key={type}
          value={type}
          className=" data-[state=inactive]:hidden h-[402px] overflow-y-auto"
        >
          {suggestions
            .filter((v: ItemSuggestion) => v.suggestionType === type)
            .map((v: ItemSuggestion) => (
              <SuggestCard
                key={v.cardId}
                thumbNail={v.thumbNail}
                cardTitle={v.cardTitle}
                itemName={v.itemName}
                priceRange={v.priceRange}
                suggestionType={v.suggestionType}
              />
            ))}
        </TabsContent>
      ))}
    </Tabs>
  )
}

export default SuggestList
