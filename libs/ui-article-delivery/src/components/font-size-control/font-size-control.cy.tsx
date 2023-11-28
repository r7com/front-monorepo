import { ArticleProvider } from '../../utils/provider/article-provider'
import { FontSizeControlIncrease, FontSizeControlDecrease } from './font-size-control'

describe('FontSizeControl', () => {
  beforeEach(() => {
    cy.mount(
      <ArticleProvider>
        <div className="article-flex">
          <FontSizeControlIncrease />
          <FontSizeControlDecrease />
        </div>

        <article className="article-text-[calc(theme(fontSize.xxxs)_*_var(--font-size))]">
          anderson
        </article>
      </ArticleProvider>,
    )
  })
  it('Should render Font size control', () => {
    cy.matchImage()
  })

  it('Should click on font size control', () => {
    cy.get('button').click({ multiple: true })
  })
})
