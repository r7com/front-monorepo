describe('ui-components-admin', function () {
  it('should display correct first surname', function () {
    cy.mount('<my-component first="Ronaldo" last="Maciel"></my-component>')
    cy.get('my-component').contains('Ronaldo')
  })

  it('should display correct last surname', function () {
    cy.mount('<my-component first="Ronaldo" last="Maciel"></my-component>')
    cy.get('my-component').contains('Maciel')
  })
})
