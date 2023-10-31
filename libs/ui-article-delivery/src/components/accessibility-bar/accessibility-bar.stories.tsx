import type { Meta, StoryObj } from '@storybook/react'
import { AccessibilityBar, AccessibilityBarProps } from './accessibility-bar'
import { ContrastControl } from '../contrast-control'
import { FontSizeControl } from '../font-size-control'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<AccessibilityBarProps> = {
  title: 'Article/AccessibilityBar',
  component: AccessibilityBar,
}

export default meta
type Story = StoryObj

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  render: () => (
    <div className="w-5/6 h-screen mx-auto flex flex-col justify-center">
      <AccessibilityBar>
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
        <AccessibilityBar.List>
          <AccessibilityBar.Item>
            <ContrastControl />
          </AccessibilityBar.Item>
          <AccessibilityBar.Item>
            <FontSizeControl.Increase />
          </AccessibilityBar.Item>
          <AccessibilityBar.Item>
            <FontSizeControl.Decrease />
          </AccessibilityBar.Item>
        </AccessibilityBar.List>
      </AccessibilityBar>
    </div>
  ),

  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/proto/wm2WOlSlO2Yl4ClV00bdlP/Artigos---Desktop?node-id=935-1175',
      accessToken: 'figd_sHs6Ap894w4C-OAFls7tuq0fMMROyue-8zQJ8hRE',
    },
  },
}

export const Mobile: Story = {
  render: () => (
    <AccessibilityBar>
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
      <AccessibilityBar.List>
        <AccessibilityBar.Item>
          <ContrastControl />
        </AccessibilityBar.Item>
        <AccessibilityBar.Item>
          <FontSizeControl.Increase />
        </AccessibilityBar.Item>
        <AccessibilityBar.Item>
          <FontSizeControl.Decrease />
        </AccessibilityBar.Item>
      </AccessibilityBar.List>
    </AccessibilityBar>
  ),
  parameters: {
    viewport: {
      defaultViewport: 'iphone12',
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/proto/wm2WOlSlO2Yl4ClV00bdlP/Artigos---Desktop?node-id=935-1175',
      accessToken: 'figd_sHs6Ap894w4C-OAFls7tuq0fMMROyue-8zQJ8hRE',
    },
  },
}
