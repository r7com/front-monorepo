import type { Meta, StoryObj } from '@storybook/react'

import { Disclaimer } from './disclaimer'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Disclaimer> = {
  title: 'Example/Disclaimer',
  component: Disclaimer,
  tags: ['autodocs'],
  argTypes: {},
}

export default meta
type Story = StoryObj<typeof Disclaimer>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  render: ({ ...args }) => (
    <div>
      <Disclaimer {...args} />
    </div>
  ),
  args: {
    text: 'primary',
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/EMH8xJPwcYWJYP8DBYePpR/Desktop%3A-Votação?type=design&node-id=1108%3A74&mode=dev',
      accessToken: 'figd_sHs6Ap894w4C-OAFls7tuq0fMMROyue-8zQJ8hRE',
    },
  },
}
