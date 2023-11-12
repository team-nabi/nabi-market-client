import { formatDistanceToNow } from 'date-fns'
import koLocale from 'date-fns/locale/ko'
import Image from 'next/image'
import Link from 'next/link'
import Card from '@/components/ui/Card'
import { CardFlex, CardImage, CardText } from '@/components/ui/Card/Card'
import AppPath from '@/config/appPath'
import Assets from '@/config/assets'
import { MyItem } from '@/types'

const MoveToItemListPageButton = ({ priceRange }: { priceRange: string }) => (
  <Link href={`${AppPath.items()}?priceRange=${priceRange}`}>
    <CardFlex align={'center'} gap={'space'}>
      <Image src={Assets.checkCircle} alt="check-circle" />
      <CardText>제안 하러가기</CardText>
    </CardFlex>
  </Link>
)

const MoveToSuggestCheckPageButton = ({ itemId }: { itemId: string }) => (
  <Link href={`${AppPath.suggestChecks()}?itemId=${itemId}`}>
    <CardFlex align={'center'} gap={'space'}>
      <Image src={Assets.arrowCircleRight} alt="arrow-circle-right" />{' '}
      <CardText>제안 확인</CardText>
    </CardFlex>
  </Link>
)

type MyItemCardProps = {
  myItem: MyItem
}
const MyItemCard = ({
  myItem: {
    cardId,
    cardTitle,
    itemName,
    createdAt,
    priceRange,
    thumbNail,
    status,
  },
}: MyItemCardProps) => {
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
          <div className="h-full w-36 relative">
            <CardImage
              className="rounded-lg"
              src={thumbNail}
              alt="이미지가 없습니다."
              layout="fill"
              objectFit="cover"
            />
          </div>

          <CardFlex direction={'col'} justify={'between'} className="h-full">
            <CardText type={'title'}>{cardTitle}</CardText>
            <CardText type={'description'}>{itemName}</CardText>
            <CardText type={'description'}>{priceRange}</CardText>
            <CardFlex gap={'space'}>
              {status === 'TRADE_AVAILABLE' ? (
                <>
                  <MoveToSuggestCheckPageButton itemId={cardId} />
                  <MoveToItemListPageButton priceRange={priceRange} />
                </>
              ) : status === 'RESERVED' ? (
                <MoveToSuggestCheckPageButton itemId={cardId} />
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

export default MyItemCard
