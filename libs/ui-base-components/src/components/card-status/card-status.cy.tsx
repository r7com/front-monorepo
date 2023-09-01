import { CardStatus } from './card-status'

describe(`should render all its ${CardStatus.name}`, () => {
  const text = 'Card Status'
  const role = 'status'
  const byRoleText = (role: string, text: string) => {
    cy.findByRole(role).should('be.visible')
    cy.findByText(text).should('be.visible')
  }

  it(`Check render of success`, () => {
    cy.mount(<CardStatus text={text} variant="success" />)
    byRoleText(role, text)
    cy.matchImage()
  })

  it(`Check render of error`, () => {
    cy.mount(<CardStatus text={text} variant="error" />)
    byRoleText(role, text)
    cy.matchImage()
  })

  it(`Check render of helper`, () => {
    cy.mount(<CardStatus text={text} variant="helper" />)
    byRoleText(role, text)
    cy.matchImage()
  })

  it(`Check render of info`, () => {
    cy.mount(<CardStatus text={text} variant="info" />)
    byRoleText(role, text)
    cy.matchImage()
  })

  it(`Check status of waiting`, () => {
    cy.mount(<CardStatus text={text} variant="waiting" />)
    byRoleText(role, text)
    cy.matchImage()
  })
})
