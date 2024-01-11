import type { Meta, StoryObj } from '@storybook/react'
import { AdShell } from './ad-shell'
import { AdPlaceholder } from '../ad-placeholder'

const meta: Meta<typeof AdShell> = {
  title: 'Base/AdShell',
  component: AdShell,
  tags: ['autodocs'],
  argTypes: {},
}

export default meta
type Story = StoryObj<typeof AdShell>

export const Primary: Story = {
  render: ({ ...args }) => (
    <AdShell {...args}>
      <AdPlaceholder />
    </AdShell>
  ),
  args: {
    layout: 'none',
    minHeight: '0px',
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/6w74RRU5D1HJjW8bO0bkhR/Specific-Core%3A-Ads?node-id=0%3A1&mode=dev',
      accessToken: 'figd_sHs6Ap894w4C-OAFls7tuq0fMMROyue-8zQJ8hRE',
    },
  },
}
