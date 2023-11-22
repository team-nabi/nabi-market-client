import Image from 'next/image'
import Button from '@/components/ui/button'
import { Card, CardFlex, CardImage, CardText } from '@/components/ui/card/Card'
import Assets from '@/config/assets'
import { Card as CardType } from '@/types/card'

const CardItem = ({
  thumbnail,
  itemName,
}: Pick<CardType, 'thumbnail' | 'itemName'>) => (
  <CardFlex direction={'col'} justify={'center'} align={'center'}>
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

const CompleteRequestCard = ({ fromCard, toCard, isAccepted }) => {
  return (
    <div>
      <Card className="p-2" size={'sm'}>
        <CardFlex justify={'between'}>
          <CardItem
            thumbnail={fromCard.thumbnail}
            itemName={fromCard.itemName}
          />
          <CardFlex direction={'col'} align={'center'}>
            <CardText type={'description'} className="text-[12px]">
              거래 성사 요청이 왔습니다. 거래를 하셨나요?
            </CardText>
            <CardFlex direction={'row'}>
              <Button className="ml-auto" size="icon_sm" variant={null}>
                <Image src={Assets.checkCircle} alt="accept" />
              </Button>
              <Button className="ml-auto" size="icon_sm" variant={null}>
                <Image src={Assets.quitCircle} alt="refuse" />
              </Button>
            </CardFlex>
          </CardFlex>
          <CardItem
            thumbnail={fromCard.thumbnail}
            itemName={fromCard.itemName}
          />
        </CardFlex>
      </Card>
    </div>
  )
}

export default CompleteRequestCard
