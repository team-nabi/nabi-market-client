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

  if (!mswReady) {
    return (
      <>
        <div>Mock Worker를 로딩하는 중입니다...</div>
        <div>해당 화면이 지속된다면 새로고침 해주세요.</div>
      </>
    )
  }

  return <>{children}</>
}

export default MSWComponent
