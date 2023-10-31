import { Suspense } from 'react'
import type { Metadata } from 'next'
import Head from 'next/head'
import Header from '@/components/domain/Header'
import { FetchProvider } from '@/contexts/FetchContext'
import MSWWrapper from '@/contexts/MSWWrapper'
import TanstackQueryContext from '@/contexts/TanstackQueryContext'
import ThemeProviderContext from '@/contexts/ThemeProviderContext'
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: '나비장터',
  description: '물물교환 플랫폼 나비장터입니다.',
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
        <FetchProvider>
          <TanstackQueryContext>
            <MSWWrapper>
              <ThemeProviderContext>
                <Suspense>
                  <div className="centered-content">
                    <Header isLogin={false} />
                    {children}
                    {authModal}
                  </div>
                </Suspense>
              </ThemeProviderContext>
            </MSWWrapper>
          </TanstackQueryContext>
        </FetchProvider>
      </body>
    </html>
  )
}
