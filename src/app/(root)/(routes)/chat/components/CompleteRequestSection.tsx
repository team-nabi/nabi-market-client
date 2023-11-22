import CompleteRequestCard from './complete-request-card/CompleteRequestCard'

type CompleteReqeustSectionProps = {
  completeRequestId: number
}

const CompleteReqeustSection = ({
  completeRequestId,
}: CompleteReqeustSectionProps) => {
  /**
   * TODO - 채팅방 단건조회에서 얻은 completeRequestId로 거래성사 요청 api 호출 추가
   * TODO - 현재 로그인한 사람이 toCardID의 userId와 같은 경우 + status가 WAITING인 경우 CompleteRequestCard가 보임
   * TODO - 현재 로그인한 사람이 fromCardID의 userId와 같은 경우 배지가 보임
   *
   */
  return <CompleteRequestCard />
}

export default CompleteReqeustSection
