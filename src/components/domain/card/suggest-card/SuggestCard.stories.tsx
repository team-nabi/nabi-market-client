import type { Meta, StoryObj } from '@storybook/react'
import SuggestCard from './SuggestCard'

const meta = {
  title: 'DOMAIN/SuggestCard',
  component: SuggestCard,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof SuggestCard>

export default meta
type Story = StoryObj<typeof meta>

export const Normal: Story = {
  args: {
    cardTitle: '에어팟 맥스 교환해요',
    itemName: '에어팟 맥스',
    priceRange: '30만원대',
    suggestionType: '오퍼하기',
    cardId: 1,
    toCardId: 3,
  },
  render: () => {
    return (
      <SuggestCard
        cardTitle={'에어팟 맥스 교환해요'}
        itemName={'에어팟 맥스'}
        priceRange={'30만원대'}
        suggestionType={'OFFER'}
        cardId={1}
        toCardId={3}
      />
    )
  },
}
