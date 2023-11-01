import { Suspense } from 'react'
import type { Metadata } from 'next'
import Head from 'next/head'
import Header from '@/components/domain/Header'
import { Environment } from '@/config/environment'
import TanstackQueryContext from '@/contexts/TanstackQueryContext'
import ThemeProviderContext from '@/contexts/ThemeProviderContext'
import { initMockApi } from '@/lib/msw/initMockApi'
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: '나비장터',
  description: '물물교환 플랫폼 나비장터입니다.',
}

if (Environment.apiMocking() === 'enabled') {
  console.log('Mocking enabled')
  initMockApi()
}

export default function RootLayout({
  children,
  authModal,
}: {
  children: React.ReactNode
  authModal: React.ReactNode
}) {
  return (
    <html lang="ko">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <body>
        <TanstackQueryContext>
          <ThemeProviderContext>
            <Suspense>
              <div className="centered-content">
                <Header isLogin={false} />
                {children}
                {authModal}
              </div>
            </Suspense>
          </ThemeProviderContext>
        </TanstackQueryContext>
      </body>
    </html>
  )
}
