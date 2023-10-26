import type { Meta, StoryObj } from '@storybook/react'
import { SectionHeadingImage, SectionHeadingImageProps } from './section-heading-image'

const meta: Meta<SectionHeadingImageProps> = {
  title: 'Heading/SectionHeadingImage',
  component: SectionHeadingImage,
  tags: ['autodocs'],
  argTypes: {},
}

export default meta
type Story = StoryObj<SectionHeadingImageProps>

export const Default: Story = {
  render: ({ ...args }) => <SectionHeadingImage {...args} />,
  args: {
    src: 'https://img.r7.com/images/jr-24h-18112019115830166?resize=110x70&crop=200x127+0+37',
  },
}
