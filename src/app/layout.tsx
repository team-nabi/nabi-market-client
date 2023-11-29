import type { Metadata, Viewport } from 'next'
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
  metadataBase: new URL(Environment.currentAddress()),
  openGraph: {
    title: '물물교환 플랫폼, 나비장터',
    description:
      '나비장터를 통해서 필요없는 물건을 비슷한 가치의 물건과 교환해보세요.',
    url: Environment.currentAddress(),
    type: 'website',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1.0,
  maximumScale: 1.0,
  minimumScale: 1.0,
  userScalable: false,
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
