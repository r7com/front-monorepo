describe('ui-components-admin', function () {
  it('should display correct first and last surname props', function () {
    cy.mount('<my-component first="Ronaldo" last="Maciel"></my-component>')
    cy.get('my-component')
      .shadow()
      .findByRole('button', { name: /Mostrar bem vindo/i })
      .click()
    cy.get('my-component')
      .shadow()
      .findByText(/Hello, World! I'm Ronaldo Maciel/i)
      .should('be.visible')
      .matchImage()
  })
})
