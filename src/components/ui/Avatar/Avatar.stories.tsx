import type { Meta, StoryObj } from '@storybook/react'
import { Avatar, AvatarImage, AvatarFallback } from './Avatar'

const meta = {
  title: 'UI/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Avatar>

export default meta
type Story = StoryObj<typeof meta>

export const Normal: Story = {
  args: {},
  render: () => {
    return (
      <>
        <Avatar size="sm">
          <AvatarImage imgUrl={null} />
          <AvatarFallback>NB</AvatarFallback>
        </Avatar>
        <Avatar size="md">
          <AvatarImage imgUrl={null} />
          <AvatarFallback>NB</AvatarFallback>
        </Avatar>
        <Avatar size="lg">
          <AvatarImage imgUrl="https://cdn.pixabay.com/photo/2020/05/17/20/21/cat-5183427_1280.jpg" />
          <AvatarFallback>NB</AvatarFallback>
        </Avatar>
      </>
    )
  },
}
