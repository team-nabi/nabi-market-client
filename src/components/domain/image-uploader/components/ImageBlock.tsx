import React from 'react'
import Image from 'next/image'
import Button from '@/components/ui/button'
import Assets from '@/config/assets'
import { cn } from '@/utils'

type ImageBlockType = {
  imageSrc: string
  isDeletable?: boolean
  isThumbnail?: boolean
  onDeleteHandler?: () => void
}

const ImageBlock = ({
  imageSrc,
  onDeleteHandler,
  isDeletable = false,
  isThumbnail = false,
}: ImageBlockType) => {
  return (
    <figure className="relative w-20 h-20 border rounded-lg border-1">
      <DeleteButton onClickButton={onDeleteHandler} visible={isDeletable} />
      <Image
        src={imageSrc}
        alt={'image'}
        fill
        className="rounded-lg"
        quality={50}
        sizes="(max-width: 480px) 20vw, 78px"
      />
      {isThumbnail && (
        <figcaption className="absolute bottom-0 right-0 w-full p-1 text-xs text-center text-white rounded-b-lg bg-black/50">
          대표 사진
        </figcaption>
      )}
    </figure>
  )
}

const DeleteButton = ({
  onClickButton,
  visible,
}: {
  onClickButton?: () => void
  visible: boolean
}) => {
  return (
    <Button
      onClick={onClickButton}
      className={cn(
        !visible && 'invisible',
        'absolute -right-2 -top-2',
        'hover:brightness-90 hover:cursor-pointer z-50 bg-background-color rounded-full',
      )}
      size={'icon_sm'}
      variant={null}
      asChild
    >
      <Image src={Assets.xCircleIcon} alt={'delete-button'} />
    </Button>
  )
}

export default ImageBlock
