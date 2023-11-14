import type { Meta, StoryObj } from '@storybook/react'
import { Badge } from './Badge'

const meta = {
  title: 'UI/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Badge>

export default meta
type Story = StoryObj<typeof meta>

export const Normal: Story = {
  args: {
    variant: 'gradation',
    size: 'sm',
    children: '거래성사',
  },
}
