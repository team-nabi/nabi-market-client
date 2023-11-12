import React from 'react'
import Image from 'next/image'
import Button from '@/components/ui/Button'
import Assets from '@/config/assets'
import { cn } from '@/utils'

type ImageBlockType = {
  imageSrc: string
  isDeletable?: boolean
  onDeleteHandler?: () => void
}

const ImageBlock = ({
  imageSrc,
  onDeleteHandler,
  isDeletable = false,
}: ImageBlockType) => {
  return (
    <figure className="relative w-20 h-20 border rounded-lg border-1">
      <DeleteButton onClickButton={onDeleteHandler} visible={isDeletable} />
      <Image
        src={imageSrc}
        alt={'image'}
        layout="fill"
        className="rounded-lg"
      />
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
