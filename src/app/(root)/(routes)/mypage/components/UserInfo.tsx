'use client'

import React, { useState } from 'react'
import AvatarEditable from '@/components/domain/avatar-editable'
import TextEditable from '@/components/domain/text-editable'
import { useToast } from '@/hooks/useToast'
import { postImageFile } from '@/services/images'
import { putUserNickname, putUserProfile } from '@/services/user/user'
import { User } from '@/types/user'

type UserInfoProps = {
  user: User
}

const UserInfo = ({ user }: UserInfoProps) => {
  const { toast } = useToast()
  const [isProfileChanged, setIsProfileChanged] = useState(true)
  const [isNicknameChanged, setIsNicknameChanged] = useState(true)

  const fileChangeHandler = async (file: File) => {
    setIsProfileChanged(true)
    try {
      const resUpload = await postImageFile(file)
      const resProfile = await putUserProfile(resUpload.data)
      window.location.reload()
      return resProfile.data
    } catch (error) {
      setIsProfileChanged(false)
      console.log(error)
      toast({
        title: '프로필 이미지 변경 실패',
        description: '프로필 이미지 변경에 실패했습니다.',
        variant: 'destructive',
      })
    }
  }

  const nicknameChangeHandler = async (nickname: string) => {
    setIsNicknameChanged(true)
    try {
      const res = await putUserNickname(nickname)
      window.location.reload()
      return res.data
    } catch (error) {
      setIsNicknameChanged(false)
      console.log(error)
      toast({
        title: '닉네임 변경 실패',
        description: '닉네임 변경에 실패했습니다.',
        variant: 'destructive',
      })
    }
  }

  return (
    //TODO: 제출 하고 응답 받는 동안 로딩 처리 또는 비활성화 처리
    <div className="flex flex-col items-center gap-2">
      <AvatarEditable
        fileChangeHandler={fileChangeHandler}
        changedSuccessfully={isProfileChanged}
        defaultImage={user?.imageUrl}
      />
      <TextEditable
        onChangeHandler={nicknameChangeHandler}
        changedSuccessfully={isNicknameChanged}
        defaultText={user?.nickname}
      />
    </div>
  )
}

export default UserInfo
