'use client'

import React, { useEffect } from 'react'
import Cookies from 'js-cookie'
import { useRouter } from 'next/navigation'
import AppPath from '@/config/appPath'
import { Environment } from '@/config/environment'
import { useToast } from '@/hooks/useToast'
import { User } from '@/types/user'

type RouteCallbackProps = {
  tokenResponse: {
    data: {
      userInfo: User
      token: {
        accessToken: string
        refreshToken: string
      }
    }
  } | null
}

const RouteCallback = ({ tokenResponse }: RouteCallbackProps) => {
  const { toast } = useToast()
  const router = useRouter()

  useEffect(() => {
    if (tokenResponse?.data) {
      let inHour = new Date()
      inHour.setHours(inHour.getHours() + 1)
      Cookies.set(
        Environment.tokenName(),
        tokenResponse?.data?.token?.accessToken,
        {
          expires: inHour,
        },
      )
      window.location.href = AppPath.home()
    } else if (tokenResponse === null) {
      router.push(AppPath.login(), { scroll: false })
      toast({
        title: '로그인 실패',
        description: '로그인에 실패하였습니다.',
        variant: 'destructive',
      })
    }
  }, [router, toast, tokenResponse])

  return <></>
}

export default RouteCallback
