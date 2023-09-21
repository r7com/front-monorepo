import { Institucional } from './institucional'
const institucionalSelector = '[data-testid="secondary-footer"]'
describe(Institucional.name, () => {
  it('should', () => {
    cy.mount(<Institucional editorialName="noticias" />)
    cy.get(institucionalSelector).should('be.visible')
    cy.matchImage()
  })
})
