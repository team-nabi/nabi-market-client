import React from 'react'
import Image from 'next/image'
import Button from '@/components/ui/button'
import Assets from '@/config/assets'

const KakaoLoginButton = ({ onClickButton }: { onClickButton: () => void }) => {
  return (
    <Button
      onClick={onClickButton}
      className="relative h-10 text-black transition-all bg-kakao-color hover:brightness-90 w-80 hover:bg-kakao-color"
    >
      <Image
        className="absolute flex-shrink-0 left-3"
        src={Assets.kakaoIcon}
        alt="카카오 로그인"
      />
      카카오 계정으로 시작하기
    </Button>
  )
}

const GoogleLoginButton = ({
  onClickButton,
}: {
  onClickButton: () => void
}) => {
  return (
    <Button
      onClick={onClickButton}
      className="relative h-10 text-black transition-all bg-white border border-gray hover:brightness-90 w-80 hover:bg-white"
    >
      <Image
        className="absolute flex-shrink-0 left-3"
        src={Assets.googleIcon}
        alt="구글 로그인"
      />
      구글 계정으로 시작하기
    </Button>
  )
}

export { KakaoLoginButton, GoogleLoginButton }
