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
  const isRequestedUser =
    toCard.userInfo.userId === currentUser.userId && status === 'WAITING'
  return isRequestedUser ? (
    <CompleteRequestCard
      myCardData={toCard.cardInfo}
      otherCardData={fromCard.cardInfo}
    />
  ) : (
    <Badge variant={'gradation'} size={'lg'} className="self-end mr-4">
      {getValueByKey(COMPLETE_REQUEST_TYPE_OBJS, status)}
    </Badge>
  )
}

export default CompleteReqeustTemplate
