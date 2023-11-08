'use client'

import React, { ChangeEvent, useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/Avatar'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import Assets from '@/config/assets'

interface EditButtonProps extends React.HTMLAttributes<HTMLInputElement> {
  onChangeHandler: (_event: ChangeEvent<HTMLInputElement>) => void
}

type AvatarEditablePropsType = {
  fileChangeHandler: (_file: File) => void
  changedSuccessfully: boolean
}

const AvatarEditable = ({
  fileChangeHandler,
  changedSuccessfully,
}: AvatarEditablePropsType) => {
  const [profileImage, setProfileImage] = useState<string | null>(null)

  useEffect(() => {
    if (!changedSuccessfully) {
      setProfileImage(() => null)
    }
  }, [changedSuccessfully])

  const onClickEdit = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()

    if (event.target.files) {
      const file = event.target.files[0]
      const reader = new FileReader()
      fileChangeHandler(file)
      reader.onloadend = () => {
        setProfileImage(() => reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <figure className="relative w-24 h-24">
      <Avatar>
        <AvatarImage imgUrl={profileImage} />
        <AvatarFallback>profile</AvatarFallback>
      </Avatar>
      <EditButton onChangeHandler={onClickEdit} />
    </figure>
  )
}

const EditButton = ({ onChangeHandler }: EditButtonProps) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const onClickButton = () => {
    inputRef.current?.click()
  }

  return (
    <>
      <Button
        className="absolute bottom-0 right-0 w-8 h-8 rounded-full bg-background-secondary-color hover:brightness-90"
        onClick={onClickButton}
        variant={null}
        size={'icon'}
      >
        <Image src={Assets.editIcon} alt={'edit button'} />
      </Button>
      <Input
        ref={inputRef}
        className="invisible"
        type="file"
        accept="image/*"
        onChange={onChangeHandler}
      />
    </>
  )
}

export default AvatarEditable
