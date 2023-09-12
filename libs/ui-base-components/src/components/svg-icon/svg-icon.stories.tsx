import type { Meta, StoryObj } from '@storybook/react'

import { SvgIcon, SvgIconProps } from './svg-icon'

const meta: Meta<SvgIconProps> = {
  title: 'Example/SvgIcon',
  component: SvgIcon,
  tags: ['autodocs'],
  argTypes: {},
}

export default meta

type Story = StoryObj<SvgIconProps>

export const Primary: Story = {
  render: ({ ...args }) => (
    <div>
      <SvgIcon {...args} />
    </div>
  ),
  args: {
    iconName: 'bars',
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/EMH8xJPwcYWJYP8DBYePpR/Desktop%3A-Votação?type=design&node-id=1108%3A74&mode=dev',
      accessToken: 'figd_sHs6Ap894w4C-OAFls7tuq0fMMROyue-8zQJ8hRE',
    },
  },
}
