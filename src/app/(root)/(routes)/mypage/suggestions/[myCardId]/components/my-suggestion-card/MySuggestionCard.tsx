import { formatDistanceToNow } from 'date-fns'
import koLocale from 'date-fns/locale/ko'
import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import Button from '@/components/ui/button'
import { CardFlex, CardText, Card, CardImage } from '@/components/ui/card/Card'
import AppPath from '@/config/appPath'
import Assets from '@/config/assets'
import { PRICE_RANGE_OBJS } from '@/constants/card'
import { useMySuggestionUpdateMutation } from '@/hooks/api/mutations/useMySuggestionUpdateMutation'
import { Card as CardInfo } from '@/types/card'
import { DirectionType, Suggestion, SuggestionType } from '@/types/suggestion'
import { getValueByKey } from '@/utils/getValueByKey'

const SuggestionButtons = ({
  handleMySuggestionUpdate,
}: {
  handleMySuggestionUpdate: (isAccepted: boolean) => void
}) => (
  <>
    <CardFlex
      onClick={() => handleMySuggestionUpdate(true)}
      className="cursor-pointer"
      align={'center'}
      gap={'space'}
    >
      <Image src={Assets.checkCircle} alt="check-circle" />
      <CardText>수락</CardText>
    </CardFlex>
    <CardFlex
      onClick={() => handleMySuggestionUpdate(false)}
      className="cursor-pointer"
      align={'center'}
      gap={'space'}
    >
      <Image src={Assets.quitCircle} alt="check-circle" />
      <CardText>거절</CardText>
    </CardFlex>
  </>
)

// TODO : 채팅 페이지 라우팅 및 설정이 나오면 라우팅 기능 만들기
const AcceptedButton = () => {
  return (
    <Link href={`${AppPath.chatRooms('')}`}>
      <Button variant={'gradation'}>채팅</Button>
    </Link>
  )
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

type MySuggestionCardProps = {
  mySuggestion: {
    suggestionInfo: Suggestion
    cardInfo: CardInfo
  }
  suggestionTypeState: SuggestionType
  directionTypeState: DirectionType
}
const MySuggestionCard = ({
  mySuggestion: {
    suggestionInfo: { suggestionStatus, directionType, createdAt },
    cardInfo: { cardId, cardTitle, itemName, priceRange, thumbnail },
  },
  suggestionTypeState,
  directionTypeState,
}: MySuggestionCardProps) => {
  const { myCardId } = useParams()

  const { mutate } = useMySuggestionUpdateMutation(
    suggestionTypeState,
    directionTypeState,
    myCardId,
  )
  const handleMySuggestionUpdate = (cardId: number, isAccepted: boolean) => {
    mutate({
      fromCardId: cardId,
      toCardId: myCardId,
      isAccepted,
    })
  }

  return (
    <Link href={AppPath.cards(String(cardId))}>
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

            <CardFlex
              direction={'col'}
              justify={'between'}
              className="h-full w-2/3"
            >
              <CardText
                type={'title'}
                className="whitespace-nowrap overflow-hidden overflow-ellipsis"
              >
                {cardTitle}
              </CardText>
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
                {suggestionStatus === 'WAITING' ? (
                  directionType === 'RECEIVE' ? (
                    <SuggestionButtons
                      handleMySuggestionUpdate={(isAccepted: boolean) =>
                        handleMySuggestionUpdate(cardId, isAccepted)
                      }
                    />
                  ) : (
                    <WaitingButton />
                  )
                ) : suggestionStatus === 'ACCEPTED' ? (
                  <AcceptedButton />
                ) : (
                  <DeclinedButton />
                )}
              </CardFlex>
              <CardText type={'date'}>
                {formatDistanceToNow(new Date(createdAt), { locale: koLocale })}
              </CardText>
            </CardFlex>
          </CardFlex>
        </Card>
      </div>
    </Link>
  )
}

export default MySuggestionCard
