import { Snackbar } from './snackbar'

describe(Snackbar.name, () => {
  it('render snackbar informative', () => {
    cy.mount(<Snackbar message="mensagem" type="informative" />)
    cy.findByRole('status').should('be.visible')
    cy.matchImage()
  })

  it('render snackbar positive', () => {
    cy.mount(<Snackbar message="mensagem" type="positive" />)
    cy.findByRole('status').should('be.visible')
    cy.matchImage()
  })

  it('render snackbar alert', () => {
    cy.mount(<Snackbar message="mensagem" type="alert" />)
    cy.findByRole('status').should('be.visible')
    cy.matchImage()
  })

  it('render snackbar error', () => {
    cy.mount(<Snackbar message="mensagem" type="error" />)
    cy.findByRole('alert').should('be.visible')
    cy.matchImage()
  })
})
