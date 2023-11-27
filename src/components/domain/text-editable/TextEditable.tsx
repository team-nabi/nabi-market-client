'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Button from '@/components/ui/button'
import Input from '@/components/ui/input'
import Assets from '@/config/assets'
import { cn } from '@/utils'

type TextEditablePropsType = {
  onChangeHandler: (_text: string) => void
  changedSuccessfully: boolean
  defaultText?: string
}

const TextEditable = ({
  onChangeHandler,
  changedSuccessfully,
  defaultText = '닉네임',
}: TextEditablePropsType) => {
  const [isEditing, setIsEditing] = useState(false)
  const [value, setValue] = useState(defaultText)

  useEffect(() => {
    console.log('이름', defaultText)
    if (!changedSuccessfully) {
      setValue(() => defaultText)
    }
  }, [changedSuccessfully, defaultText])

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }

  return (
    <div className="relative flex flex-row items-center justify-center gap-1">
      <Input
        border={isEditing ? 'bottom' : 'none'}
        disabled={!isEditing}
        value={value}
        className="overflow-hidden text-center cursor-default w-fit line-clamp-1"
        onChange={onChangeInput}
      />
      <Button
        onClick={() => {
          if (isEditing) {
            onChangeHandler(value)
          }
          setIsEditing((prev) => !prev)
        }}
        variant={isEditing ? 'primary' : null}
        size={isEditing ? 'sm' : 'icon_sm'}
        className={cn(!isEditing && 'absolute right-0 cursor-pointer')}
        asChild
      >
        {isEditing ? (
          <span className="break-keep">완료</span>
        ) : (
          <Image
            src={Assets.editIcon}
            className="bg-background-color"
            alt={'edit-text'}
          />
        )}
      </Button>
    </div>
  )
}

export default TextEditable
