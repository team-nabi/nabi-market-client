import { Suspense } from 'react'
import { useRouter } from 'next/navigation'
import Loading from '@/app/loading'
import SuggestCard from '@/components/domain/card/suggest-card'
import NoData from '@/components/domain/no-data'
import { Tabs, TabsTrigger, TabsList, TabsContent } from '@/components/ui/tabs'
import useSuggestionsQuery from '@/hooks/api/queries/useSuggestionsQuery'
import PokeUnavailableInfo from './PokeUnavailableInfo'

type SuggestListProps = {
  pokeAvailable: boolean
  toCardId: number
}

const SuggestList = ({ pokeAvailable, toCardId }: SuggestListProps) => {
  const { data: suggestions } = useSuggestionsQuery(toCardId)
  const router = useRouter()
  const filterData = (type: string) => {
    const filteredData = suggestions?.filter(
      (v) => v.suggestionInfo.suggestionType === type,
    )

    if (filteredData?.length === 0) {
      return (
        <div className="h-full relative">
          <NoData
            title="제안 가능한 내 물건이 없습니다."
            onClickButton={() => router.push('/cards/new')}
            buttonContent="물건 등록하러 가기"
          />
        </div>
      )
    } else {
      return filteredData?.map((v) => (
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
    }
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
          className="flex flex-col data-[state=inactive]:hidden h-[402px] overflow-y-auto pr-2"
        >
          {!pokeAvailable && type === 'POKE' ? (
            <PokeUnavailableInfo />
          ) : (
            filterData(type)
          )}
        </TabsContent>
      ))}
    </Tabs>
  )
}

export default SuggestList
