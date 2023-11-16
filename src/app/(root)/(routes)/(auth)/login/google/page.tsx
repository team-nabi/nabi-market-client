import React from 'react'
import { escape } from 'querystring'
import { getGoogleRedirect } from '@/services/auth/auth'
import RouteCallback from '../components/RouteCallback'

type GoogleLoginRouteParams = {
  searchParams: { [key: string]: string | string[] | undefined }
}

async function getGoogleAccessToken(code: string) {
  try {
    const response = await getGoogleRedirect(escape(code))
    return response
  } catch (e) {
    console.log(e)
    return null
  }
}

const GoogleLoginRoute = async ({ searchParams }: GoogleLoginRouteParams) => {
  const code = searchParams.code
  const response = await getGoogleAccessToken(code as string)

  return <RouteCallback tokenResponse={response} />
}

export default GoogleLoginRoute
