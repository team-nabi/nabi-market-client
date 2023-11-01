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

  if (!mounted) return null

  return <ThemeProvider attribute="data-theme">{children}</ThemeProvider>
}

export default ThemeProviderContext
