import { ContrastControl } from './contrast-control'

describe('ContrastControl', () => {
  it('Should render Contrast Control', () => {
    cy.mount(<ContrastControl />)

    cy.findByRole('button').should('be.visible')
    cy.matchImage()
  })

  it('Should click on Contrast Control', () => {
    cy.mount(<ContrastControl />)

    cy.findByRole('button').click()
  })
})
