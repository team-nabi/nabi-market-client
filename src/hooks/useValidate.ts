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

  const getToken = () => Cookies.get(Environment.tokenName())
  const getRefreshToken = () => Cookies.get(Environment.refreshTokenName())

  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(() => !!getToken())
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
  }

  const validateUserQuery = useQuery({
    queryKey: ['validate', getToken()],
    queryFn: async () => {
      const token = getToken()
      if (token) {
        apiClient.setDefaultHeader('Authorization', token)
        return getValidateUser()
      }
      throw new Error('No token found')
    },
    enabled: !!getToken(),
    throwOnError: false,
  })

  const reissueTokenQuery = useQuery({
    queryKey: ['reissueAccessToken', getRefreshToken()],
    queryFn: async () => {
      const refreshToken = getRefreshToken()
      if (refreshToken) {
        return reissueAccessToken({ refreshToken })
      }
      throw new Error('No refresh token found')
    },
    enabled: !!getRefreshToken() && (validateUserQuery.isError || !getToken()),
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
      if (!getRefreshToken() || reissueTokenQuery.isError) {
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

    if (!getToken() && !!getRefreshToken()) {
      if (reissueTokenQuery.data?.data?.accessToken) {
        handleTokenRefresh({
          token: reissueTokenQuery.data.data.accessToken,
        })
        updateLoginState(validateUserQuery.data?.data?.userInfo)
      }
    }
  }, [validateUserQuery, reissueTokenQuery, router, pathname, toast])

  return { isLoggedIn, currentUser }
}

export default useValidate
