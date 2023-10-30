import type { Meta, StoryObj } from '@storybook/react'
import Button from '../Button'
import { Card, CardFlex, CardImage, CardText } from './Card'

const meta = {
  title: 'UI/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Small: Story = {
  args: {},
  render: () => {
    return (
      <Card size={'sm'}>
        <CardFlex
          direction={'row'}
          justify={'start'}
          align={'center'}
          gap={'space'}
        >
          <div className="h-full w-32 relative">
            <CardImage
              src={
                'https://cdn.cetizen.com/CDN/market/market_large_crop/202203/20220318/220318152808_1_2913635.jpg'
              }
              alt="Picture of the author"
              layout="fill"
              objectFit="cover"
            />
          </div>

          <CardFlex direction={'col'} justify={'between'}>
            <CardText type={'h3'}>스위치 팜</CardText>
            <CardText type={'p2'}>스위치</CardText>
            <CardText type={'p2'}>10만원대</CardText>
            <CardText type={'p3'}>25분전</CardText>
          </CardFlex>
        </CardFlex>
      </Card>
    )
  },
}

export const Large: Story = {
  args: {},
  render: () => {
    return (
      <Card size={'lg'}>
        <CardFlex
          direction={'row'}
          justify={'start'}
          align={'center'}
          gap={'space'}
        >
          <div className="h-full w-36 relative">
            <CardImage
              src={
                'https://cdn.cetizen.com/CDN/market/market_large_crop/202203/20220318/220318152808_1_2913635.jpg'
              }
              alt="Picture of the author"
              layout="fill"
              objectFit="cover"
            />
          </div>

          <CardFlex direction={'col'} justify={'between'}>
            <CardText type={'h3'}>스위치 팜</CardText>
            <CardText type={'p2'}>스위치</CardText>
            <CardText type={'p2'}>10만원대</CardText>
            <Button>대기중</Button>
            <CardText type={'p3'}>25분전</CardText>
          </CardFlex>
        </CardFlex>
      </Card>
    )
  },
}
