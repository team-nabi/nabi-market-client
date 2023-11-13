import { formatDistanceToNow } from 'date-fns'
import koLocale from 'date-fns/locale/ko'
import Image from 'next/image'
import { useSearchParams } from 'next/navigation'
import Button from '@/components/ui/button'
import { CardFlex, CardText, Card, CardImage } from '@/components/ui/card/Card'
import Assets from '@/config/assets'
import { useMySuggestionUpdateMutation } from '@/hooks/api/queries/useMySuggestionUpdateMutation'
import { MySuggestionRes } from '@/services/suggestion/suggestion'
import {
  DirectionType,
  SuggestionStatus,
  SuggestionType,
} from '@/types/suggestion'

const SuggestionButtons = ({
  handleMySuggestionUpdate,
}: {
  handleMySuggestionUpdate: (suggestionStatus: SuggestionStatus) => void
}) => (
  <>
    <CardFlex
      onClick={() => handleMySuggestionUpdate('ACCEPTED')}
      className="cursor-pointer"
      align={'center'}
      gap={'space'}
    >
      <Image src={Assets.checkCircle} alt="check-circle" />
      <CardText>수락</CardText>
    </CardFlex>
    <CardFlex
      onClick={() => handleMySuggestionUpdate('REFUSED')}
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

type SuggestCheckCardProps = {
  mySuggestionListResponseData: MySuggestionRes & { pageInfo: number }
  suggestionTypeState: SuggestionType
  directionTypeState: DirectionType
}
const MySuggestionCard = ({
  mySuggestionListResponseData: {
    suggestion: { suggestionId, suggestionStatus, directionType },
    cardInfo: { cardTitle, itemName, priceRange, thumbNail, createdAt },
    pageInfo,
  },
  suggestionTypeState,
  directionTypeState,
}: SuggestCheckCardProps) => {
  const searchParams = useSearchParams()

  const { mutate } = useMySuggestionUpdateMutation(
    suggestionTypeState,
    directionTypeState,
    searchParams.get('cardId'),
  )
  const handleMySuggestionUpdate = (
    suggestionId: string,
    suggestionStatus: SuggestionStatus,
  ) => {
    mutate({ suggestionId, suggestionStatus, currentPage: pageInfo })
  }

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
              {suggestionStatus === 'WAITING' ? (
                directionType === 'RECEIVE' ? (
                  <SuggestionButtons
                    handleMySuggestionUpdate={(
                      suggestionStatus: SuggestionStatus,
                    ) =>
                      handleMySuggestionUpdate(suggestionId, suggestionStatus)
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
  )
}

export default MySuggestionCard
