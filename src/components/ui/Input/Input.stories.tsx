import type { Meta, StoryObj } from '@storybook/react'
import Label from '../Label'
import { Input } from './Input'

const meta = {
  title: 'UI/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Normal: Story = {
  args: {},
}

export const InputWithLabel: Story = {
  args: {},
  render: (args) => (
    <div className="flex flex-col space-y-2">
      <Label htmlFor="input">라벨</Label>
      <Input {...args} id="input" />
    </div>
  ),
}
