import type { Meta, StoryObj } from '@storybook/react'
import { LatestNews } from './latest-news'
import { LargeMainBlock, SidebarBlock } from './mocks/mocks'

const LatestNewsBlock = () => (
  <LatestNews
    renderMain={<LargeMainBlock />}
    renderSidebar={
      <LatestNews.Sidebar
        rowOne={<SidebarBlock />}
        rowTwo={<SidebarBlock />}
        rowThree={<SidebarBlock />}
      />
    }
  />
)

const meta: Meta<typeof LatestNewsBlock> = {
  title: 'Layout/LatestNews',
  component: LatestNewsBlock,
  tags: ['autodocs'],
  argTypes: {},
}

export default meta
type Story = StoryObj<typeof LatestNewsBlock>

export const Desktop: Story = {
  render: LatestNewsBlock,
}

export const Tablet: Story = {
  render: LatestNewsBlock,
  parameters: {
    viewport: {
      defaultViewport: 'ipad',
    },
  },
}

export const Mobile: Story = {
  render: LatestNewsBlock,
  parameters: {
    viewport: {
      defaultViewport: 'iphone12',
    },
  },
}
