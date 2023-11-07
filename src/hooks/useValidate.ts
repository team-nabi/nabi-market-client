'use client'

import { useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import Cookies from 'js-cookie'
import { usePathname } from 'next/navigation'
import { Environment } from '@/config/environment'
import { getValidateUser } from '@/services/auth/auth'

const useValidate = () => {
  const token = Cookies.get(Environment.tokenName())
  const pathname = usePathname()

  const [isLoggedIn, setIsLoggedIn] = useState(!!token)
  const [currentUser, setCurrentUser] = useState(undefined)

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
      setCurrentUser(() => undefined)
    }
    if (data) {
      setIsLoggedIn(() => true)
      setCurrentUser(() => data?.data?.userInfo)
    }
  }, [currentUser, data, isError, isLoggedIn, pathname, token])

  return { isLoggedIn, currentUser }
}

export default useValidate
