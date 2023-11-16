import type { Meta, StoryObj } from '@storybook/react'
import NewCardButton from './NewCardButton'

const meta = {
  title: 'DOMAIN/NewCardButton',
  component: NewCardButton,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof NewCardButton>

export default meta
type Story = StoryObj<typeof meta>

export const Normal: Story = {
  args: {},
}

export const Disabled: Story = {
  args: {},
}
