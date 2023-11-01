'use client'

import { useState, type PropsWithChildren, useEffect } from 'react'
import { Environment } from '@/config/environment'

const isMockingMode = Environment.apiMocking() === 'enabled'

const MSWComponent = ({ children }: PropsWithChildren) => {
  const [mswReady, setMSWReady] = useState(() => !isMockingMode)

  useEffect(() => {
    const init = async () => {
      if (isMockingMode) {
        const initMocks = await import('../lib/msw/initMockApi').then(
          (res) => res.initMockApi,
        )
        await initMocks()
        setMSWReady(true)
      }
    }

    if (!mswReady) {
      init()
    }
  }, [mswReady])

  if (!mswReady) return null

  return <>{children}</>
}

export default MSWComponent
