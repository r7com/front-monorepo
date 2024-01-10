import { AdPlaceholder } from './placeholder'

describe(`${AdPlaceholder.name}`, () => {
  it('should render ad placeholder', () => {
    cy.mount(<AdPlaceholder />)
    cy.findByRole('presentation').should('be.visible')
    cy.matchImage()
  })
})
