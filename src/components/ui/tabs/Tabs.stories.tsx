import type { Meta, StoryObj } from '@storybook/react'
import { Tabs, TabsList, TabsTrigger, TabsContent } from './Tabs'

const meta = {
  title: 'UI/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Tabs>

export default meta
type Story = StoryObj<typeof meta>

export const Normal: Story = {
  args: {},
  render: () => {
    return (
      <Tabs defaultValue="offer">
        <TabsList>
          <TabsTrigger value="offer">오퍼하기</TabsTrigger>
          <TabsTrigger value="poke">찔러보기</TabsTrigger>
        </TabsList>
        <TabsContent value="offer">
          <div>카드1</div>
          <div>카드2</div>
          <div>카드3</div>
        </TabsContent>
        <TabsContent value="poke">
          <div>카드4</div>
          <div>카드5</div>
          <div>카드6</div>
        </TabsContent>
      </Tabs>
    )
  },
}
