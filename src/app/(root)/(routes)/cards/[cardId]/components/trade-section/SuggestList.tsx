import Image from 'next/image'
import SuggestCard from '@/components/domain/card/suggest-card'
import { Tabs, TabsTrigger, TabsList, TabsContent } from '@/components/ui/tabs'
import Assets from '@/config/assets'
import { AvailableCardSuggestionListRes } from '@/services/suggestion/suggestion'

type SuggestListProps = {
  suggestionData: AvailableCardSuggestionListRes[]
  pokeAvailable: boolean
  toCardId: number
}

/**
 * TODO : 스크롤바 디자인 수정
 * TODO : 실제 API 연결(useMutation 사용해서)
 */
const SuggestList = ({
  suggestionData,
  pokeAvailable,
  toCardId,
}: SuggestListProps) => {
  console.log(suggestionData)
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
          className=" data-[state=inactive]:hidden h-[402px] overflow-y-auto"
        >
          {!pokeAvailable && type === 'POKE' ? (
            <div className="flex flex-col justify-start items-center gap-4 p-8">
              <Image
                width={200}
                height={200}
                alt="unavailable"
                src={Assets.unavailableIcon}
              />
              <p className="font-normal text-sm">
                찔러보기가 허용되지 않은 물건입니다
              </p>
            </div>
          ) : (
            suggestionData
              .filter((v) => v.suggestion.suggestionType === type)
              .map((v) => (
                <SuggestCard
                  key={v.cardInfo.cardId}
                  thumbNail={v.cardInfo.thumbNail}
                  cardTitle={v.cardInfo.cardTitle}
                  itemName={v.cardInfo.itemName}
                  priceRange={v.cardInfo.priceRange}
                  suggestionType={v.suggestion.suggestionType}
                  cardId={v.cardInfo.cardId}
                  toCardId={toCardId}
                  suggestionStatus={v.suggestion.suggestionStatus}
                />
              ))
          )}
        </TabsContent>
      ))}
    </Tabs>
  )
}

export default SuggestList
