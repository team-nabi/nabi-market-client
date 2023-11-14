import type { Meta, StoryObj } from '@storybook/react'
import AvatarEditable from './AvatarEditable'

const meta = {
  title: 'DOMAIN/AvatarEditable',
  component: AvatarEditable,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof AvatarEditable>

export default meta
type Story = StoryObj<typeof meta>

export const Normal: Story = {
  args: {
    fileChangeHandler: (file) => {
      alert(file.name)
    },
    changedSuccessfully: true,
  },
}
