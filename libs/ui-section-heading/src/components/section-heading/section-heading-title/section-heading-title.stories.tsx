import type { Meta, StoryObj } from '@storybook/react'
import { SectionHeadingTitle, SectionHeadingTitleProps } from './section-heading-title'

const meta: Meta<SectionHeadingTitleProps> = {
  title: 'Heading/SectionHeadingTitle',
  component: SectionHeadingTitle,
  tags: ['autodocs'],
  argTypes: {},
}

export default meta
type Story = StoryObj<SectionHeadingTitleProps>

export const Default: Story = {
  render: ({ ...args }) => <SectionHeadingTitle {...args} />,
  args: {
    children: 'Esportes',
  },
}
