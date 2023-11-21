import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import koLocale from 'date-fns/locale/ko'
import Link from 'next/link'
import ReservedBadge from '@/components/domain/badge/reserved-badge'
import TradeAvailableBadge from '@/components/domain/badge/trade-available-badge'
import { CardFlex, CardImage, CardText } from '@/components/ui/card'
import AppPath from '@/config/appPath'
import { CardDetail } from '@/types/card'

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
  <Link href={`${AppPath.cards()}/${cardId}`} className="w-full">
    <div className="flex h-card-lg p-1.5 justify-center w-full">
      <CardFlex
        direction={'row'}
        justify={'start'}
        align={'center'}
        gap={'space'}
        className="w-full h-full"
      >
        <div className="relative w-1/3 h-full">
          <CardImage
            className="rounded-lg border border-background-secondary-color"
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
              className="whitespace-nowrap overflow-hidden overflow-ellipsis"
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
            className="whitespace-nowrap overflow-hidden overflow-ellipsis"
          >
            {itemName}
          </CardText>
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
