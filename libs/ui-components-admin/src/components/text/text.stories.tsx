import type { Meta, StoryObj } from '@storybook/react'

import { Text } from './text'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Text> = {
  title: 'Example/Text',
  component: Text,
  tags: ['autodocs'],
  argTypes: {},
}

export default meta
type Story = StoryObj<typeof Text>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  render: ({ ...args }) => (
    <div>
      <Text {...args} />
    </div>
  ),
  args: {
    children: 'Componente Text',
    as: 'p',
    fontWeight: 'light',
    color: 'neutralLow',
    fontSize: 'xxxs',
    fontFamily: 'openSans',
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/EMH8xJPwcYWJYP8DBYePpR/Desktop%3A-Votação?type=design&node-id=1108%3A74&mode=dev',
      accessToken: 'figd_sHs6Ap894w4C-OAFls7tuq0fMMROyue-8zQJ8hRE',
    },
  },
}
