import type { Meta, StoryObj } from '@storybook/react'
import TextEditable from './TextEditable'

const meta = {
  title: 'DOMAIN/TextEditable',
  component: TextEditable,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof TextEditable>

export default meta
type Story = StoryObj<typeof meta>

export const Normal: Story = {
  args: {
    defaultText: 'text',
    changedSuccessfully: true,
    onChangeHandler: () => {
      alert('changed')
    },
  },
}
