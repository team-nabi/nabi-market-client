import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import koLocale from 'date-fns/locale/ko'
import Link from 'next/link'
import ReservedBadge from '@/components/domain/badge/reserved-badge'
import TradeAvailableBadge from '@/components/domain/badge/trade-available-badge'
import Badge from '@/components/ui/badge'
import { CardFlex, CardImage, CardText } from '@/components/ui/card'
import AppPath from '@/config/appPath'
import { PRICE_RANGE_OBJS, TRADE_TYPE_OBJS } from '@/constants/card'
import { CardDetail } from '@/types/card'
import { getValueByKey } from '@/utils/getValueByKey'

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
    tradeType,
    tradeArea,
  },
}: MyCardDescriptionSection) => (
  <Link href={`${AppPath.card(String(cardId))}`} className="w-full">
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
            className="border rounded-lg border-background-secondary-color"
            src={thumbnail}
            alt="이미지가 없습니다."
            layout="fill"
            objectFit="cover"
          />
        </div>

        <CardFlex
          direction={'col'}
          // justify={'between'}
          gap={'space'}
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
          <hr className="my-1" />
          <CardText type={'description'} className="flex justify-between">
            가격대
            <Badge size={'sm'} variant={'information'}>
              {getValueByKey(PRICE_RANGE_OBJS, priceRange)}
            </Badge>
          </CardText>
          <CardText type={'description'} className="flex justify-between">
            거래방식
            <Badge size={'sm'} variant={'information'}>
              {getValueByKey(TRADE_TYPE_OBJS, tradeType)}
            </Badge>
          </CardText>
          <CardText type={'description'} className="flex justify-between">
            거래지역
            <Badge size={'sm'} variant={'information'}>
              {tradeArea}
            </Badge>
          </CardText>
          {/* <CardText type={'date'}>
            {formatDistanceToNow(new Date(createdAt), {
              addSuffix: true,
              locale: koLocale,
            })}
          </CardText> */}
        </CardFlex>
      </CardFlex>
    </div>
  </Link>
)

export default MyCardDescriptionSection