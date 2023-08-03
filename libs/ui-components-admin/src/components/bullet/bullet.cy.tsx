import { Bullet } from './bullet'

const bulletSelector = '[data-testid="bullet"]'

describe(Bullet.name, () => {
  const text = 'Bullet'
  it(`check status published`, () => {
    cy.mount(<Bullet text={text} variant="published" />)
    cy.get(`${bulletSelector}`).should('be.visible')
    cy.get(`${bulletSelector} > p`).should('have.text', text)
    cy.matchImage()
  })

  it(`check status waiting`, () => {
    cy.mount(<Bullet text={text} variant="waiting" />)
    cy.get(`${bulletSelector}`).should('be.visible')
    cy.get(`${bulletSelector} > p`).should('have.text', text)
    cy.matchImage()
  })

  it(`check status closed`, () => {
    cy.mount(<Bullet text={text} variant="closed" />)
    cy.get(`${bulletSelector}`).should('be.visible')
    cy.get(`${bulletSelector} > p`).should('have.text', text)
    cy.matchImage()
  })

  it(`check status paused`, () => {
    cy.mount(<Bullet text={text} variant="paused" />)
    cy.get(`${bulletSelector}`).should('be.visible')
    cy.get(`${bulletSelector} > p`).should('have.text', text)
    cy.matchImage()
  })
})
