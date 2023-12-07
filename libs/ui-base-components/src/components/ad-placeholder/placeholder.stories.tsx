import type { Meta, StoryObj } from '@storybook/react'
import { AdPlaceholder } from './placeholder'

const meta: Meta<typeof AdPlaceholder> = {
  title: 'Base/AdPlaceholder',
  component: AdPlaceholder,
  tags: ['autodocs'],
  argTypes: {},
}

export default meta
type Story = StoryObj<typeof AdPlaceholder>

export const Primary: Story = {
  args: {},
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/6w74RRU5D1HJjW8bO0bkhR/Specific-Core%3A-Ads?node-id=0%3A1&mode=dev',
      accessToken: 'figd_sHs6Ap894w4C-OAFls7tuq0fMMROyue-8zQJ8hRE',
    },
  },
}
