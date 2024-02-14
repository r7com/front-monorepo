import type { Meta, StoryObj } from '@storybook/react'
import { Article } from './article'
import { LargeMainBlock, SidebarBlock } from './mocks/mocks'

const ArticleBlock = () => (
  <Article>
    <Article.Main>
      <LargeMainBlock />
    </Article.Main>
    <Article.Aside>
      <SidebarBlock />
      <SidebarBlock />
    </Article.Aside>
  </Article>
)

const meta: Meta<typeof ArticleBlock> = {
  title: 'Layout/Article',
  component: ArticleBlock,
  tags: ['autodocs'],
  argTypes: {},
}

export default meta
type Story = StoryObj<typeof ArticleBlock>

export const Desktop: Story = {
  render: ArticleBlock,
}

export const Tablet: Story = {
  render: ArticleBlock,
  parameters: {
    viewport: {
      defaultViewport: 'ipad',
    },
  },
}

export const Mobile: Story = {
  render: ArticleBlock,
  parameters: {
    viewport: {
      defaultViewport: 'iphone12',
    },
  },
}
