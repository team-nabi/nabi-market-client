'use client'

import React, { useState } from 'react'
import Cookies from 'js-cookie'
import { Environment } from '@/config/environment'
import { MAX_IMAGE_NUMBER } from '@/constants/image'
import { useToast } from '@/hooks/useToast'
import { postImageFile } from '@/services/images'
import { isNotNull } from '@/utils/isNotNull'
import ImageBlock from './components/ImageBlock'
import UploadBlock from './components/UploadBlock'

type ImageUploaderPropsType = {
  onFilesChanged: (_imageUrls: string[]) => void
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

  async function uploadImages(files: FileList) {
    const uploadPromises = Array.from(files).map(async (file) => {
      try {
        const res = await postImageFile(file)
        return res.data
      } catch (e) {
        toast({
          title: '이미지 업로드 실패',
          description: '이미지 업로드에 실패했습니다. 다시 시도해주세요.',
        })
        return null
      }
    })

    const uploadedImages = await Promise.all(uploadPromises)

    const successfulUploads = uploadedImages
      .filter((imageUrl) => imageUrl != null)
      .map((imageUrl) => imageUrl)
      .filter(isNotNull)

    setImages((images) => [...images, ...successfulUploads])
    onFilesChanged([...images, ...successfulUploads])
  }

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

    uploadImages(files)
  }

  return (
    <div className="flex flex-row gap-2">
      <UploadBlock
        onUploadHandler={onUploadHandler}
        currentPhotoNumber={images.length}
        maxPhotoNumber={maxImageNumber}
      />
      {images.map((image, index) => {
        const isThumbnail = index === 0
        return (
          <ImageBlock
            key={image + index}
            imageSrc={image}
            isDeletable={isImageDeletable}
            isThumbnail={isThumbnail}
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
