import Image from 'next/image'
import Button from '@/components/ui/Button'
import Assets from '@/config/assets'

type DibsProps = {
  count: number
}
const Dibs = ({ count }: DibsProps) => {
  return (
    <div className="flex flex-row gap-0 items-center ml-auto">
      <Button size="icon_sm" variant={null}>
        <Image src={Assets.heartIcon} alt="dibs" />
      </Button>
      <p className="ml-1">{count}</p>
    </div>
  )
}

export default Dibs
