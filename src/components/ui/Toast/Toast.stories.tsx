import type { Meta, StoryObj } from '@storybook/react'
import { Toast } from './Toast'

const meta = {
  title: 'UI/Toast',
  component: Toast,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Toast>

export default meta
type Story = StoryObj<typeof meta>

export const Normal: Story = {
  args: {},
}

export const Disabled: Story = {
  args: {},
}
