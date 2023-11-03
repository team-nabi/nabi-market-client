import Image from 'next/image'
import Assets from '@/config/assets'

const PageTitle = ({ title }: { title: string }) => {
  return (
    <div className="flex grid items-center justify-between w-full grid-cols-3 h-8 my-4">
      <Image
        src={Assets.arrowLeftIcon}
        alt="이전 아이콘"
        className="flex justify-start items-center"
      />
      <h2 className="flex justify-center items-center text-xl font-bold">
        {title}
      </h2>
      <div></div>
    </div>
  )
}
export default PageTitle
