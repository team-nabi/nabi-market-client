'use client'

import { useState } from 'react'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'

type TanstackQueryContextProps = {
  children: React.ReactNode
}

function TanstackQueryContext({ children }: TanstackQueryContextProps) {
  const [queryClient] = useState(() => new QueryClient())

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}

export default TanstackQueryContext
