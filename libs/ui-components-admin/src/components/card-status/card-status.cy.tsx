import { CardStatus } from './card-status'

describe(CardStatus.name, () => {
  const text = 'Card Status'

  it(`Check status of success`, () => {
    cy.mount(<CardStatus text={text} variant="success" />)
    cy.findByRole('status').should('be.visible')
    cy.findByText(text).should('be.visible')
    cy.matchImage()
  })

  it(`Check status of error`, () => {
    cy.mount(<CardStatus text={text} variant="error" />)
    cy.findByRole('status').should('be.visible')
    cy.findByText(text).should('be.visible')
    cy.matchImage()
  })

  it(`Check status of helper`, () => {
    cy.mount(<CardStatus text={text} variant="helper" />)
    cy.findByRole('status').should('be.visible')
    cy.findByText(text).should('be.visible')
    cy.matchImage()
  })

  it(`Check status of info`, () => {
    cy.mount(<CardStatus text={text} variant="info" />)
    cy.findByRole('status').should('be.visible')
    cy.findByText(text).should('be.visible')
    cy.matchImage()
  })

  it(`Check status of waiting`, () => {
    cy.mount(<CardStatus text={text} variant="waiting" />)
    cy.findByRole('status').should('be.visible')
    cy.findByText(text).should('be.visible')
    cy.matchImage()
  })
})
