import type { Meta, StoryObj } from '@storybook/react'
import { AccessibilityBar, AccessibilityBarProps } from './accessibility-bar'
import { ContrastControl } from '../contrast-control'
import { FontSizeControlIncrease, FontSizeControlDecrease } from '../font-size-control'
import { ArticleProvider } from '../../utils/provider/article-provider'

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
    <ArticleProvider>
      <div className="article-w-5/6 article-h-screen article-mx-auto article-flex article-flex-col article-justify-center">
        <AccessibilityBar>
          {/* AUDIMA */}
          <iframe
            aria-label="Pressione control e ponto para iniciar ou pausar a leitura do conteúdo. Audíma"
            title="Audima-player"
            id="audima-iframe"
            width="100%"
            height="50"
            src={`https://audio.audima.co/iframe-later-thin-audima.html?skin=thin&amp;statistic=true`}
            className="article-checked article-aud-message-received article-w-[350px] md:article-w-[600px] -article-ml-nano md:-article-ml-auto article-mb-xxxs md:article-mb-0"
          ></iframe>
          <AccessibilityBar.List>
            <AccessibilityBar.Item>
              <ContrastControl />
            </AccessibilityBar.Item>
            <AccessibilityBar.Item>
              <FontSizeControlIncrease />
            </AccessibilityBar.Item>
            <AccessibilityBar.Item>
              <FontSizeControlDecrease />
            </AccessibilityBar.Item>
          </AccessibilityBar.List>
        </AccessibilityBar>
      </div>
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

export const Mobile: Story = {
  render: () => (
    <ArticleProvider>
      <AccessibilityBar>
        {/* AUDIMA */}
        <iframe
          aria-label="Pressione control e ponto para iniciar ou pausar a leitura do conteúdo. Audíma"
          title="Audima-player"
          id="audima-iframe"
          width="100%"
          height="50"
          src="https://audio.audima.co/iframe-later-thin-audima.html?skin=thin&amp;statistic=true"
          className="article-checked article-aud-message-received article-w-[350px] md:article-w-[600px] -article-ml-nano md:-article-ml-auto article-mb-xxxs md:article-mb-0"
        ></iframe>
        <AccessibilityBar.List>
          <AccessibilityBar.Item>
            <ContrastControl />
          </AccessibilityBar.Item>
          <AccessibilityBar.Item>
            <FontSizeControlIncrease />
          </AccessibilityBar.Item>
          <AccessibilityBar.Item>
            <FontSizeControlDecrease />
          </AccessibilityBar.Item>
        </AccessibilityBar.List>
      </AccessibilityBar>
    </ArticleProvider>
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
