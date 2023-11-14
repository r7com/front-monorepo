import type { Meta, StoryObj } from '@storybook/react'

import { Heading } from './heading'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Heading> = {
  title: 'Base/Heading',
  component: Heading,
  tags: ['autodocs'],
  argTypes: {},
}

export default meta
type Story = StoryObj<typeof Heading>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  render: ({ ...args }) => (
    <div>
      <Heading {...args} />
    </div>
  ),
  args: {
    children: 'Component Heading',
    as: 'h1',
    size: 'large',
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/OaJJ2O9QrWobVbEsXfGttI/Global-Tokens?node-id=0%3A1&mode=dev',
      accessToken: 'figd_sHs6Ap894w4C-OAFls7tuq0fMMROyue-8zQJ8hRE',
    },
  },
}
