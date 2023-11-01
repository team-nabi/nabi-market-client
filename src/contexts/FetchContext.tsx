'use client'

import React, { ReactNode, createContext, useContext, useMemo } from 'react'
import FetchAPI from '@/lib/fetchAPI'

const FetchContext = createContext<{ api: FetchAPI }>({ api: {} as FetchAPI })

export const FetchProvider = ({ children }: { children: ReactNode }) => {
  const api = FetchAPI.getInstance()

  const contextValue = useMemo(() => ({ api }), [api])

  return (
    <FetchContext.Provider value={contextValue}>
      {children}
    </FetchContext.Provider>
  )
}

export const useApiClient = () => {
  const context = useContext(FetchContext)
  if (!context) {
    throw new Error('useApiClient must be used within a FetchProvider')
  }
  return context
}
