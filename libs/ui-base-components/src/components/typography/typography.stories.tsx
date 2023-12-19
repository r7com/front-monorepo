import type { Meta, StoryObj } from '@storybook/react'
import './typography.css'

import { Typography } from './typography'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Typography> = {
  title: 'Base/Typography',
  component: Typography,
  tags: ['autodocs'],
  argTypes: {},
}

export default meta
type Story = StoryObj<typeof Typography>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const ClassName: Story = {
  render: ({ ...args }) => <Typography {...args} />,
  args: {
    children: 'Component Typography',
    className: 'typography',
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/EMH8xJPwcYWJYP8DBYePpR/Desktop%3A-Votação?type=design&node-id=1108%3A74&mode=dev',
      accessToken: 'figd_sHs6Ap894w4C-OAFls7tuq0fMMROyue-8zQJ8hRE',
    },
  },
}

export const Default: Story = {
  render: ({ ...args }) => <Typography {...args} />,
  args: {
    children: 'Component Typography',
    color: 'neutralLow',
    fontSize: 'lg',
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/EMH8xJPwcYWJYP8DBYePpR/Desktop%3A-Votação?type=design&node-id=1108%3A74&mode=dev',
      accessToken: 'figd_sHs6Ap894w4C-OAFls7tuq0fMMROyue-8zQJ8hRE',
    },
  },
}
