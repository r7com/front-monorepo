import type { Meta, StoryObj } from '@storybook/react'
import { SectionHeadingLine } from './section-heading-line'

const meta: Meta<typeof SectionHeadingLine> = {
  title: 'Heading/SectionHeadingLine',
  component: SectionHeadingLine,
  tags: ['autodocs'],
  argTypes: {},
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: ({ ...args }) => <SectionHeadingLine {...args} />,
}
