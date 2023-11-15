import { format } from 'date-fns'
import { CardFlex, CardImage, CardText, Card } from '@/components/ui/card'
import Assets from '@/config/assets'
import { Card as CardInfo } from '@/types/card'
import { History } from '@/types/history'

const SubCard = ({
  thumbnail,
  itemName,
  priceRange,
}: Pick<CardInfo, 'thumbnail' | 'itemName' | 'priceRange'>) => (
  <CardFlex direction={'col'} justify={'center'} align={'center'}>
    <div className="h-11 w-20 relative">
      <CardImage
        alt={'물건 이미지'}
        src={thumbnail}
        layout="fill"
        objectFit="cover"
        className="rounded"
      />
    </div>
    <CardText type={'description'} className="font-bold">
      {itemName}
    </CardText>
    <CardText type={'icon'}>{priceRange}</CardText>
  </CardFlex>
)

type HistoryCardProps = {
  history: History
}

const HistoryCard = ({
  history: { fromCard, toCard, createdAt },
}: HistoryCardProps) => {
  return (
    <Card size={'sm'} className="p-2">
      <CardText type={'icon'}>
        {format(new Date(createdAt), 'yyyy.MM.dd')}
      </CardText>
      <CardFlex justify={'between'}>
        <SubCard
          thumbnail={fromCard.thumbnail}
          itemName={fromCard.itemName}
          priceRange={fromCard.priceRange}
        />
        <CardFlex direction={'col'} align={'center'}>
          <CardImage alt={'거래 완료 이미지'} src={Assets.tradeComplete} />
          <CardText type={'description'} className="font-bold">
            거래 완료
          </CardText>
        </CardFlex>
        <SubCard
          thumbnail={toCard.thumbnail}
          itemName={toCard.itemName}
          priceRange={toCard.priceRange}
        />
      </CardFlex>
    </Card>
  )
}

export default HistoryCard
