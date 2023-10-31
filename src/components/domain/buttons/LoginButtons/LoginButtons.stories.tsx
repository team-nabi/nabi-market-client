import type { Meta, StoryObj } from '@storybook/react'
import { KakaoLoginButton, GoogleLoginButton } from './LoginButtons'

const meta = {
  title: 'DOMAIN/LoginButtons',
  component: KakaoLoginButton,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof KakaoLoginButton>

export default meta
type Story = StoryObj<typeof meta>

export const Normal: Story = {
  args: {},
  render: () => (
    <section className="flex flex-col gap-3">
      <KakaoLoginButton onClickButton={() => alert('카카오 버튼')} />
      <GoogleLoginButton onClickButton={() => alert('구글 버튼')} />
    </section>
  ),
}

export const Kakao: Story = {
  render: () => <KakaoLoginButton onClickButton={() => alert('카카오 버튼')} />,
}

export const Google: Story = {
  render: () => <GoogleLoginButton onClickButton={() => alert('구글 버튼')} />,
}
