import type { Meta, StoryObj } from '@storybook/react'

import { Snackbar, SnackbarProps } from './snackbar'

const meta: Meta<SnackbarProps> = {
  title: 'Example/Snackbar',
  component: Snackbar,
  tags: ['autodocs'],
  argTypes: {},
}

export default meta

type Story = StoryObj<SnackbarProps>

export const Primary: Story = {
  render: ({ ...args }) => (
    <div className="h-[500px]">
      <Snackbar {...args} />
    </div>
  ),
  args: {
    message: 'mensagem',
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/EMH8xJPwcYWJYP8DBYePpR/Desktop%3A-Votação?type=design&node-id=1108%3A74&mode=dev',
      accessToken: 'figd_sHs6Ap894w4C-OAFls7tuq0fMMROyue-8zQJ8hRE',
    },
  },
}
