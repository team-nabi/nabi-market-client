'use client'

import React, { createContext, useMemo } from 'react'
import useValidate from '@/hooks/useValidate'

const AuthContext = createContext<{
  currentUser: any
  isLoggedIn: boolean
}>({
  currentUser: null,
  isLoggedIn: false,
})

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const { isLoggedIn, currentUser } = useValidate()

  const contextValue = useMemo(
    () => ({ isLoggedIn, currentUser }),
    [isLoggedIn, currentUser],
  )

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  )
}

const useAuth = () => {
  const context = React.useContext(AuthContext)
  if (context === undefined) {
    throw new Error(`useAuth must be used within a AuthProvider`)
  }
  return context
}

export default AuthProvider
export { useAuth }
