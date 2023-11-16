'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import AppPath from '@/config/appPath'
import Assets from '@/config/assets'
import LoginButtons from './components/LoginButtons'

const LoginForm = () => {
  const router = useRouter()
  const kakaoLoginHandler = async () => {
    router.push(AppPath.kakaoLogin())
  }
  const googleLoginHandler = async () => {
    router.push(AppPath.googleLogin())
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
