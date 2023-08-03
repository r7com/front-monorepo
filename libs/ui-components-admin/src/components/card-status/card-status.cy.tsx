import { CardStatus } from './card-status'

describe(CardStatus.name, () => {
  const text = 'Card Status'

  it(`Check status of success`, () => {
    cy.mount(<CardStatus text={text} variant="success" />)
    cy.get('[data-testid="card-status"]').should('be.visible')
    cy.get('[data-testid="card-status"] > p').should('have.text', text)
    cy.matchImage()
  })

  it(`Check status of error`, () => {
    cy.mount(<CardStatus text={text} variant="error" />)
    cy.get('[data-testid="card-status"]').should('be.visible')
    cy.get('[data-testid="card-status"] > p').should('have.text', text)
    cy.matchImage()
  })

  it(`Check status of helper`, () => {
    cy.mount(<CardStatus text={text} variant="helper" />)
    cy.get('[data-testid="card-status"]').should('be.visible')
    cy.get('[data-testid="card-status"] > p').should('have.text', text)
    cy.matchImage()
  })

  it(`Check status of info`, () => {
    cy.mount(<CardStatus text={text} variant="info" />)
    cy.get('[data-testid="card-status"]').should('be.visible')
    cy.get('[data-testid="card-status"] > p').should('have.text', text)
    cy.matchImage()
  })

  it(`Check status of waiting`, () => {
    cy.mount(<CardStatus text={text} variant="waiting" />)
    cy.get('[data-testid="card-status"]').should('be.visible')
    cy.get('[data-testid="card-status"] > p').should('have.text', text)
    cy.matchImage()
  })
})
