import type { Meta, StoryObj } from '@storybook/react'
import { SectionMenu } from './section-menu'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta = {
  title: 'Header/SectionMenu',
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Desktop: Story = {
  render: () => <SectionMenu>Initial Story</SectionMenu>,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/OBWV1tXbl1eXmdxzgEmcs3/Core-C-%7C-Delivery?type=design&node-id=1970-2538&mode=dev',
      accessToken: 'figd_sHs6Ap894w4C-OAFls7tuq0fMMROyue-8zQJ8hRE',
    },
  },
}
