'use client'

import React, { useState } from 'react'
import AvatarEditable from '@/components/domain/avatar-editable'
import TextEditable from '@/components/domain/text-editable'
import { useAuth } from '@/contexts/AuthProvider'
import { putUserNickname, putUserProfile } from '@/services/user/user'

const UserInfo = () => {
  const { currentUser } = useAuth()
  const [isProfileChanged, setIsProfileChanged] = useState(true)
  const [isNicknameChanged, setIsNicknameChanged] = useState(true)

  const fileChangeHandler = async (file: File) => {
    setIsProfileChanged(true)
    try {
      const _data = await putUserProfile({ file: file })
    } catch (error) {
      setIsProfileChanged(false)
      console.log(error)
      // TODO: toast error message 추가
    }
  }

  const nicknameChangeHandler = async (nickname: string) => {
    setIsNicknameChanged(true)
    try {
      const _data = await putUserNickname(nickname)
    } catch (error) {
      setIsNicknameChanged(false)
      console.log(error)
      //TODO: toast error message 추가
    }
  }

  return (
    //TODO: 제출 하고 응답 받는 동안 로딩 처리 또는 비활성화 처리
    <div className="flex flex-col items-center gap-2">
      <AvatarEditable
        fileChangeHandler={fileChangeHandler}
        changedSuccessfully={isProfileChanged}
        defaultImage={currentUser?.imageUrl}
      />
      <TextEditable
        onChangeHandler={nicknameChangeHandler}
        changedSuccessfully={isNicknameChanged}
        defaultText={currentUser?.nickname}
      />
    </div>
  )
}

export default UserInfo
