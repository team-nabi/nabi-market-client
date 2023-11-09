import type { Meta, StoryObj } from '@storybook/react'
import Textarea from '.'

const meta = {
  title: 'UI/Textarea',
  component: Textarea,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Textarea>

export default meta
type Story = StoryObj<typeof meta>

export const Normal: Story = {
  args: { placeholder: 'Placeholder text' },
}

export const Disabled: Story = {
  args: {},
  render: (args) => <Textarea {...args} disabled />,
}
