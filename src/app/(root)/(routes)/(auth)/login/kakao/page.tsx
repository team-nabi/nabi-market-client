import React from 'react'
import { escape } from 'querystring'
import { getKakaoRedirect } from '@/services/auth/auth'
import RouteCallback from '../components/RouteCallback'

type KakaoLoginRouteParams = {
  searchParams: { [key: string]: string | string[] | undefined }
}

async function getKakaoAccessToken(code: string) {
  try {
    const response = await getKakaoRedirect(escape(code))
    return response
  } catch (e) {
    console.log(e)
    return null
  }
}

const KakaoLoginRoute = async ({ searchParams }: KakaoLoginRouteParams) => {
  const code = searchParams.code
  const response = await getKakaoAccessToken(code as string)

  return <RouteCallback tokenResponse={response} />
}

export default KakaoLoginRoute
