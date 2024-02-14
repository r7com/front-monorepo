import { Article } from './index'
import { LargeMainBlock, SidebarBlock } from './mocks/mocks'

describe('Article', () => {
  beforeEach(() => {
    cy.mount(
      <Article>
        <Article.Main>
          <LargeMainBlock />
        </Article.Main>
        <Article.Aside>
          <SidebarBlock />
          <SidebarBlock />
        </Article.Aside>
      </Article>,
    )
  })

  it('should render Article on Desktop', () => {
    cy.viewport('macbook-11')
    cy.findAllByText(/Large Main Block/i)
    cy.findAllByText(/Sidebar Block/i)
    cy.matchImage()
  })

  it('should render Article on Tablet', () => {
    cy.viewport('ipad-2')
    cy.matchImage()
  })

  it('should render Article on Mobile', () => {
    cy.viewport('iphone-8')
    cy.matchImage()
  })
})
