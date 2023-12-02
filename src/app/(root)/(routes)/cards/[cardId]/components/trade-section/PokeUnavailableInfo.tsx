import Image from 'next/image'
import Assets from '@/config/assets'

const PokeUnavailableInfo = () => {
  return (
    <div className="flex flex-col items-center justify-start gap-4 p-8">
      <Image
        width={200}
        height={200}
        alt="unavailable"
        src={Assets.unavailableIcon}
        sizes="200px"
      />
      <p className="text-sm font-normal">찔러보기가 허용되지 않은 물건입니다</p>
    </div>
  )
}

export default PokeUnavailableInfo
