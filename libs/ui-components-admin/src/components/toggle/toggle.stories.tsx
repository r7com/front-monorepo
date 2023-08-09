import type { Meta, StoryObj } from '@storybook/react'

import { Toggle } from './toggle'

const meta: Meta<typeof Toggle> = {
  title: 'Example/Toggle',
  component: Toggle,
  tags: ['autodocs'],
  argTypes: {},
}

export default meta

type Story = StoryObj<typeof Toggle>

export const Primary: Story = {
  render: ({ ...args }) => (
    <div>
      <Toggle {...args} />
    </div>
  ),
  args: {
    size: 'large',
    checked: false,
    disabled: false,
    icon: true,
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/EMH8xJPwcYWJYP8DBYePpR/Desktop%3A-Votação?type=design&node-id=1108%3A74&mode=dev',
      accessToken: 'figd_sHs6Ap894w4C-OAFls7tuq0fMMROyue-8zQJ8hRE',
    },
  },
}
