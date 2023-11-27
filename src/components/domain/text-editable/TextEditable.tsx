'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Button from '@/components/ui/button'
import Input from '@/components/ui/input'
import Assets from '@/config/assets'
import { useToast } from '@/hooks/useToast'
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
  const { toast } = useToast()

  useEffect(() => {
    if (!changedSuccessfully) {
      setValue(() => defaultText)
    }
  }, [changedSuccessfully, defaultText])

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }

  const onSubmit = () => {
    if (isEditing) {
      if (value.length < 2) {
        toast({
          title: '닉네임 변경 실패',
          description: '닉네임은 2자 이상 입력해주세요.',
          variant: 'destructive',
        })
        return
      }
      if (value.length > 20) {
        toast({
          title: '닉네임 변경 실패',
          description: '닉네임은 20자까지 입력해주세요.',
          variant: 'destructive',
        })
        return
      }
      onChangeHandler(value)
    }
    setIsEditing((prev) => !prev)
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
        onClick={onSubmit}
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
