import Image from 'next/image'
import Button from '@/components/ui/button'
import Assets from '@/config/assets'

type NoDataProps = {
  title: string
  onClickButton?: () => void
  buttonContent: string
}
const NoData = ({ title, onClickButton, buttonContent }: NoDataProps) => {
  return (
    <figure className="flex flex-col gap-4 justify-center items-center w-[80%] mx-auto absolute top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%]">
      <Image alt="no-data" src={Assets.noDataIcon} className="w-[80%]" />
      <div className="text-[20px]">{title}</div>
      <Button variant={'gradation'} size={'default'} onClick={onClickButton}>
        {buttonContent}
      </Button>
    </figure>
  )
}

export default NoData
