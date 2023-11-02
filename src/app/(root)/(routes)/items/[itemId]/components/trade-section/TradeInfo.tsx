import Image from 'next/image'
import Badge from '@/components/ui/Badge'
import Assets from '@/config/assets'

const TradeInfo = () => {
  return (
    <div className="flex flex-row items-center">
      <Image src={Assets.moneyIcon} alt="infoImg" />
      <div className="text-sm ml-2 font-normal">가격대</div>
      <Badge size={'lg'} variant={'primary'} className="ml-auto">
        30만원대
      </Badge>
    </div>
  )
}

export default TradeInfo
