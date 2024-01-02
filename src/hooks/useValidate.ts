'use client'

import { useCallback, useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'
import Cookies from 'js-cookie'
import { usePathname, useRouter } from 'next/navigation'
import AppPath from '@/config/appPath'
import { Environment } from '@/config/environment'
import apiClient from '@/services/apiClient'
import { getValidateUser, reissueAccessToken } from '@/services/auth/auth'
import { useToast } from './useToast'

const useValidate = () => {
  const router = useRouter()
  const pathname = usePathname()
  const { toast } = useToast()

  const accessToken = Cookies.get(Environment.tokenName())
  const refreshToken = Cookies.get(Environment.refreshTokenName())

  const validateUserQuery = useQuery({
    queryKey: ['validate', accessToken],
    queryFn: async () => {
      if (!accessToken) {
        throw new Error('No token found')
      }
      apiClient.setDefaultHeader('Authorization', accessToken)
      return getValidateUser()
    },
    enabled: !!accessToken,
    throwOnError: false,
  })

  const reissueTokenQuery = useQuery({
    queryKey: ['reissueAccessToken', refreshToken],
    queryFn: async () => {
      if (!refreshToken) {
        throw new Error('No refresh token found')
      }
      return reissueAccessToken({ refreshToken })
    },
    enabled: !!refreshToken && (validateUserQuery.isError || !accessToken),
    throwOnError: false,
  })

  /**
   *
   * @description 재발급 된 토큰을 쿠키에 저장합니다.
   */
  const handleTokenRefresh = ({
    token,
    expiresInHours = 1,
  }: {
    token?: string
    expiresInHours?: number
  }) => {
    if (!token) return
    let expiry = new Date()
    expiry.setHours(expiry.getHours() + expiresInHours)
    Cookies.set(Environment.tokenName(), token, { expires: expiry })
    window.location.reload()
  }

  const showAuthErrorToast = useCallback(() => {
    toast({
      title: '인증 에러',
      description: '만료되거나 잘못된 토큰입니다. 다시 로그인해주세요.',
      variant: 'destructive',
      duration: 3000,
    })
  }, [toast])

  /**
   * @description: 세션 만료시 로그인 페이지로 이동합니다.
   * @description: 리프레시 토큰까지 만료되었을 경우
   */
  const handleSessionExpiration = useCallback(() => {
    Cookies.remove(Environment.tokenName())
    router.push(AppPath.login(), { scroll: false })
    showAuthErrorToast()
  }, [router, showAuthErrorToast])

  /**
   * @description: 토큰 재발급이 필요한 경우, 재발급 후 새로고침합니다.
   * @description: 리프레시 토큰까지 만료되었을 경우 handleSessionExpiration 실행
   */
  const refreshTokenIfNeeded = useCallback(async () => {
    if (!refreshToken || reissueTokenQuery.isError) {
      handleSessionExpiration()
    } else if (reissueTokenQuery.data?.data?.accessToken) {
      const newToken = reissueTokenQuery.data.data.accessToken
      handleTokenRefresh({ token: newToken })
    }
  }, [
    refreshToken,
    reissueTokenQuery.isError,
    reissueTokenQuery.data?.data.accessToken,
    handleSessionExpiration,
  ])

  useEffect(() => {
    if (validateUserQuery.isError) {
      refreshTokenIfNeeded()
    }
  }, [validateUserQuery.isError, refreshTokenIfNeeded])

  useEffect(() => {
    if (!accessToken && refreshToken) {
      handleTokenRefresh({ token: reissueTokenQuery?.data?.data.accessToken })
    }
  }, [
    accessToken,
    refreshToken,
    reissueTokenQuery?.data?.data.accessToken,
    pathname,
  ])

  return {
    isLoggedIn: !!accessToken,
    currentUser: validateUserQuery?.data?.data.userInfo,
  }
}

export default useValidate
