import Image from 'next/image'
import Assets from '@/config/assets'

const PageTitle = ({ title }: { title: string }) => {
  return (
    <div className="flex grid items-center justify-between w-full h-8 grid-cols-3 my-4">
      <Image
        src={Assets.arrowLeftIcon}
        alt="이전 아이콘"
        className="flex items-center justify-start"
      />
      <h2 className="flex items-center justify-center text-xl font-bold">
        {title}
      </h2>
      <div></div>
    </div>
  )
}
export default PageTitle
