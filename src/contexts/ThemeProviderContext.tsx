'use client'

import { useEffect, useState } from 'react'
import { ThemeProvider } from 'next-themes'

type ThemeProviderContextProps = {
  children: React.ReactNode
}

const ThemeProviderContext = ({ children }: ThemeProviderContextProps) => {
  const [mounted, setMounted] = useState<boolean>(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <ThemeProvider attribute="data-theme">{mounted && children}</ThemeProvider>
  )
}

export default ThemeProviderContext
