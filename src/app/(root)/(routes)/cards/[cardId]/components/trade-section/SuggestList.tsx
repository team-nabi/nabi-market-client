import { useRouter } from 'next/navigation'
import SuggestCard from '@/components/domain/card/suggest-card'
import NoData from '@/components/domain/no-data'
import { Tabs, TabsTrigger, TabsList, TabsContent } from '@/components/ui/tabs'
import { AvailableCardSuggestionListRes } from '@/services/suggestion/suggestion'
import PokeUnavailableInfo from './PokeUnavailableInfo'

type SuggestListProps = {
  suggestionData: AvailableCardSuggestionListRes[]
  pokeAvailable: boolean
  toCardId: number
}

const SuggestList = ({
  suggestionData,
  pokeAvailable,
  toCardId,
}: SuggestListProps) => {
  const router = useRouter()
  const filterData = (type: string) => {
    return suggestionData.filter(
      (v) => v.suggestionInfo.suggestionType === type,
    )
  }

  return (
    <Tabs defaultValue="OFFER">
      <TabsList>
        <TabsTrigger value="OFFER">오퍼하기</TabsTrigger>
        <TabsTrigger value="POKE">찔러보기</TabsTrigger>
      </TabsList>
      {['OFFER', 'POKE'].map((type) => (
        <TabsContent
          key={type}
          value={type}
          className="flex flex-col data-[state=inactive]:hidden h-[402px] overflow-y-auto"
        >
          {!pokeAvailable && type === 'POKE' ? (
            <PokeUnavailableInfo />
          ) : filterData(type).length ? (
            filterData(type).map((v) => (
              <SuggestCard
                key={v.cardInfo.cardId}
                thumbnail={v.cardInfo.thumbnail}
                cardTitle={v.cardInfo.cardTitle}
                itemName={v.cardInfo.itemName}
                priceRange={v.cardInfo.priceRange}
                suggestionType={v.suggestionInfo.suggestionType}
                fromCardId={v.cardInfo.cardId}
                toCardId={toCardId}
                suggestionStatus={v.suggestionInfo.suggestionStatus}
              />
            ))
          ) : (
            <div className="h-full relative">
              <NoData
                title="제안 가능한 내 물건이 없습니다."
                onClickButton={() => router.push('/cards/new')}
                buttonContent="물건 등록하러 가기"
              />
            </div>
          )}
        </TabsContent>
      ))}
    </Tabs>
  )
}

export default SuggestList
