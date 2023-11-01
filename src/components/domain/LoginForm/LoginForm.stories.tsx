import type { Meta, StoryObj } from '@storybook/react'
import LoginForm from './LoginForm'

const meta = {
  title: 'DOMAIN/LoginForm',
  component: LoginForm,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof LoginForm>

export default meta
type Story = StoryObj<typeof meta>

export const Normal: Story = {
  args: {},
}
