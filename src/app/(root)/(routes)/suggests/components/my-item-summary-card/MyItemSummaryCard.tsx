import { formatDistanceToNow } from 'date-fns'
import koLocale from 'date-fns/locale/ko'
import { CardFlex, CardImage, CardText } from '@/components/ui/Card/Card'
import { ItemDetail } from '@/types'

type MyItemSummaryCardProps = {
  itemDetail: ItemDetail
}

const MyItemSummaryCard = ({
  itemDetail: { cardTitle, itemName, priceRange, createdAt, images },
}: MyItemSummaryCardProps) => {
  return (
    <div className="w-full h-card-lg p-2">
      <CardFlex
        className="h-full"
        direction={'row'}
        justify={'start'}
        align={'center'}
        gap={'space'}
      >
        <div className="h-full w-36 relative">
          <CardImage
            className="rounded-lg"
            src="https://cdn.cetizen.com/CDN/market/market_large_crop/202203/20220318/220318152808_1_2913635.jpg"
            alt="Picture of the author"
            layout="fill"
            objectFit="cover"
          />
        </div>

        <CardFlex direction={'col'} justify={'between'} className="h-full">
          <CardText type={'title'}>{cardTitle}</CardText>
          <CardText type={'description'}>{itemName}</CardText>
          <CardText type={'description'}>{priceRange}</CardText>
          <CardText type={'date'}>
            {formatDistanceToNow(new Date(createdAt), { locale: koLocale })}
          </CardText>
        </CardFlex>
      </CardFlex>
    </div>
  )
}
export default MyItemSummaryCard
