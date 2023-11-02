'use client'

import React from 'react'
import { KakaoLoginButton, GoogleLoginButton } from '../../buttons/LoginButtons'

type LoginButtonsProps = {
  kakaoLoginHandler: () => void
  googleLoginHandler: () => void
}

const LoginButtons = ({
  kakaoLoginHandler,
  googleLoginHandler,
}: LoginButtonsProps) => {
  return (
    <section className="flex flex-col gap-2">
      <KakaoLoginButton onClickButton={kakaoLoginHandler} />
      <GoogleLoginButton onClickButton={googleLoginHandler} />
    </section>
  )
}

export default LoginButtons
