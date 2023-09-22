import { Header } from './header'

describe(Header.name, () => {
  it('should be visible', () => {
    cy.mount(<Header>header content</Header>)
    cy.get('header').should('be.visible')
  })
})
