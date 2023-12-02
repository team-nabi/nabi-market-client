'use client'

import { useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import Cookies from 'js-cookie'
import { usePathname, useRouter } from 'next/navigation'
import AppPath from '@/config/appPath'
import { Environment } from '@/config/environment'
import apiClient from '@/services/apiClient'
import { getValidateUser, reissueAccessToken } from '@/services/auth/auth'
import type { User } from '@/types/user'
import { useToast } from './useToast'

const useValidate = () => {
  const router = useRouter()
  const { toast } = useToast()
  const pathname = usePathname()

  const accessToken = Cookies.get(Environment.tokenName())
  const refreshToken = Cookies.get(Environment.refreshTokenName())

  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(() => !!accessToken)
  const [currentUser, setCurrentUser] = useState<User | null>(() => null)

  const handleTokenRefresh = ({
    token,
    expiresInHours = 1,
  }: {
    token: string
    expiresInHours?: number
  }) => {
    let expiry = new Date()
    expiry.setHours(expiry.getHours() + expiresInHours)
    Cookies.set(Environment.tokenName(), token, { expires: expiry })
    return token
  }

  const validateUserQuery = useQuery({
    queryKey: ['validate', accessToken],
    queryFn: async () => {
      const token = accessToken
      if (token) {
        apiClient.setDefaultHeader('Authorization', token)
        return getValidateUser()
      }
      throw new Error('No token found')
    },
    enabled: !!accessToken,
    throwOnError: false,
  })

  const reissueTokenQuery = useQuery({
    queryKey: ['reissueAccessToken', refreshToken],
    queryFn: async () => {
      if (refreshToken) {
        return reissueAccessToken({ refreshToken })
      }
      throw new Error('No refresh token found')
    },
    enabled: !!refreshToken && (validateUserQuery.isError || !accessToken),
    throwOnError: false,
  })

  const updateLoginState = (userInfo: User) => {
    setCurrentUser(() => userInfo)
    setIsLoggedIn(() => !!userInfo)
    window.location.reload()
  }

  useEffect(() => {
    if (validateUserQuery.isError) {
      Cookies.remove(Environment.tokenName())
      if (!refreshToken || reissueTokenQuery.isError) {
        router.push(AppPath.login(), { scroll: false })
        toast({
          title: '인증 에러',
          description: '만료되거나 잘못된 토큰입니다. 다시 로그인해주세요.',
          variant: 'destructive',
          duration: 3000,
        })
      } else if (reissueTokenQuery.data?.data?.accessToken) {
        handleTokenRefresh({
          token: reissueTokenQuery.data.data.accessToken,
        })
        updateLoginState(validateUserQuery.data?.data?.userInfo)
      }
    }

    if (!accessToken && !!refreshToken) {
      if (reissueTokenQuery.data?.data?.accessToken) {
        handleTokenRefresh({
          token: reissueTokenQuery.data.data.accessToken,
        })
        updateLoginState(validateUserQuery.data?.data?.userInfo)
      }
    }

    if (validateUserQuery.data?.data?.userInfo) {
      const userInfo = validateUserQuery.data.data.userInfo
      setCurrentUser(() => userInfo)
      setIsLoggedIn(() => !!userInfo)
    }
  }, [
    validateUserQuery.data?.data?.userInfo,
    reissueTokenQuery.data?.data.accessToken,
    router,
    pathname,
    toast,
    validateUserQuery.isError,
    accessToken,
    refreshToken,
    reissueTokenQuery.isError,
  ])

  return { isLoggedIn, currentUser }
}

export default useValidate
