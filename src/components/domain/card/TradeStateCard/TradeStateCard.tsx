import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import koLocale from 'date-fns/locale/ko'
import Badge from '@/components/ui/Badge'
import Card from '@/components/ui/Card'
import { CardFlex, CardImage, CardText } from '@/components/ui/Card/Card'
import { Item } from '@/types'

type TradeStateCardProps = {
  item: Item
}

const TradeStateCard = ({
  item: { image, cardTitle, tradeState, itemName, priceRange, createdAt },
}: TradeStateCardProps) => {
  const getStyleByTradeState = (tradeState: string) =>
    tradeState === 'possible' ? 'primary' : 'secondary'
  const getTextByTradeState = (tradeState: string) =>
    tradeState === 'possible' ? '거래가능' : '예약중'
  const renderBadgeByTradeState = (tradeState: string) => (
    <Badge variant={getStyleByTradeState(tradeState)} size={'sm'}>
      {getTextByTradeState(tradeState)}
    </Badge>
  )

  return (
    <Card size={'sm'}>
      <CardFlex
        direction={'row'}
        justify={'start'}
        align={'center'}
        gap={'space'}
        className="h-full"
      >
        <div className="h-full w-32 relative">
          <CardImage
            src={image}
            alt="이미지가 없습니다."
            layout="fill"
            objectFit="cover"
          />
        </div>

        <CardFlex direction={'col'} justify={'between'} className="h-full">
          <CardFlex align={'center'} gap={'space'}>
            <CardText type={'title'}>{cardTitle}</CardText>
            {renderBadgeByTradeState(tradeState)}
          </CardFlex>
          <CardText type={'description'}>{itemName}</CardText>
          <CardText type={'description'}>{priceRange}</CardText>
          <CardText type={'date'}>
            {formatDistanceToNow(new Date(createdAt), { locale: koLocale })}
          </CardText>
        </CardFlex>
      </CardFlex>
    </Card>
  )
}

export default TradeStateCard
