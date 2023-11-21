'use client'

import Button from '@/components/ui/button'
import Card from '@/components/ui/card'
import { CardFlex, CardImage, CardText } from '@/components/ui/card/Card'
import { PRICE_RANGE_OBJS } from '@/constants/card'
import { DEFAULT_ITEM_THUMBNAIL_IMG } from '@/constants/image'
import useSuggestionUpdateMutation from '@/hooks/api/mutations/useSuggestionUpdateMutation'
import { SuggestionType } from '@/types/suggestion'
import { getValueByKey } from '@/utils/getValueByKey'

type SuggestCardProps = {
  thumbnail?: string
  cardTitle: string
  itemName: string
  priceRange: string
  suggestionType: SuggestionType
  fromCardId: number
  toCardId: number
  suggestionStatus: string | null
}

const SuggestCard = ({
  thumbnail = DEFAULT_ITEM_THUMBNAIL_IMG,
  cardTitle,
  itemName,
  priceRange,
  suggestionType,
  fromCardId,
  toCardId,
  suggestionStatus,
}: SuggestCardProps) => {
  const { mutate } = useSuggestionUpdateMutation(toCardId, fromCardId)

  const onClickSuggest = async (suggestionType: SuggestionType) => {
    mutate({ suggestionType, fromCardId, toCardId })
  }
  return (
    <Card size="md">
      <CardFlex
        direction={'row'}
        justify={'start'}
        align={'center'}
        gap={'space'}
        className="h-full"
      >
        <div className="h-full w-36 relative">
          <CardImage
            src={thumbnail}
            alt="thumbnail"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <CardFlex direction={'col'} justify={'between'} className="h-full grow">
          <CardText type={'title'}>{cardTitle}</CardText>
          <CardText type={'description'}>{itemName}</CardText>
          <CardText type={'description'}>
            {getValueByKey(PRICE_RANGE_OBJS, priceRange)}
          </CardText>
          <div className="flex justify-end">
            <Button
              variant={'gradation'}
              size={'sm'}
              onClick={() => onClickSuggest(suggestionType)}
              disabled={suggestionStatus !== null}
            >
              {suggestionStatus === null
                ? suggestionType === 'POKE'
                  ? '찔러보기'
                  : '오퍼하기'
                : '제안됨'}
            </Button>
          </div>
        </CardFlex>
      </CardFlex>
    </Card>
  )
}

export default SuggestCard
