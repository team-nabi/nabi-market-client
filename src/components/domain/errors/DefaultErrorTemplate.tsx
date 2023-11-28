'use client'

import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import Button from '@/components/ui/button'
import AppPath from '@/config/appPath'
import Assets from '@/config/assets'

type DefaultErrorTemplateProps = {
  onClickButton: () => void
}

const DefaultErrorTemplate = ({ onClickButton }: DefaultErrorTemplateProps) => {
  const router = useRouter()

  const onClickHomeButton = () => {
    router.push(AppPath.home())
  }

  return (
    <div className="relative flex flex-col justify-center w-3/4 gap-10 p-8 mx-auto h-page">
      <Image alt="no-data" src={Assets.noDataIcon} className="w-3/4 mx-auto" />
      <span className="mx-auto text-3xl font-bold text-primary-color">
        알 수 없는 오류가 발생했습니다.
      </span>
      <div className="flex flex-col w-full gap-4">
        <Button
          variant={'gradation'}
          className="h-10 transition-all text-md hover:brightness-90"
          onClick={onClickButton}
        >
          다시 시도하기
        </Button>
        <Button
          variant={'gradation'}
          className="h-10 transition-all text-md hover:brightness-90"
          onClick={onClickHomeButton}
        >
          홈으로 이동하기
        </Button>
      </div>
    </div>
  )
}

export default DefaultErrorTemplate
