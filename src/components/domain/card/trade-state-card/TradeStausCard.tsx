import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import koLocale from 'date-fns/locale/ko'
import Badge from '@/components/ui/Badge'
import Card from '@/components/ui/Card'
import { CardFlex, CardImage, CardText } from '@/components/ui/Card/Card'
import { Items } from '@/types'

type TradueStatusCardProps = {
  items: Items
  className: string
}
type TradueStatusMap = {
  [key: string]: {
    style:
      | 'primary'
      | 'secondary'
      | 'gradation'
      | 'information'
      | null
      | undefined
    text: string
  }
}

const TradeStatusCard = ({
  items: { image, cardTitle, status, itemName, priceRange, createdAt },
  className,
}: TradueStatusCardProps) => {
  const TradueStatusMap: TradueStatusMap = {
    EXCHANGEABLE: {
      style: 'primary',
      text: '거래가능',
    },
    RESERVED: {
      style: 'secondary',
      text: '예약중',
    },
  }

  return (
    <Card size={'sm'} className={className}>
      <CardFlex
        direction={'row'}
        justify={'start'}
        align={'center'}
        gap={'space'}
        className="h-full"
      >
        <div className="h-full w-32 relative">
          <CardImage
            src={image}
            alt="이미지가 없습니다."
            layout="fill"
            objectFit="cover"
          />
        </div>

        <CardFlex direction={'col'} justify={'between'} className="h-full">
          <CardFlex align={'center'} gap={'space'}>
            <CardText type={'title'}>{cardTitle}</CardText>
            <Badge variant={TradueStatusMap[status].style}>
              {TradueStatusMap[status].text}
            </Badge>
          </CardFlex>
          <CardText type={'description'}>{itemName}</CardText>
          <CardText type={'description'}>{priceRange}</CardText>
          {/* <CardText type={'date'}>
            {formatDistanceToNow(new Date(createdAt), { locale: koLocale })}
          </CardText> */}
        </CardFlex>
      </CardFlex>
    </Card>
  )
}

export default TradeStatusCard
