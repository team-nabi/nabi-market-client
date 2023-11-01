'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import AppPath from '@/config/appPath'
import { getGoogleLogin, getKakaoLogin } from '@/services/auth/auth'
import { KakaoLoginButton, GoogleLoginButton } from '../../buttons/LoginButtons'

const LoginButtons = () => {
  const router = useRouter()
  const kakaoLoginHandler = async () => {
    try {
      await getKakaoLogin()
      const res = await getKakaoLogin()
      const data = await res.json()
      console.log(data)
      alert('로그인 성공')
      router.back()
    } catch (e) {
      console.log(e)
      alert('로그인 실패')
      router.push(AppPath.login(), { scroll: false })
    }
  }
  const googleLoginHandler = async () => {
    try {
      await getKakaoLogin()
      const res = await getGoogleLogin()
      const data = await res.json()
      console.log(data)
      alert('로그인 성공')
      router.back()
    } catch (e) {
      console.log(e)
      alert('로그인 실패')
      router.push(AppPath.login(), { scroll: false })
    }
  }

  return (
    <section className="flex flex-col gap-2">
      <KakaoLoginButton onClickButton={kakaoLoginHandler} />
      <GoogleLoginButton onClickButton={googleLoginHandler} />
    </section>
  )
}

export default LoginButtons
