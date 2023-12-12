import { SpecialOne } from './index'
import { LargeMainBlock, SmallMainBlock, SidebarBlock } from './mocks/mocks'

describe('SpecialOne', () => {
  beforeEach(() => {
    cy.mount(
      <SpecialOne
        renderMain={
          <SpecialOne.Main
            rowOne={
              <>
                <LargeMainBlock />
                <LargeMainBlock />
              </>
            }
            rowTwo={
              <>
                <SmallMainBlock />
                <SmallMainBlock />
                <SmallMainBlock />
              </>
            }
          />
        }
        renderSidebar={<SidebarBlock />}
      />,
    )
  })

  it('should render SpecialOne on Desktop', () => {
    cy.viewport('macbook-11')
    cy.findAllByText(/Large Main Block/i)
    cy.findAllByText(/Small Main Block/i)
    cy.findAllByText(/Sidebar Block/i)
    cy.matchImage()
  })

  it('should render SpecialOne on Tablet', () => {
    cy.viewport('ipad-2')
    cy.matchImage()
  })

  it('should render SpecialOne on Tablet', () => {
    cy.viewport('iphone-8')
    cy.matchImage()
  })
})
