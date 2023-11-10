'use client'

import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import { CardFlex, CardImage, CardText } from '@/components/ui/Card/Card'
import { DEFAULT_ITEM_THUMBNAIL_IMG } from '@/constants/image'

type SuggestCardProps = {
  thumbNail?: string
  cardTitle: string
  itemName: string
  priceRange: string
  suggestionType: string
}

const SuggestCard = ({
  thumbNail = DEFAULT_ITEM_THUMBNAIL_IMG,
  cardTitle,
  itemName,
  priceRange,
  suggestionType,
}: SuggestCardProps) => {
  const onClickSuggest = () => {
    if (suggestionType === 'offer') {
      alert('오퍼하기 클릭됨')
      //
    } else {
      alert('찔러보기 클릭됨')
    }
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
            src={thumbNail}
            alt="thumbNail"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <CardFlex direction={'col'} justify={'between'} className="h-full grow">
          <CardText type={'title'}>{cardTitle}</CardText>
          <CardText type={'description'}>{itemName}</CardText>
          <CardText type={'description'}>{priceRange}</CardText>
          <div className="flex justify-end">
            <Button variant={'gradation'} size={'sm'} onClick={onClickSuggest}>
              {suggestionType === 'poke' ? '찔러보기' : '오퍼하기'}
            </Button>
          </div>
        </CardFlex>
      </CardFlex>
    </Card>
  )
}

export default SuggestCard
