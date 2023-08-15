import type { Meta, StoryObj } from '@storybook/react'

import { IconButton, IconButtonProps } from './icon-button'
import { SvgIcon } from '../svg-icon'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<IconButtonProps> = {
  title: 'Example/IconButton',
  component: IconButton,
  tags: ['autodocs'],
  argTypes: {},
}

export default meta
type Story = StoryObj<IconButtonProps>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  render: ({ ...args }) => (
    <IconButton {...args}>
      <SvgIcon iconName="error" title="error" />
    </IconButton>
  ),
  args: {},
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/EMH8xJPwcYWJYP8DBYePpR/Desktop%3A-Votação?type=design&node-id=1108%3A74&mode=dev',
      accessToken: 'figd_sHs6Ap894w4C-OAFls7tuq0fMMROyue-8zQJ8hRE',
    },
  },
}
