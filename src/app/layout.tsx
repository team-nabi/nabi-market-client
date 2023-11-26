import type { Metadata } from 'next'
import NewCardButton from '@/components/domain/buttons/new-card-button'
import Header from '@/components/domain/header'
import { Toaster } from '@/components/ui/toast/Toaster'
import { Environment } from '@/config/environment'
import AuthProvider from '@/contexts/AuthProvider'
import MSWWrapper from '@/contexts/MSWWrapper'
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

export default async function RootLayout({
  children,
  authModal,
}: Readonly<{
  children: React.ReactNode
  authModal: React.ReactNode
}>) {
  return (
    <html className="light" lang="ko">
      <body>
        <TanstackQueryContext>
          <ThemeProviderContext>
            <MSWWrapper>
              <AuthProvider>
                <div className="centered-content">
                  <Header />
                  {children}
                  {authModal}
                  <NewCardButton />
                </div>
                <Toaster />
              </AuthProvider>
            </MSWWrapper>
          </ThemeProviderContext>
        </TanstackQueryContext>
      </body>
    </html>
  )
}
