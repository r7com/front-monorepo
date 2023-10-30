import type { Meta, StoryObj } from '@storybook/react'
import { Audima } from './audima'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta = {
  title: 'Article/Audima',
  component: Audima,
}

export default meta
type Story = StoryObj<{ color: string }>

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
        src={`https://audio.audima.co/iframe-later-thin-audima.html?skin=thin&amp;statistic=true`}
        className="checked aud-message-received w-[350px] md:w-[600px] -ml-nano md:-ml-auto mb-xxxs md:mb-0"
        // eslint-disable-next-line jsx-a11y/no-noninteractive-element-to-interactive-role
        role="button"
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
