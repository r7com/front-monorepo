import { CardStatus } from './card-status'

describe(`should render all its ${CardStatus.name}`, () => {
  const text = 'Card Status'
  const al = `[aria-label="status"]`

  it(`Check status of success`, () => {
    cy.mount(<CardStatus text={text} variant="success" />)
    cy.get(al).should('be.visible')
    cy.findByText(text).should('be.visible')
    cy.matchImage()
  })

  it(`Check status of error`, () => {
    cy.mount(<CardStatus text={text} variant="error" />)
    cy.get(al).should('be.visible')
    cy.findByText(text).should('be.visible')
    cy.matchImage()
  })

  it(`Check status of helper`, () => {
    cy.mount(<CardStatus text={text} variant="helper" />)
    cy.get(al).should('be.visible')
    cy.findByText(text).should('be.visible')
    cy.matchImage()
  })

  it(`Check status of info`, () => {
    cy.mount(<CardStatus text={text} variant="info" />)
    cy.get(al).should('be.visible')
    cy.findByText(text).should('be.visible')
    cy.matchImage()
  })

  it(`Check status of waiting`, () => {
    cy.mount(<CardStatus text={text} variant="waiting" />)
    cy.get(al).should('be.visible')
    cy.findByText(text).should('be.visible')
    cy.matchImage()
  })
})
