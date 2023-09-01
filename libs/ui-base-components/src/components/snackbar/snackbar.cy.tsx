import { Snackbar } from './snackbar'

describe(`${Snackbar.name} variants`, () => {
  it('should renders snackbar with type: informative', () => {
    cy.mount(<Snackbar message="mensagem" type="informative" open />)
    cy.findByRole('status').should('be.visible')
    cy.matchImage()
  })

  it('should renders snackbar with type: positive', () => {
    cy.mount(<Snackbar message="mensagem" type="positive" open />)
    cy.findByRole('status').should('be.visible')
    cy.matchImage()
  })

  it('should renders snackbar with type: alert', () => {
    cy.mount(<Snackbar message="mensagem" type="alert" open />)
    cy.findByRole('status').should('be.visible')
    cy.matchImage()
  })

  it('should renders snackbar with type: error', () => {
    cy.mount(<Snackbar message="mensagem" type="error" open />)
    cy.findByRole('alert').should('be.visible')
    cy.matchImage()
  })
})
