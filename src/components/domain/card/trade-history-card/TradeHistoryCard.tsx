import { format } from 'date-fns'
import { CardFlex, CardImage, CardText, Card } from '@/components/ui/card'
import Assets from '@/config/assets'
import { PRICE_RANGE_OBJS } from '@/constants/card'
import { Card as CardInfo } from '@/types/card'
import { TradeHistory } from '@/types/tradeHistory'
import { getValueByKey } from '@/utils/getValueByKey'

const SubCard = ({
  thumbnail,
  itemName,
  priceRange,
}: Pick<CardInfo, 'thumbnail' | 'itemName' | 'priceRange'>) => (
  <CardFlex direction={'col'} justify={'center'} align={'center'}>
    <div className="relative w-20 h-11">
      <CardImage
        alt={'물건 이미지'}
        src={thumbnail}
        fill
        style={{ objectFit: 'cover' }}
        className="rounded"
      />
    </div>
    <CardText
      title={itemName}
      type={'description'}
      className="w-20 overflow-hidden font-bold text-center whitespace-nowrap overflow-ellipsis"
    >
      {itemName}
    </CardText>
    <CardText type={'icon'}>
      {getValueByKey(PRICE_RANGE_OBJS, priceRange)}
    </CardText>
  </CardFlex>
)

type TradeHistoryCardProps = {
  history: TradeHistory
}

const TradeHistoryCard = ({
  history: { fromCard, toCard, createdAt },
}: TradeHistoryCardProps) => {
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

export default TradeHistoryCard
