import type { Meta, StoryObj } from '@storybook/react'
import { Label } from './Label'

const meta = {
  title: 'UI/Label',
  component: Label,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Label>

export default meta
type Story = StoryObj<typeof meta>

export const Normal: Story = {
  args: {},
  render: (args) => <Label {...args}>Label</Label>,
}
