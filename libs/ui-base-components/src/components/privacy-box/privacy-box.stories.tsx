import type { Meta, StoryObj } from '@storybook/react'

import { PrivacyBox } from './privacy-box'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof PrivacyBox> = {
  title: 'Base/PrivacyBox',
  component: PrivacyBox,
  tags: ['autodocs'],
  argTypes: {},
}

export default meta
type Story = StoryObj<typeof PrivacyBox>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  render: () => <PrivacyBox />,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/KtCmCn0gZJFU7n5JqmnfEP/Componentes-de-Comunica%C3%A7%C3%A3o?type=design&node-id=2371-4349&mode=dev',
      accessToken: 'figd_sHs6Ap894w4C-OAFls7tuq0fMMROyue-8zQJ8hRE',
    },
  },
}
