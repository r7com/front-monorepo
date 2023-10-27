import { SectionMenu } from './section-menu'

describe('SectionMenu', () => {
  beforeEach(() => {
    cy.mount(<SectionMenu>Initial Test</SectionMenu>)
  })

  it('should render Section Menu', () => {
    cy.viewport('macbook-11')
    cy.findByRole('navigation').should('be.visible')
  })
})
