import { formatDistanceToNow } from 'date-fns'
import koLocale from 'date-fns/locale/ko'
import Image from 'next/image'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import { CardFlex, CardImage, CardText } from '@/components/ui/Card/Card'
import Assets from '@/config/assets'
import { DirectionType, SuggestList, SuggestionStatus } from '@/types/suggest'

const SuggestCheckButtons = () => (
  <>
    <CardFlex className="cursor-pointer" align={'center'} gap={'space'}>
      <Image src={Assets.checkCircle} alt="check-circle" />
      <CardText>수락</CardText>
    </CardFlex>
    <CardFlex className="cursor-pointer" align={'center'} gap={'space'}>
      <Image src={Assets.quitCircle} alt="check-circle" />
      <CardText>거절</CardText>
    </CardFlex>
  </>
)
const AcceptedButton = () => {
  return <Button variant={'gradation'}>채팅</Button>
}
const DeclinedButton = () => {
  return (
    <Button variant={'gradation'} disabled>
      거절
    </Button>
  )
}
const WaitingButton = () => {
  return (
    <Button variant={'gradation'} disabled>
      대기
    </Button>
  )
}

const renderMap = {
  WAITING: {
    RECEIVE: <SuggestCheckButtons />,
    SEND: <WaitingButton />,
  },
  ACCEPTED: <AcceptedButton />,
  DECLINED: <DeclinedButton />,
}

const reder = (
  suggestionStatus: SuggestionStatus,
  directionType: DirectionType,
) => {
  if (suggestionStatus === 'WAITING') {
    return renderMap[suggestionStatus][directionType]
  } else {
    return renderMap[suggestionStatus]
  }
}

type SuggestCheckCardProps = {
  suggestList: SuggestList
}
const SuggestCheckCard = ({
  suggestList: {
    cardTitle,
    itemName,
    priceRange,
    thumbnail,
    suggestionStatus,
    createdAt,
    directionType,
  },
}: SuggestCheckCardProps) => {
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
              src={thumbnail}
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
              {reder(suggestionStatus, directionType)}
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

export default SuggestCheckCard
