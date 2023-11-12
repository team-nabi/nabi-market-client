import { formatDistanceToNow } from 'date-fns'
import koLocale from 'date-fns/locale/ko'
import Image from 'next/image'
import { useSearchParams } from 'next/navigation'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import { CardFlex, CardImage, CardText } from '@/components/ui/Card/Card'
import Assets from '@/config/assets'
import { useSuggestCheckUpdateMutation } from '@/hooks/api/useSuggestCheckUpdateMutation'
import {
  DirectionType,
  SuggestCheck,
  SuggestionStatus,
  SuggestionType,
} from '@/types/suggest-check'

const SuggestCheckButtons = ({
  handleSuggestionCheckUpdate,
}: {
  handleSuggestionCheckUpdate: (suggestionStatus: SuggestionStatus) => void
}) => (
  <>
    <CardFlex
      onClick={() => handleSuggestionCheckUpdate('ACCEPTED')}
      className="cursor-pointer"
      align={'center'}
      gap={'space'}
    >
      <Image src={Assets.checkCircle} alt="check-circle" />
      <CardText>수락</CardText>
    </CardFlex>
    <CardFlex
      onClick={() => handleSuggestionCheckUpdate('DECLINED')}
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
  suggestCheck: SuggestCheck
  suggestionTypeState: SuggestionType
  directionTypeState: DirectionType
}
const SuggestCheckCard = ({
  suggestCheck: {
    suggestionId,
    cardTitle,
    itemName,
    priceRange,
    thumbnail,
    suggestionStatus,
    createdAt,
    directionType,
    pageInfo,
  },
  suggestionTypeState,
  directionTypeState,
}: SuggestCheckCardProps) => {
  const searchParams = useSearchParams()

  const { mutate } = useSuggestCheckUpdateMutation(
    suggestionTypeState,
    directionTypeState,
    searchParams.get('itemId'),
  )
  const handleSuggestCheckUpdate = (
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
              {suggestionStatus === 'WAITING' ? (
                directionType === 'RECEIVE' ? (
                  <SuggestCheckButtons
                    handleSuggestionCheckUpdate={(
                      suggestionStatus: SuggestionStatus,
                    ) =>
                      handleSuggestCheckUpdate(suggestionId, suggestionStatus)
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

export default SuggestCheckCard
