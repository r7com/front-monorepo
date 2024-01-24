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

  it('Should render AccessibilityBar dark mode', () => {
    cy.addDarkMode()
    cy.matchImage()
  })

  it('Should render AccessibilityBar Desktop dark mode', () => {
    cy.addDarkMode()
    cy.viewport('macbook-15')
    cy.matchImage()
  })

  it('Should render AccessibilityBar Desktop', () => {
    cy.viewport('macbook-15')
    cy.matchImage()
  })
})
