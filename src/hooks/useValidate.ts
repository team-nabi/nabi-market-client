'use client'

import { useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import Cookies from 'js-cookie'
import { usePathname } from 'next/navigation'
import { Environment } from '@/config/environment'
import { getValidateUser } from '@/services/auth/auth'
import type { User } from '@/types'

const useValidate = () => {
  const token = Cookies.get(Environment.tokenName())
  const pathname = usePathname()

  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(!!token)
  const [currentUser, setCurrentUser] = useState<User | null>(null)

  const { data, isError } = useQuery({
    queryKey: ['validate', token],
    queryFn: async () => {
      const res = await getValidateUser(token)
      return await res.json()
    },
    enabled: !!token,
  })

  useEffect(() => {
    if (isError) {
      Cookies.remove(Environment.tokenName())
      setIsLoggedIn(() => false)
      setCurrentUser(() => null)
    }
    if (data) {
      setIsLoggedIn(() => true)
      setCurrentUser(() => data?.data?.userInfo)
    }
  }, [currentUser, data, isError, isLoggedIn, pathname, token])

  return { isLoggedIn, currentUser }
}

export default useValidate
