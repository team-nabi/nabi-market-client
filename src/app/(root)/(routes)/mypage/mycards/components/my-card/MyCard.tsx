import { formatDistanceToNow } from 'date-fns'
import koLocale from 'date-fns/locale/ko'
import Image from 'next/image'
import Link from 'next/link'
import Badge from '@/components/ui/badge'
import { Card, CardFlex, CardImage, CardText } from '@/components/ui/card'
import AppPath from '@/config/appPath'
import Assets from '@/config/assets'
import type { Card as CardInfo } from '@/types/card'

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

const TradeAvailableBadge = () => <Badge variant={'primary'}>거래가능</Badge>
const ReservedBadge = () => <Badge variant={'secondary'}>예약중</Badge>
const TradeCompleteBadge = () => <Badge variant={'gradation'}>거래성사</Badge>

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

          <CardFlex direction={'col'} justify={'between'} className="h-full">
            <CardFlex align={'center'} gap={'space'}>
              <CardText type={'title'}>{cardTitle}</CardText>
              {status === 'TRADE_AVAILABLE' ? (
                <TradeAvailableBadge />
              ) : status === 'RESERVED' ? (
                <ReservedBadge />
              ) : (
                <TradeCompleteBadge />
              )}
            </CardFlex>
            <CardText type={'description'}>{itemName}</CardText>
            <CardText type={'description'}>{priceRange}</CardText>
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
              {formatDistanceToNow(new Date(createdAt), { locale: koLocale })}
            </CardText>
          </CardFlex>
        </CardFlex>
      </Card>
    </div>
  )
}

export default MyCard
