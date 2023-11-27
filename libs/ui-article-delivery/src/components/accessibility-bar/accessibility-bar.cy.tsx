import { AccessibilityBar } from './accessibility-bar'
import { ContrastControl } from '../contrast-control'
import { FontSizeControlIncrease, FontSizeControlDecrease } from '../font-size-control'
import { ArticleProvider } from '../../utils/provider/article-provider'

describe('AccessibilityBar', () => {
  beforeEach(() =>
    cy.mount(
      <div className="article-my-0 article-mx-auto article-w-[900px]">
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
              className="article-checked article-aud-message-received article-w-full -article-ml-nano md:-article-ml-auto article-mb-xxxs md:article-mb-0"
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
      </div>,
    ),
  )
  it('Should render AccessibilityBar', () => {
    cy.matchImage()
  })

  it('Should render AccessibilityBar Desktop', () => {
    cy.viewport('macbook-15')
    cy.matchImage()
  })
})
