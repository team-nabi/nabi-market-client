import type { Meta, StoryObj } from '@storybook/react'
import {
  DEFAULT_ITEM_THUMBNAIL_IMG,
  DEFAULT_PROFILE_IMG,
} from '@/constants/image'
import ImageUploader from './ImageUploader'

const meta = {
  title: 'DOMAIN/ImageUploader',
  component: ImageUploader,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof ImageUploader>

export default meta
type Story = StoryObj<typeof meta>

export const Normal: Story = {
  args: {
    onFilesChanged: () => {},
    defaultImages: [DEFAULT_ITEM_THUMBNAIL_IMG, DEFAULT_PROFILE_IMG],
  },
}
