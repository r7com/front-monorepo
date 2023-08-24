import { Snackbar } from './snackbar'

const snackbarSelector = '[data-testid="snackbar"]'

describe(Snackbar.name, () => {
  it('render snackbar informative', () => {
    cy.mount(<Snackbar message="mensagem" type="informative" />)
    cy.get(snackbarSelector).should('be.visible')
    cy.matchImage()
  })

  it('render snackbar positive', () => {
    cy.mount(<Snackbar message="mensagem" type="positive" />)
    cy.get(snackbarSelector).should('be.visible')
    cy.matchImage()
  })

  it('render snackbar alert', () => {
    cy.mount(<Snackbar message="mensagem" type="alert" />)
    cy.get(snackbarSelector).should('be.visible')
    cy.matchImage()
  })

  it('render snackbar error', () => {
    cy.mount(<Snackbar message="mensagem" type="error" />)
    cy.get(snackbarSelector).should('be.visible')
    cy.matchImage()
  })
})
