import { Snackbar } from './snackbar'

const snackbarSelector = '[data-testid="snackbar"]'
const dismissTime = 4000

describe(Snackbar.name, () => {
  it('render snackbar default', () => {
    cy.mount(<Snackbar message="mensagem" type="default" position="bottom-left" />)
    cy.get(snackbarSelector).should('be.visible')
    cy.matchImage()
  })

  it('render snackbar success', () => {
    cy.mount(<Snackbar message="mensagem" type="success" position="bottom-right" />)
    cy.get(snackbarSelector).should('be.visible')
    cy.matchImage()
  })

  it('render snackbar alert', () => {
    cy.mount(<Snackbar message="mensagem" type="alert" position="top-left" />)
    cy.get(snackbarSelector).should('be.visible')
    cy.matchImage()
  })

  it('render snackbar warning', () => {
    cy.mount(<Snackbar message="mensagem" type="warning" position="top-right" />)
    cy.get(snackbarSelector).should('be.visible')
    cy.matchImage()
  })

  it(`snackbar should be dismissed in ${dismissTime}mm`, () => {
    cy.mount(<Snackbar message="mensagem" dismiss={dismissTime} />)
    cy.get(snackbarSelector).should('be.visible')
    cy.wait(dismissTime)
    cy.get(snackbarSelector).should('not.be.visible')
  })

  it('snackbar should be dismissed with button click', () => {
    cy.mount(<Snackbar message="mensagem" />)
    cy.get(snackbarSelector).should('be.visible')
    cy.get(`${snackbarSelector} button`).click()
    cy.get(snackbarSelector).should('not.be.visible')
  })
})
