import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import koLocale from 'date-fns/locale/ko'
import Badge from '@/components/ui/Badge'
import Card from '@/components/ui/Card'
import { CardFlex, CardImage, CardText } from '@/components/ui/Card/Card'
import { Item } from '@/types'

type TradeStateCardProps = {
  item: Item
  className: string
}

const TradeAvailableBadge = () => <Badge variant={'primary'}>거래가능</Badge>
const ReservedBadge = () => <Badge variant={'secondary'}>예약중</Badge>

const TradeStateCard = ({
  item: { image, cardTitle, status, itemName, priceRange, createdAt },
  className,
}: TradeStateCardProps) => {
  return (
    <Card size={'sm'} className={className}>
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
            {status === 'TRADE_AVAILABLE' ? (
              <TradeAvailableBadge />
            ) : (
              <ReservedBadge />
            )}
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
