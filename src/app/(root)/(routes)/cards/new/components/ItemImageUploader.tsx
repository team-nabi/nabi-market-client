import React from 'react'
import ImageUploader from '@/components/domain/image-uploader'
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form'

const ItemImageUploader = ({
  defaultImages = [],
}: {
  defaultImages?: string[]
}) => {
  return (
    <FormField
      name="images"
      render={({ field }) => (
        <FormItem>
          <div className="flex flex-row items-center gap-2 ">
            <FormMessage />
          </div>
          <FormControl>
            <ImageUploader
              onFilesChanged={field.onChange}
              defaultImages={defaultImages}
            />
          </FormControl>
        </FormItem>
      )}
    />
  )
}

export default ItemImageUploader
