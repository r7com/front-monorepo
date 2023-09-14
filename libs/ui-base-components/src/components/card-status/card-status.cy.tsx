import { CardStatus } from './card-status'

describe(`${CardStatus.name} variant options`, () => {
  const text = 'Card Status'
  const role = 'status'
  const byRoleText = (role: string, text: string) => {
    cy.findByRole(role).should('be.visible')
    cy.findByText(text).should('be.visible')
  }

  it(`should render success status`, () => {
    cy.mount(<CardStatus text={text} variant="success" />)
    byRoleText(role, text)
    cy.matchImage()
  })

  it(`should render error status`, () => {
    cy.mount(<CardStatus text={text} variant="error" />)
    byRoleText(role, text)
    cy.matchImage()
  })

  it(`should render helper status`, () => {
    cy.mount(<CardStatus text={text} variant="helper" />)
    byRoleText(role, text)
    cy.matchImage()
  })

  it(`should render info status`, () => {
    cy.mount(<CardStatus text={text} variant="info" />)
    byRoleText(role, text)
    cy.matchImage()
  })

  it(`should render waiting status`, () => {
    cy.mount(<CardStatus text={text} variant="waiting" />)
    byRoleText(role, text)
    cy.matchImage()
  })
})
