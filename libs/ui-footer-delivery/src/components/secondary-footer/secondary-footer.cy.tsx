import { SecondaryFooter } from './secondary-footer'
const secondaryFooterSelector = '[data-testid="secondary-footer"]'
describe(SecondaryFooter.name, () => {
  it('should', () => {
    cy.mount(<SecondaryFooter editorialName="noticias" />)
    cy.get(secondaryFooterSelector).should('be.visible')
    cy.matchImage()
  })
})
