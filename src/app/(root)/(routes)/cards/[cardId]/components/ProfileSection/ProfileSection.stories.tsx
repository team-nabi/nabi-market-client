import type { Meta, StoryObj } from '@storybook/react'
import ProfileSection from './ProfileSection'

const meta = {
  title: 'ItemPage/ProfileSection',
  component: ProfileSection,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof ProfileSection>

export default meta
type Story = StoryObj<typeof meta>

export const Profile: Story = {
  args: { profileImg: null, userName: '푸바오바오' },
  render: () => {
    return <ProfileSection profileImg={null} userName="푸바오바오" />
  },
}
