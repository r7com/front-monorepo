import { Disclaimer } from './disclaimer'

describe(Disclaimer.name, () => {
  it('renders as button', () => {
    cy.mount(<Disclaimer text="testando" />)
    cy.findByText('testando')
    cy.should('be.visible')
    cy.mount(<Disclaimer iconName="disclaimer" size="medium" />)
    cy.get('svg')
    cy.should('be.visible')
  })

  it('Testing Svg', () => {
    cy.mount(<Disclaimer iconName="disclaimer" size="medium" />)
    cy.get('svg')
    cy.should('be.visible')
  })
})
