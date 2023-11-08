'use client'

import React, { useState } from 'react'
import AvatarEditable from '@/components/domain/AvatarEditable'
import { putUserProfile } from '@/services/user/user'

const UserInfo = () => {
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

  return (
    <div>
      <AvatarEditable
        fileChangeHandler={fileChangeHandler}
        changedSuccessfully={isProfileChanged}
      />
    </div>
  )
}

export default UserInfo
