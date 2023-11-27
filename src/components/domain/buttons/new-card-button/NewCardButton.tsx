'use client'

import React from 'react'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import Button from '@/components/ui/button'
import AppPath from '@/config/appPath'
import Assets from '@/config/assets'
import { useAuth } from '@/contexts/AuthProvider'

const NewCardButton = () => {
  const router = useRouter()
  const path = usePathname()
  const { isLoggedIn } = useAuth()

  const onClickButton = () => {
    if (isLoggedIn) router.push(AppPath.newCard())
  }

  // TODO: 챗 페이지에서는 안보이게 처리
  if (!isLoggedIn || path === AppPath.newCard()) return <></>

  return (
    <Button
      className="fixed z-50 rounded-full right-8 bottom-8 hover:brightness-90"
      onClick={onClickButton}
      variant={'primary'}
      size={'icon'}
    >
      <Image src={Assets.plusIcon} alt="upload new card" />
    </Button>
  )
}

export default NewCardButton
