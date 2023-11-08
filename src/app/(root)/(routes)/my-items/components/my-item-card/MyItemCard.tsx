import { formatDistanceToNow } from 'date-fns'
import koLocale from 'date-fns/locale/ko'
import Image from 'next/image'
import Link from 'next/link'
import Card from '@/components/ui/Card'
import { CardFlex, CardImage, CardText } from '@/components/ui/Card/Card'
import Assets from '@/config/assets'
import { MyItems } from '@/types'

const MoveToItemListPage = ({ priceRange }: { priceRange: string }) => (
  <Link href={`/items?priceRange=${priceRange}`}>
    <CardFlex align={'center'} gap={'space'}>
      <Image src={Assets.checkCircle} alt="check-circle" />
      <CardText>제안 하러가기</CardText>
    </CardFlex>
  </Link>
)

const MoveToOfferPage = () => (
  <Link href={`/offers`}>
    <CardFlex align={'center'} gap={'space'}>
      <Image src={Assets.arrowCircleRight} alt="arrow-circle-right" />{' '}
      <CardText>제안 확인</CardText>
    </CardFlex>
  </Link>
)

const renderMoveButtonsByStatus = (status: string, priceRange: string) => {
  switch (status) {
    case 'EXCHANGEABLE':
      return (
        <>
          <MoveToOfferPage />
          <MoveToItemListPage priceRange={priceRange} />
        </>
      )
    case 'RESERVED':
      return <MoveToOfferPage />
    case 'COMPLETED':
      return null
  }
}

type MyItemCardProps = {
  myItems: MyItems
}
const MyItemCard = ({
  myItems: { cardTitle, itemName, createdAt, priceRange, thumbNail, status },
}: MyItemCardProps) => {
  return (
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
            {renderMoveButtonsByStatus(status, priceRange)}
          </CardFlex>
          <CardText type={'date'}>
            {formatDistanceToNow(new Date(createdAt), { locale: koLocale })}
          </CardText>
        </CardFlex>
      </CardFlex>
    </Card>
  )
}

export default MyItemCard
