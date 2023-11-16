import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import koLocale from 'date-fns/locale/ko'
import Link from 'next/link'
import Badge from '@/components/ui/badge'
import Card from '@/components/ui/card'
import { CardFlex, CardImage, CardText } from '@/components/ui/card'
import AppPath from '@/config/appPath'
import { Card as CardInfo } from '@/types/card'

type TradeStatusCardProps = {
  card: CardInfo
}

const TradeAvailableBadge = () => <Badge variant={'primary'}>거래가능</Badge>
const ReservedBadge = () => <Badge variant={'secondary'}>예약중</Badge>

const TradeStatusCard = ({
  card: {
    cardId,
    thumbnail,
    cardTitle,
    status,
    itemName,
    priceRange,
    createdAt,
  },
}: TradeStatusCardProps) => {
  return (
    <Link href={`${AppPath.cards()}/${cardId}`}>
      <Card size={'sm'}>
        <CardFlex
          direction={'row'}
          justify={'start'}
          align={'center'}
          gap={'space'}
          className="h-full"
        >
          <div className="relative w-32 h-full">
            <CardImage
              src={thumbnail}
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
    </Link>
  )
}

export default TradeStatusCard
