import type { Meta, StoryObj } from '@storybook/react'

import { Subheading } from './subheading'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Subheading> = {
  title: 'Base/Subheading',
  component: Subheading,
  tags: ['autodocs'],
  argTypes: {},
}

export default meta
type Story = StoryObj<typeof Subheading>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  render: ({ ...args }) => (
    <div>
      <Subheading {...args} />
    </div>
  ),
  args: {
    children: 'Component subheading',
    as: 'h2',
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
