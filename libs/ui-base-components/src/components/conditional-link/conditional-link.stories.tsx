import type { Meta, StoryObj } from '@storybook/react'
import { ConditionalLink, ConditionalLinkProps } from './conditional-link'

const meta: Meta<ConditionalLinkProps> = {
  title: 'Base/ConditionalLink',
  component: ConditionalLink,
  tags: ['autodocs'],
  argTypes: {},
}

export default meta
type Story = StoryObj<ConditionalLinkProps>

export const WithLink: Story = {
  render: ({ ...args }) => (
    <ConditionalLink {...args}>
      <span>I am a link</span>
    </ConditionalLink>
  ),
  args: {
    href: 'https://www.google.com',
  },
}

export const WithoutLink: Story = {
  render: ({ ...args }) => (
    <ConditionalLink {...args}>
      <span>I am not a link</span>
    </ConditionalLink>
  ),
  args: {},
}
