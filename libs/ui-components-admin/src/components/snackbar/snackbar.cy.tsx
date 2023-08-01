import { Snackbar } from './snackbar'

const snackbarSelector = '[data-testid="snackbar"]'

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
})
