import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import koLocale from 'date-fns/locale/ko'
import Link from 'next/link'
import Badge from '@/components/ui/badge'
import Card, { CardFlex, CardImage, CardText } from '@/components/ui/card'
import AppPath from '@/config/appPath'
import { CardDetail } from '@/types/card'

const TradeAvailableBadge = () => <Badge variant={'primary'}>거래가능</Badge>
const ReservedBadge = () => <Badge variant={'secondary'}>예약중</Badge>

type MyCardDescriptionSection = {
  card: CardDetail
}

const MyCardDescriptionSection = ({
  card: {
    cardId,
    thumbnail,
    cardTitle,
    status,
    itemName,
    priceRange,
    createdAt,
  },
}: MyCardDescriptionSection) => (
  <Link href={`${AppPath.cards()}/${cardId}`}>
    <div className="h-card-lg p-1.5">
      <CardFlex
        direction={'row'}
        justify={'start'}
        align={'center'}
        gap={'space'}
        className="h-full"
      >
        <div className="relative w-32 h-full">
          <CardImage
            className="rounded-lg border border-background-secondary-color"
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
    </div>
  </Link>
)

export default MyCardDescriptionSection
