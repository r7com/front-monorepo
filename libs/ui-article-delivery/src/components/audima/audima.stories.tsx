import type { Meta, StoryObj } from '@storybook/react'
import { Audima } from './audima'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta = {
  title: 'Article/Audima',
  component: Audima,
}

export default meta
type Story = StoryObj

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  render: () => (
    <>
      {/* AUDIMA */}
      <iframe
        aria-label="Pressione control e ponto para iniciar ou pausar a leitura do conteúdo. Audíma"
        title="Audima-player"
        id="audima-iframe"
        width="100%"
        height="50"
        src="https://audio.audima.co/iframe-later-thin-audima.html?skin=thin&amp;statistic=true"
        className="article-checked article-aud-message-received article-w-[350px] md:article-w-[600px] article--ml-nano md:article--ml-auto article-mb-xxxs md:article-mb-0"
      ></iframe>
    </>
  ),

  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/proto/wm2WOlSlO2Yl4ClV00bdlP/Artigos---Desktop?node-id=935-1175',
      accessToken: 'figd_sHs6Ap894w4C-OAFls7tuq0fMMROyue-8zQJ8hRE',
    },
  },
}
