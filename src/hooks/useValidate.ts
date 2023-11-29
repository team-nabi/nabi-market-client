'use client'

import { useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import Cookies from 'js-cookie'
import { usePathname, useRouter } from 'next/navigation'
import AppPath from '@/config/appPath'
import { Environment } from '@/config/environment'
import apiClient from '@/services/apiClient'
import { getValidateUser } from '@/services/auth/auth'
import type { User } from '@/types/user'
import { useToast } from './useToast'

const useValidate = () => {
  const token = Cookies.get(Environment.tokenName())
  const router = useRouter()
  const pathname = usePathname()
  const { toast } = useToast()

  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(!!token)
  const [currentUser, setCurrentUser] = useState<User | null>(null)

  const { data, isError } = useQuery({
    queryKey: ['validate', token],
    queryFn: async () => {
      apiClient.setDefaultHeader('Authorization', `${token}`)
      const res = await getValidateUser()
      return res
    },
    retry: 1,
    enabled: !!token,
    throwOnError: false,
  })

  useEffect(() => {
    if (isError) {
      Cookies.remove(Environment.tokenName())
      router.push(AppPath.login(), { scroll: false })
      toast({
        title: '인증 에러',
        description: '만료되거나 잘못된 토큰입니다. 다시 로그인해주세요.',
        variant: 'destructive',
        duration: 3000,
      })
    }
    if (data) {
      setIsLoggedIn(() => true)
      setCurrentUser(() => data?.data?.userInfo)
    }
  }, [currentUser, data, isError, isLoggedIn, pathname, router, toast, token])

  return { isLoggedIn, currentUser }
}

export default useValidate
