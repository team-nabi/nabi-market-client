'use client'

import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import Button from '@/components/ui/button'
import AppPath from '@/config/appPath'
import Assets from '@/config/assets'

type ForbiddenErrorTemplateProps = {
  onClickButton: () => void
}

const ForbiddenErrorTemplate = ({
  onClickButton,
}: ForbiddenErrorTemplateProps) => {
  const router = useRouter()

  const onClickHomeButton = () => {
    router.push(AppPath.home())
  }

  return (
    <div className="relative flex flex-col justify-center w-3/4 gap-10 p-8 mx-auto h-page">
      <Image alt="no-data" src={Assets.noDataIcon} className="w-3/4 mx-auto" />
      <span className="mx-auto text-2xl font-bold text-primary-color">
        해당 컨텐츠에 접근할 권한이 없습니다.
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

export default ForbiddenErrorTemplate
