import type { Meta, StoryObj } from '@storybook/react'

import { UiFormComponents } from './ui-form-components'

const meta: Meta<typeof UiFormComponents> = {
  title: 'Example/UiFormComponents',
  component: UiFormComponents,
  tags: ['autodocs'],
  argTypes: {},
}

export default meta
type Story = StoryObj<typeof UiFormComponents>

export const Default: Story = {
  render: ({ ...args }) => <UiFormComponents {...args} />,
  args: {},
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/EMH8xJPwcYWJYP8DBYePpR/Desktop%3A-Votação?type=design&node-id=1108%3A74&mode=dev',
      accessToken: 'figd_sHs6Ap894w4C-OAFls7tuq0fMMROyue-8zQJ8hRE',
    },
  },
}
