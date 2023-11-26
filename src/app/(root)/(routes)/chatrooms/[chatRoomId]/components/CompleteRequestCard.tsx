import Image from 'next/image'
import Button from '@/components/ui/button'
import { Card, CardFlex, CardImage, CardText } from '@/components/ui/card/Card'
import Assets from '@/config/assets'
import { toast } from '@/hooks/useToast'
import { putCompleteRequest } from '@/services/complete-request/completeRequest'
import { Card as CardType } from '@/types/card'

const CardItem = ({
  thumbnail,
  itemName,
}: Pick<CardType, 'thumbnail' | 'itemName'>) => (
  <CardFlex direction={'col'} justify={'center'} align={'center'} gap={'space'}>
    <div className="h-11 w-20 relative">
      <CardImage
        alt="card-thumbnail"
        src={thumbnail}
        layout="fill"
        objectFit="cover"
        className="rounded"
      />
    </div>
    <CardText className="font-bold text-[12px] whitespace-nowrap overflow-hidden overflow-ellipsis">
      {itemName}
    </CardText>
  </CardFlex>
)

type CompleteRequestCardProps = {
  myCardData: CardType
  otherCardData: CardType
}

const CompleteRequestCard = ({
  myCardData,
  otherCardData,
}: CompleteRequestCardProps) => {
  const handleCompleteRequestUpdate = async (isAccepted: boolean) => {
    try {
      await putCompleteRequest(
        otherCardData.cardId,
        myCardData.cardId,
        isAccepted,
      )
      window.location.reload()
      toast({
        title: `거래성사 요청을 ${isAccepted ? '수락' : '거절'}하였습니다.`,
        variant: 'default',
        duration: 2000,
      })
    } catch (error) {
      toast({
        title: '거래성사요청 수락 또는 거절이 실패했습니다.',
        variant: 'destructive',
        duration: 2000,
      })
    }
  }
  return (
    <div>
      <Card className="p-2 flex items-center border-0" size={'sm'}>
        <CardFlex justify={'between'} className="gap-4">
          <CardItem
            thumbnail={myCardData.thumbnail}
            itemName={myCardData.itemName}
          />
          <CardFlex direction={'col'} align={'center'} justify={'center'}>
            <CardText
              type={'description'}
              className="text-[12px] max-w-[125px] text-center"
            >
              거래성사 요청이 왔습니다. 거래를 하셨나요?
            </CardText>
            <CardFlex direction={'row'} gap={'space'}>
              <Button
                className="ml-auto"
                size="icon_sm"
                variant={null}
                onClick={() => handleCompleteRequestUpdate(true)}
              >
                <Image src={Assets.checkCircle} alt="accept" />
              </Button>
              <Button
                className="ml-auto"
                size="icon_sm"
                variant={null}
                onClick={() => handleCompleteRequestUpdate(false)}
              >
                <Image src={Assets.quitCircle} alt="refuse" />
              </Button>
            </CardFlex>
          </CardFlex>
          <CardItem
            thumbnail={otherCardData.thumbnail}
            itemName={otherCardData.itemName}
          />
        </CardFlex>
      </Card>
    </div>
  )
}

export default CompleteRequestCard