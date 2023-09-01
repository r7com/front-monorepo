import { Snackbar } from './snackbar'

describe(Snackbar.name, () => {
  it('render snackbar informative', () => {
    cy.mount(<Snackbar message="mensagem" type="informative" open />)
    cy.findByRole('status').should('be.visible')
    cy.matchImage()
  })

  it('render snackbar positive', () => {
    cy.mount(<Snackbar message="mensagem" type="positive" open />)
    cy.findByRole('status').should('be.visible')
    cy.matchImage()
  })

  it('render snackbar alert', () => {
    cy.mount(<Snackbar message="mensagem" type="alert" open />)
    cy.findByRole('status').should('be.visible')
    cy.matchImage()
  })

  it('render snackbar error', () => {
    cy.mount(<Snackbar message="mensagem" type="error" open />)
    cy.findByRole('alert').should('be.visible')
    cy.matchImage()
  })
})
