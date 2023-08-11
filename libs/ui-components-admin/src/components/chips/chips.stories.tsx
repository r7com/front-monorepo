import type { Meta, StoryObj } from '@storybook/react'

import { Chips, ChipsProps } from './chips'

const meta: Meta<ChipsProps> = {
  title: 'Example/Chips',
  component: Chips,
  tags: ['autodocs'],
  argTypes: {
    color: {
      options: ['primary', 'secondary', 'tertiary', 'default'],
      control: { type: 'radio' },
    },
    size: {
      options: ['medium', 'small', 'large'],
      control: { type: 'radio' },
    },
    variant: {
      options: ['active', 'disabled'],
      control: { type: 'radio' },
    },
  },
}

export default meta
type Story = StoryObj<ChipsProps>

export const Primary: Story = {
  render: ({ ...args }) => <Chips {...args}>nome tag</Chips>,
  args: {
    color: 'primary',
    size: 'small',
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/EMH8xJPwcYWJYP8DBYePpR/Desktop%3A-Votação?type=design&node-id=1108%3A74&mode=dev',
      accessToken: 'figd_sHs6Ap894w4C-OAFls7tuq0fMMROyue-8zQJ8hRE',
    },
  },
}
