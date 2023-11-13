'use client'

import React, { useState } from 'react'
import { MAX_IMAGE_NUMBER } from '@/constants/image'
import { useToast } from '@/hooks/useToast'
import ImageBlock from './components/ImageBlock'
import UploadBlock from './components/UploadBlock'

type ImageUploaderPropsType = {
  onFilesChanged: (_files: FileList) => void
  defaultImages?: string[]
  maxImageNumber?: number
  isImageDeletable?: boolean
}

const ImageUploader = ({
  onFilesChanged,
  defaultImages = [],
  maxImageNumber = MAX_IMAGE_NUMBER,
  isImageDeletable = true,
}: ImageUploaderPropsType) => {
  const { toast } = useToast()
  const [images, setImages] = useState<string[]>(defaultImages)

  const onUploadHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    const files = e.target.files

    if (!files) {
      return
    }

    if (images.length + files.length > maxImageNumber) {
      toast({
        title: '이미지 업로드 실패',
        description: `최대 ${maxImageNumber}개의 이미지를 업로드할 수 있습니다.`,
      })
      return
    }

    Array.from(files).forEach((file) => {
      const reader = new FileReader()
      reader.onloadend = () => {
        setImages((prevImages) => [...prevImages, reader.result as string])
      }
      reader.readAsDataURL(file)
    })

    onFilesChanged(files)
  }

  return (
    <div className="flex flex-row gap-2">
      <UploadBlock
        onUploadHandler={onUploadHandler}
        currentPhotoNumber={images.length}
        maxPhotoNumber={maxImageNumber}
      />
      {images.map((image, index) => {
        return (
          <ImageBlock
            key={image + index}
            imageSrc={image}
            isDeletable={isImageDeletable}
            onDeleteHandler={() => {
              setImages(images.filter((_, i) => i !== index))
            }}
          />
        )
      })}
    </div>
  )
}

export default ImageUploader
