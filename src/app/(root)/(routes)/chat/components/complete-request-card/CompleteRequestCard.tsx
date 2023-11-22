import Image from 'next/image'
import Button from '@/components/ui/button'
import { Card, CardFlex, CardImage, CardText } from '@/components/ui/card/Card'
import Assets from '@/config/assets'
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

const CompleteRequestCard = () => {
  return (
    <div>
      <Card className="p-2 flex items-center border-0" size={'sm'}>
        <CardFlex justify={'between'} className="gap-4">
          <CardItem
            thumbnail={
              'https://team-01-bucket.s3.ap-northeast-2.amazonaws.com/633faaee-0210-4ffb-8085-569374a26d70-214e000d15fc5a3a.jpeg'
            }
            itemName={'조세호 짤'}
          />
          <CardFlex direction={'col'} align={'center'} justify={'center'}>
            <CardText
              type={'description'}
              className="text-[12px] max-w-[125px] text-center"
            >
              거래성사 요청이 왔습니다. 거래를 하셨나요?
            </CardText>
            <CardFlex direction={'row'} gap={'space'}>
              <Button className="ml-auto" size="icon_sm" variant={null}>
                <Image src={Assets.checkCircle} alt="accept" />
              </Button>
              <Button className="ml-auto" size="icon_sm" variant={null}>
                <Image src={Assets.quitCircle} alt="refuse" />
              </Button>
            </CardFlex>
          </CardFlex>
          <CardItem
            thumbnail={
              'https://team-01-bucket.s3.ap-northeast-2.amazonaws.com/fdd01120-4443-4643-9d6b-6140b75d0b98-230222112308_1_3034298.jpeg'
            }
            itemName={'갤럭시23'}
          />
        </CardFlex>
      </Card>
    </div>
  )
}

export default CompleteRequestCard
