import { Snackbar } from './snackbar'

describe(`${Snackbar.name} variants`, () => {
  it('should render snackbar with type: informative', () => {
    cy.mount(<Snackbar message="mensagem" type="informative" open />)
    cy.findByRole('status').should('be.visible')
    cy.matchImage()
  })

  it('should render snackbar with type: positive', () => {
    cy.mount(<Snackbar message="mensagem" type="positive" open />)
    cy.findByRole('status').should('be.visible')
    cy.matchImage()
  })

  it('should render snackbar with type: alert', () => {
    cy.mount(<Snackbar message="mensagem" type="alert" open />)
    cy.findByRole('status').should('be.visible')
    cy.matchImage()
  })

  it('should render snackbar with type: error', () => {
    cy.mount(<Snackbar message="mensagem" type="error" open />)
    cy.findByRole('alert').should('be.visible')
    cy.matchImage()
  })
})
