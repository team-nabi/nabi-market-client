import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'

const meta = {
  title: 'UI/button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Normal: Story = {
  args: {
    children: 'button',
    variant: 'default',
  },
}

export const Disabled: Story = {
  args: {
    children: 'button',
    disabled: true,
  },
}
