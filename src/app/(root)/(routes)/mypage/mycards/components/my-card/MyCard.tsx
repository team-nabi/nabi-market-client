import { formatDistanceToNow } from 'date-fns'
import koLocale from 'date-fns/locale/ko'
import Image from 'next/image'
import Link from 'next/link'
import ReservedBadge from '@/components/domain/badge/reserved-badge'
import TradeAvailableBadge from '@/components/domain/badge/trade-available-badge'
import TradeCompleteBadge from '@/components/domain/badge/trade-complete-badge'
import { Card, CardFlex, CardImage, CardText } from '@/components/ui/card'
import AppPath from '@/config/appPath'
import Assets from '@/config/assets'
import { PRICE_RANGE_OBJS } from '@/constants/card'
import type { Card as CardInfo } from '@/types/card'
import { getValueByKey } from '@/utils/getValueByKey'

const MoveToItemListPageButton = ({ priceRange }: { priceRange: string }) => (
  <Link href={`${AppPath.cards()}?priceRange=${priceRange}`}>
    <CardFlex align={'center'} gap={'space'}>
      <Image src={Assets.checkCircle} alt="check-circle" />
      <CardText>제안 하러가기</CardText>
    </CardFlex>
  </Link>
)

const MoveToSuggestCheckPageButton = ({ cardId }: { cardId: number }) => (
  <Link href={`${AppPath.mySuggestions(cardId)}`}>
    <CardFlex align={'center'} gap={'space'}>
      <Image src={Assets.arrowCircleRight} alt="arrow-circle-right" />{' '}
      <CardText>제안 확인</CardText>
    </CardFlex>
  </Link>
)

type MyCardProps = {
  card: CardInfo
}
const MyCard = ({
  card: {
    cardId,
    cardTitle,
    itemName,
    createdAt,
    priceRange,
    thumbnail,
    status,
  },
}: MyCardProps) => {
  return (
    <div className="mb-6">
      <Card size={'lg'}>
        <CardFlex
          direction={'row'}
          justify={'start'}
          align={'center'}
          gap={'space'}
          className="h-full"
        >
          <div className="relative h-full w-36">
            <CardImage
              className="rounded-lg"
              src={thumbnail}
              alt="이미지가 없습니다."
              layout="fill"
              objectFit="cover"
            />
          </div>

          <CardFlex
            direction={'col'}
            justify={'between'}
            className="h-full w-2/3"
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
              ) : status === 'RESERVED' ? (
                <ReservedBadge />
              ) : (
                <TradeCompleteBadge />
              )}
            </CardFlex>
            <CardText
              type={'description'}
              className="whitespace-nowrap overflow-hidden overflow-ellipsis"
            >
              {itemName}
            </CardText>
            <CardText type={'description'}>
              {getValueByKey(PRICE_RANGE_OBJS, priceRange)}
            </CardText>
            <CardFlex gap={'space'}>
              {status === 'TRADE_AVAILABLE' ? (
                <>
                  <MoveToSuggestCheckPageButton cardId={cardId} />
                  <MoveToItemListPageButton priceRange={priceRange} />
                </>
              ) : status === 'RESERVED' ? (
                <MoveToSuggestCheckPageButton cardId={cardId} />
              ) : status === 'TRADE_COMPLETE' ? null : undefined}
            </CardFlex>
            <CardText type={'date'}>
              {formatDistanceToNow(new Date(createdAt), {
                addSuffix: true,
                locale: koLocale,
              })}
            </CardText>
          </CardFlex>
        </CardFlex>
      </Card>
    </div>
  )
}

export default MyCard
