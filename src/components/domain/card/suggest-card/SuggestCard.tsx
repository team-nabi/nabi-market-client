import Card from '@/components/ui/Card'
import { CardFlex, CardImage } from '@/components/ui/Card/Card'

const SuggestCard = () => {
  return (
    <Card size="md">
      <CardFlex>
        <div className="h-full w-36 relative">
          <CardImage
            src={
              'https://cdn.cetizen.com/CDN/market/market_large_crop/202203/20220318/220318152808_1_2913635.jpg'
            }
            alt="Picture of the author"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </CardFlex>
    </Card>
  )
}

export default SuggestCard
