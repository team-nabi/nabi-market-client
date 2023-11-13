import Image from 'next/image'
import Badge from '@/components/ui/Badge'
import Assets from '@/config/assets'

type TradeInfoProps = {
  title: string
  content: string
  variant: 'primary' | 'information'
}

const TradeInfo = ({ title, content, variant }: TradeInfoProps) => {
  return (
    <div className="flex flex-row items-center">
      <Image src={Assets.moneyIcon} alt="infoImg" />
      <div className="ml-2 text-sm font-normal">{title}</div>
      <Badge size={'lg'} variant={variant} className="ml-auto">
        {content}
      </Badge>
    </div>
  )
}

export default TradeInfo
