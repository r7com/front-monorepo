import { ArticleProvider } from '../../utils/provider/article-provider'
import { FontSizeControl } from './font-size-control'

describe('FontSizeControl', () => {
  beforeEach(() => {
    cy.mount(
      <ArticleProvider>
        <div className="flex">
          <FontSizeControl.Increase />
          <FontSizeControl.Decrease />
        </div>

        <article className="text-[calc(theme(fontSize.xxxs)_*_var(--font-size))]">anderson</article>
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
