'use client'

import { useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import Cookies from 'js-cookie'
import { usePathname, useRouter } from 'next/navigation'
import AppPath from '@/config/appPath'
import { Environment } from '@/config/environment'
import { getValidateUser } from '@/services/auth/auth'
import type { User } from '@/types/user'

const useValidate = () => {
  const token = Cookies.get(Environment.tokenName())
  const router = useRouter()
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
    console.log(currentUser)
    if (isError) {
      Cookies.remove(Environment.tokenName())
      setIsLoggedIn(() => false)
      setCurrentUser(() => null)
      router.push(AppPath.login(), { scroll: false })
    }
    if (data) {
      setIsLoggedIn(() => true)
      setCurrentUser(() => data?.data?.userInfo)
    }
  }, [currentUser, data, isError, isLoggedIn, pathname, router, token])

  return { isLoggedIn, currentUser }
}

export default useValidate
