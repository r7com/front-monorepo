import type { Meta, StoryObj } from '@storybook/react'

import { AltBullet } from './alt-bullet'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof AltBullet> = {
  title: 'Example/AltBullet',
  component: AltBullet,
  tags: ['autodocs'],
  argTypes: {},
}

export default meta
type Story = StoryObj<typeof AltBullet>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  render: ({ ...args }) => (
    <div>
      <AltBullet {...args} />
    </div>
  ),
  args: {
    text: 'Componente bullet',
    url: 'https://www.r7.com/',
    size: 'medium',
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/EMH8xJPwcYWJYP8DBYePpR/Desktop%3A-Votação?type=design&node-id=1108%3A74&mode=dev',
      accessToken: 'figd_sHs6Ap894w4C-OAFls7tuq0fMMROyue-8zQJ8hRE',
    },
  },
}
