import Badge from '@/components/ui/badge'
import { COMPLETE_REQUEST_TYPE_OBJS } from '@/constants/card'
import { Card, CompleteRequestTypeObjs } from '@/types/card'
import { User } from '@/types/user'
import { getValueByKey } from '@/utils/getValueByKey'
import CompleteRequestCard from './CompleteRequestCard'

type CompleteReqeustTemplateProps = {
  currentUser: User
  completeRequestData: {
    fromCard: { cardInfo: Card; userInfo: User }
    toCard: { cardInfo: Card; userInfo: User }
    status: CompleteRequestTypeObjs['key']
  }
}

const CompleteReqeustTemplate = ({
  currentUser,
  completeRequestData: { fromCard, toCard, status },
}: CompleteReqeustTemplateProps) => {
  //NOTE -  현재 로그인한 사람이 거래성사 요청 받은 사람인경우 + 요청 상태가 waiting인 경우 - 거래성사요청 카드가 보인다.
  const isRequestedUser =
    toCard.userInfo.userId === currentUser.userId && status === 'WAITING'
  return isRequestedUser ? (
    <CompleteRequestCard
      myCardData={fromCard.cardInfo}
      otherCardData={toCard.cardInfo}
    />
  ) : (
    <Badge variant={'gradation'} size={'lg'} className="self-end mr-4">
      {getValueByKey(COMPLETE_REQUEST_TYPE_OBJS, status)}
    </Badge>
  )
}

export default CompleteReqeustTemplate
