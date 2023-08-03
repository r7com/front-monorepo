import type { Meta, StoryObj } from '@storybook/react'

import { Tags } from './tags'

const meta: Meta<typeof Tags> = {
  title: 'Example/Tags',
  component: Tags,
  tags: ['autodocs'],
  argTypes: {
    color: {
      options: ['primary', 'secondary', 'tertiary', 'neutral'],
      control: { type: 'radio' },
    },
    size: {
      options: ['medium', 'small', 'large'],
      control: { type: 'radio' },
    },
  },
}

export default meta
type Story = StoryObj<typeof Tags>

export const Primary: Story = {
  args: {
    color: 'primary',
    size: 'small',
    children: 'Nome tag',
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/EMH8xJPwcYWJYP8DBYePpR/Desktop%3A-Votação?type=design&node-id=1108%3A74&mode=dev',
      accessToken: 'figd_sHs6Ap894w4C-OAFls7tuq0fMMROyue-8zQJ8hRE',
    },
  },
}
