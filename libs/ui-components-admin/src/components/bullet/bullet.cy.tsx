import { Bullet } from './bullet'

describe(Bullet.name, () => {
  const text = 'testando o componente bullet'
  it(`check status published`, () => {
    cy.mount(<Bullet text={text} variant="published" />)
    cy.get('[data-testid="bullet"]').should('be.visible')
    cy.get('[data-testid="bullet"] > p').should('have.text', text)
    cy.matchImage()
  })

  it(`check status waiting`, () => {
    cy.mount(<Bullet text={text} variant="waiting" />)
    cy.get('[data-testid="bullet"]').should('be.visible')
    cy.get('[data-testid="bullet"] > p').should('have.text', text)
    cy.matchImage()
  })

  it(`check status closed`, () => {
    cy.mount(<Bullet text={text} variant="closed" />)
    cy.get('[data-testid="bullet"]').should('be.visible')
    cy.get('[data-testid="bullet"] > p').should('have.text', text)
    cy.matchImage()
  })

  it(`check status paused`, () => {
    cy.mount(<Bullet text={text} variant="paused" />)
    cy.get('[data-testid="bullet"]').should('be.visible')
    cy.get('[data-testid="bullet"] > p').should('have.text', text)
    cy.matchImage()
  })
})
