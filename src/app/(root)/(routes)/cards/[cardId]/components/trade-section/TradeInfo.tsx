import Image, { StaticImageData } from 'next/image'
import Badge from '@/components/ui/badge'

type TradeInfoProps = {
  title: string
  content: string
  variant: 'primary' | 'information'
  icon: StaticImageData
}

const TradeInfo = ({ title, content, variant, icon }: TradeInfoProps) => {
  return (
    <div className="flex flex-row items-center">
      <Image src={icon} alt="infoImg" sizes="24px" />
      <div className="ml-2 text-sm font-normal">{title}</div>
      <Badge size={'lg'} variant={variant} className="ml-auto">
        {content === '' ? '미입력' : content}
      </Badge>
    </div>
  )
}

export default TradeInfo
