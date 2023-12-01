import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import AppPath from './config/appPath'
import { Environment } from './config/environment'
import { getValidateUser } from './services/auth/auth'

export async function middleware(request: NextRequest) {
  const cookie = request.cookies.get(Environment.refreshTokenName())
  const token = cookie?.value

  if (!token) {
    return NextResponse.redirect(new URL(AppPath.login(), request.url))
  }

  try {
    const res = await getValidateUser()

    if (res?.status === 401) {
      request.cookies.delete(Environment.tokenName())
      return NextResponse.redirect(new URL(AppPath.login(), request.url))
    }
    if (res?.status === 200) {
      return NextResponse.next()
    }
    if (res?.status === 404) {
      return NextResponse.redirect(new URL(AppPath.home(), request.url))
    }
  } catch (e) {
    console.log(e)
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/mypage',
    '/cards/:path/modify',
    '/cards/new',
    '/dibs',
    '/cards/my',
    '/notifications',
    '/suggestions/:path*',
    '/history',
    '/chatrooms',
    '/chatrooms/:path*',
  ],
}
