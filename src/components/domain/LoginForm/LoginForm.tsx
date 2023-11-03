'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import AppPath from '@/config/appPath'
import Assets from '@/config/assets'
import { getGoogleLogin, getKakaoLogin } from '@/services/auth/auth'
import LoginButtons from './section/LoginButtons'

const LoginForm = () => {
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
    <section className="flex flex-col items-center justify-center w-full h-full gap-4">
      <Image className="mb-20" src={Assets.logo} alt="nabi-logo" />
      <LoginButtons
        kakaoLoginHandler={kakaoLoginHandler}
        googleLoginHandler={googleLoginHandler}
      />
    </section>
  )
}

export default LoginForm
