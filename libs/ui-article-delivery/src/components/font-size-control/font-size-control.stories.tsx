import type { Meta, StoryObj } from '@storybook/react'
import { FontSizeControl, FontSizeControlProps } from './font-size-control'
import { ArticleProvider } from '../../utils/provider/article-provider'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<FontSizeControlProps> = {
  title: 'Article/FontSizeControl',
  component: FontSizeControl,
}

export default meta
type Story = StoryObj<{ color: string }>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  render: () => (
    <ArticleProvider>
      <div className="flex">
        <FontSizeControl.Increase />
        <FontSizeControl.Decrease />
      </div>

      <article className="text-[calc(theme(fontSize.xxxs)_*_var(--font-size))]">storybook</article>
    </ArticleProvider>
  ),

  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/proto/wm2WOlSlO2Yl4ClV00bdlP/Artigos---Desktop?node-id=935-1175',
      accessToken: 'figd_sHs6Ap894w4C-OAFls7tuq0fMMROyue-8zQJ8hRE',
    },
  },
}
