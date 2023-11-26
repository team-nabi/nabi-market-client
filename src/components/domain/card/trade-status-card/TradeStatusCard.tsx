import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import koLocale from 'date-fns/locale/ko'
import Link from 'next/link'
import Card from '@/components/ui/card'
import { CardFlex, CardImage, CardText } from '@/components/ui/card'
import AppPath from '@/config/appPath'
import { PRICE_RANGE_OBJS } from '@/constants/card'
import { Card as CardInfo } from '@/types/card'
import { getValueByKey } from '@/utils/getValueByKey'
import ReservedBadge from '../../badge/reserved-badge'
import TradeAvailableBadge from '../../badge/trade-available-badge'

type TradeStatusCardProps = {
  card: CardInfo
}

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
    <Link href={`${AppPath.cardDetail(String(cardId))}`}>
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

          <CardFlex
            direction={'col'}
            justify={'between'}
            className="w-2/3 h-full"
          >
            <CardFlex align={'center'} gap={'space'}>
              <CardText
                type={'title'}
                className="overflow-hidden whitespace-nowrap overflow-ellipsis"
              >
                {cardTitle}
              </CardText>
              {status === 'TRADE_AVAILABLE' ? (
                <TradeAvailableBadge />
              ) : (
                <ReservedBadge />
              )}
            </CardFlex>
            <CardText
              type={'description'}
              className="overflow-hidden whitespace-nowrap overflow-ellipsis"
            >
              {itemName}
            </CardText>
            <CardText type={'description'}>
              {getValueByKey(PRICE_RANGE_OBJS, priceRange)}
            </CardText>
            <CardText type={'date'}>
              {formatDistanceToNow(new Date(createdAt), {
                addSuffix: true,
                locale: koLocale,
              })}
            </CardText>
          </CardFlex>
        </CardFlex>
      </Card>
    </Link>
  )
}

export default TradeStatusCard
