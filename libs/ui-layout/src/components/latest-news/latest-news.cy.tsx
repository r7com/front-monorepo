import '@r7/ui-section-heading/css'
import { LatestNews } from './index'
import { LargeMainBlock, SidebarBlock } from './mocks/mocks'

describe('Latest', () => {
  beforeEach(() => {
    cy.mount(
      <LatestNews
        renderMain={<LargeMainBlock />}
        renderSidebar={
          <LatestNews.Sidebar
            rowOne={<SidebarBlock />}
            rowTwo={<SidebarBlock />}
            rowThree={<SidebarBlock />}
          />
        }
      />,
    )
  })

  it('should render Latest News on Desktop', () => {
    cy.viewport('macbook-11')
    cy.findAllByText(/Large Main Block/i)
    cy.findAllByText(/Sidebar Block/i)
    cy.matchImage()
  })

  it('should render Latest News on Tablet', () => {
    cy.viewport('ipad-2')
    cy.matchImage()
  })

  it('should render Latest News on Mobile', () => {
    cy.viewport('iphone-8')
    cy.matchImage()
  })
})
