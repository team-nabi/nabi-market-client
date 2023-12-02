import Image from 'next/image'
import Button from '@/components/ui/button'
import Assets from '@/config/assets'
import { cn } from '@/utils'

type NoDataProps = {
  title: string
  onClickButton?: () => void
  buttonContent: string
  position?: boolean
}
const NoData = ({
  title,
  onClickButton,
  buttonContent,
  position = true,
}: NoDataProps) => {
  return (
    <figure
      className={cn(
        'flex flex-col gap-4 justify-center items-center w-[80%] max-h-[300px] mx-auto',
        position &&
          'absolute top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%]',
      )}
    >
      <Image alt="no-data" src={Assets.noDataIcon} className="w-[80%]" />
      <div className="text-[20px]">{title}</div>
      <Button variant={'gradation'} size={'default'} onClick={onClickButton}>
        {buttonContent}
      </Button>
    </figure>
  )
}

export default NoData
