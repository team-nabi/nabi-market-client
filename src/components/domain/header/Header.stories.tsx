import type { Meta, StoryObj } from '@storybook/react'
import Header from './Header'

const meta = {
  title: 'DOMAIN/Header',
  component: Header,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof meta>

export const Normal: Story = {
  args: { isLogin: false },
}

export const Login: Story = {
  args: { isLogin: true },
}
