import { UiFormComponents } from './ui-form-components'

describe(UiFormComponents.name, () => {
  it('should be visible', () => {
    cy.mount(<UiFormComponents />)
    cy.get('div').should('be.visible')
    cy.matchImage()
  })
})
