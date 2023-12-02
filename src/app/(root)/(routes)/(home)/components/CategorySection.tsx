import Image from 'next/image'
import Link from 'next/link'
import AppPath from '@/config/appPath'
import { CATEGORY_BUTTON_LIST } from '@/constants/card'
import { TYPOGRAPHY } from '@/styles/sizes'

const CategorySection = () => {
  return (
    <div className="grid items-center w-full grid-cols-5 gap-y-4">
      {CATEGORY_BUTTON_LIST.map((v) => (
        <Link
          key={v.key}
          className="flex flex-col gap-2 h-[61px] w-auto justify-center items-center"
          href={
            v.key === 'ALL_CARD'
              ? `${AppPath.cards()}`
              : `${AppPath.cards()}?category=${v.key}`
          }
        >
          <Image
            className="w-8 h-8"
            alt={`category-${v.key}`}
            src={v.image}
            quality={50}
            sizes="32px"
            loading="eager"
          />
          <p className={` w-max ${TYPOGRAPHY.description}`}>{v.value}</p>
        </Link>
      ))}
    </div>
  )
}

export default CategorySection
