import { Disclaimer } from './disclaimer'

const selector = '[data-testid="disclaimer"]'

describe(Disclaimer.name, () => {
  it('should render default disclaimer, with editorial color as background color', () => {
    cy.mount(
      <Disclaimer color="high">
        Sou um texto <strong>informativo</strong>
      </Disclaimer>,
    )
    cy.get(selector).should('be.visible')
    cy.matchImage()
  })

  it('should render disclaimer with personalized background color', () => {
    cy.mount(
      <Disclaimer bgColor="#e6948e" color="low">
        Sou um texto <strong>informativo</strong>
      </Disclaimer>,
    )

    cy.get(selector).should('be.visible')
    cy.matchImage()
  })
})
