'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import Button from '@/components/ui/button'
import AppPath from '@/config/appPath'
import { CATEGORY_BUTTON_LIST } from '@/constants/card'
import { TYPOGRAPHY } from '@/styles/sizes'

const CategorySection = () => {
  const router = useRouter()

  const handleClick = (name: string) => {
    if (name === '') {
      router.push(`${AppPath.cards()}`)
    } else {
      router.push(`${AppPath.cards()}?category=${name}`)
    }
  }
  return (
    <div className="w-full  grid grid-cols-5 items-center gap-y-4">
      {CATEGORY_BUTTON_LIST.map((v) => (
        <Button
          key={v.name}
          variant={null}
          size={'icon_md'}
          className="flex flex-col gap-2 h-[61px] w-auto"
          onClick={() => handleClick(v.name)}
        >
          <Image className="w-8 h-8" alt={'category-image'} src={v.image} />
          <p className={` w-max ${TYPOGRAPHY.description}`}>{v.name}</p>
        </Button>
      ))}
    </div>
  )
}

export default CategorySection
