import React from 'react'
import ImageUploader from '@/components/domain/ImageUploader'
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/Form'

const ItemImageUploader = () => {
  return (
    <FormField
      name="images"
      render={({ field }) => (
        <FormItem>
          <div className="flex flex-row items-center gap-2 ">
            <FormMessage />
          </div>
          <FormControl>
            <ImageUploader onFilesChanged={field.onChange} />
          </FormControl>
        </FormItem>
      )}
    />
  )
}

export default ItemImageUploader
