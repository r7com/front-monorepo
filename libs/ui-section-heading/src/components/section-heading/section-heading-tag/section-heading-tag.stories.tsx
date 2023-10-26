import type { Meta, StoryObj } from '@storybook/react'
import { SectionHeadingTag, SectionHeadingTagProps } from './section-heading-tag'

const meta: Meta<SectionHeadingTagProps> = {
  title: 'Heading/SectionHeadingTag',
  component: SectionHeadingTag,
  tags: ['autodocs'],
  argTypes: {},
}

export default meta
type Story = StoryObj<SectionHeadingTagProps>

export const Default: Story = {
  render: ({ ...args }) => <SectionHeadingTag {...args} />,
  args: {
    children: 'Esportes',
  },
}
