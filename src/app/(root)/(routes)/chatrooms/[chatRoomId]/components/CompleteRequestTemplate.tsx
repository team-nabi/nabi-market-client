import useCompleteRequestQuery from '@/hooks/api/queries/useCompleteRequestQuery'
import { User } from '@/types/user'
import CompleteRequestCard from './CompleteRequestCard'

type CompleteReqeustTemplateProps = {
  currentUser: User
  completeRequestId: number
}

const CompleteReqeustTemplate = ({
  completeRequestId,
}: CompleteReqeustTemplateProps) => {
  const { data } = useCompleteRequestQuery(completeRequestId)
  console.log(data)
  const completeRequestData = data?.data?.completeRequestInfo
  console.log(completeRequestData)
  /**
   * TODO - 현재 로그인한 사람이 toCardID의 userId와 같은 경우 + status가 WAITING인 경우 CompleteRequestCard가 보임
   * TODO - 현재 로그인한 사람이 fromCardID의 userId와 같은 경우 배지가 보임
   *
   */
  return <CompleteRequestCard completeRequestInfo={completeRequestData} />
}

export default CompleteReqeustTemplate
