'use client'

import React from 'react'
import { KakaoLoginButton, GoogleLoginButton } from '../../buttons/LoginButtons'

const LoginButtons = () => {
  return (
    <section className="flex flex-col gap-2">
      <KakaoLoginButton onClickButton={() => alert('k')} />
      <GoogleLoginButton onClickButton={() => alert('g')} />
    </section>
  )
}

export default LoginButtons
