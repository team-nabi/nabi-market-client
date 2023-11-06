import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import AppPath from './config/appPath'
import { Environment } from './config/environment'
import { getValidateUser } from './services/auth/auth'

export async function middleware(request: NextRequest) {
  const cookie = request.cookies.get(Environment.tokenName())
  const token = cookie?.value

  if (!token) {
    return NextResponse.redirect(new URL(AppPath.login(), request.url))
  }

  try {
    const res = await getValidateUser(token)
    if (res?.status === 401) {
      request.cookies.delete(Environment.tokenName())
      return NextResponse.redirect(new URL(AppPath.login(), request.url))
    }
    if (res?.status === 200) {
      const data = await res?.json()
      console.log(data)
      return NextResponse.next()
    }
    if (res?.status === 404) {
      console.log('잘못된 요청입니다.')
      return NextResponse.redirect(new URL(AppPath.home(), request.url))
    }
  } catch (e) {
    console.log(e)
  }

  return NextResponse.next()
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/test-auth-only'],
}
