import { CardStatus } from './card-status'

describe(CardStatus.name, () => {
  const texto = 'Card Status'

  it('Check status of success', () => {
    cy.mount(<CardStatus text={texto} variant="success" />)
    cy.get('[data-test="card-status"] > svg').should('exist')
    cy.get('[data-test="card-status"] > p').should('have.text', texto)
  })

  it('Check status of error', () => {
    cy.mount(<CardStatus text={texto} variant="error" />)
    cy.get('[data-test="card-status"] > svg').should('exist')
    cy.get('[data-test="card-status"] > p').should('have.text', texto)
  })

  it('Check status of helper', () => {
    cy.mount(<CardStatus text={texto} variant="helper" />)
    cy.get('[data-test="card-status"] > svg').should('exist')
    cy.get('[data-test="card-status"] > p').should('have.text', texto)
  })

  it('Check status of info', () => {
    cy.mount(<CardStatus text={texto} variant="info" />)
    cy.get('[data-test="card-status"] > svg').should('exist')
    cy.get('[data-test="card-status"] > p').should('have.text', texto)
  })
})
