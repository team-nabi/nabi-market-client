import React, { useRef } from 'react'
import Image from 'next/image'
import Input from '@/components/ui/input'
import Assets from '@/config/assets'
import { TYPOGRAPHY } from '@/styles/sizes'
import { cn } from '@/utils'

type UploadBlockType = {
  onUploadHandler: (_e: React.ChangeEvent<HTMLInputElement>) => void
  currentPhotoNumber: number
  maxPhotoNumber: number
  isUploading: boolean
}

const UploadBlock = ({
  onUploadHandler,
  currentPhotoNumber = 0,
  maxPhotoNumber,
  isUploading,
}: UploadBlockType) => {
  const inputRef = useRef<HTMLInputElement>(null)

  const onClickBlock = () => {
    inputRef.current?.click()
  }

  return (
    <>
      <div
        className="relative flex justify-center w-20 h-20 align-middle border rounded-lg hover:cursor-pointer hover:brightness-90"
        onClick={onClickBlock}
      >
        <Image src={Assets.plusIcon} alt={'upload photo'} />
        <span
          className={cn(
            'absolute bottom-0 mx-auto',
            TYPOGRAPHY.description,
            'text-text-secondary-color',
          )}
        >
          {isUploading
            ? `업로드 중`
            : `${currentPhotoNumber}/${maxPhotoNumber}`}
        </span>
      </div>
      <Input
        ref={inputRef}
        type="file"
        accept="image/*"
        multiple={true}
        onChange={onUploadHandler}
        className="hidden"
      />
    </>
  )
}

export default UploadBlock
