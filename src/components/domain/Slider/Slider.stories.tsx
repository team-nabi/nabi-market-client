import type { Meta, StoryObj } from '@storybook/react'
import ImageSlider from './Slider'

const meta = {
  title: 'DOMAIN/Slider',
  component: ImageSlider,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof ImageSlider>

const mockData = [
  'https://cdn.pixabay.com/photo/2023/09/30/09/12/dachshund-8285220_1280.jpg',
  'https://cdn.pixabay.com/photo/2014/04/13/20/49/cat-323262_1280.jpg',
  'https://cdn.pixabay.com/photo/2018/10/01/09/21/pets-3715733_1280.jpg',
]

export default meta
type Story = StoryObj<typeof meta>

export const Slider: Story = {
  args: {
    slides: mockData,
  },
  render: () => {
    return (
      <div className="max-w-[640px] relative">
        <ImageSlider slides={mockData} imageAspectRatio="1/1" />
      </div>
    )
  },
}

export const AutoSlider: Story = {
  args: { slides: mockData },
  render: () => {
    return (
      <div className="max-w-[640px] relative">
        <ImageSlider
          slides={mockData}
          autoSlide={true}
          imageAspectRatio="1/1"
        />
      </div>
    )
  },
}
