import { AccessibilityBar } from './accessibility-bar'
import { ContrastControl } from '../contrast-control'
import { FontSizeControl } from '../font-size-control'
import { ArticleProvider } from '../../utils/provider/article-provider'

describe('AccessibilityBar', () => {
  beforeEach(() =>
    cy.mount(
      <ArticleProvider>
        <AccessibilityBar>
          {/* AUDIMA */}
          <iframe
            aria-label="Pressione control e ponto para iniciar ou pausar a leitura do conteúdo. Audíma"
            title="Audima-player"
            id="audima-iframe"
            width="100%"
            height="50"
            src={`https://audio.audima.co/iframe-later-thin-audima.html?skin=thin&amp;statistic=true`}
            className="checked aud-message-received w-full -ml-nano md:-ml-auto mb-xxxs md:mb-0"
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
      </ArticleProvider>,
    ),
  )
  it('Should render AccessibilityBar', () => {
    cy.matchImage()
  })

  it('Should render AccessibilityBar mobile', () => {
    cy.viewport(320, 480)
    cy.matchImage()
  })
})
