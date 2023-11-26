'use client'

import { useState } from 'react'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

type TanstackQueryContextProps = {
  children: React.ReactNode
}

const TanstackQueryGlobalConfig = {
  defaultOptions: {
    queries: {
      retry: 3,
      retryDelay: 1000,
      staleTime: 60000,
      cacheTime: 600000,
    },
  },
}

function TanstackQueryContext({ children }: TanstackQueryContextProps) {
  const [queryClient] = useState(
    () => new QueryClient(TanstackQueryGlobalConfig),
  )

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </QueryClientProvider>
  )
}

export default TanstackQueryContext
