import { Toggle } from './toggle'

describe(Toggle.name, () => {
  it('check and uncheck toggle', () => {
    cy.mount(<Toggle name="teste" />)

    cy.findByRole('checkbox').check({ force: true })
    cy.findByRole('checkbox').should('be.checked')
    cy.findByRole('checkbox').uncheck({ force: true })
    cy.findByRole('checkbox').should('not.be.checked')

    cy.matchImage()
  })

  it('render default toggle', () => {
    cy.mount(<Toggle name="teste" />)

    cy.findByRole('checkbox').should('be.visible')
    cy.matchImage()
  })

  it('render large toggle', () => {
    cy.mount(<Toggle name="teste" size="large" />)

    cy.findByRole('checkbox').should('be.visible')
    cy.matchImage()
  })

  it('render medium toggle', () => {
    cy.mount(<Toggle name="teste" size="medium" />)

    cy.findByRole('checkbox').should('be.visible')
    cy.matchImage()
  })

  it('render small toggle', () => {
    cy.mount(<Toggle name="teste" size="small" />)

    cy.findByRole('checkbox').should('be.visible')
    cy.matchImage()
  })

  it('render checked toggle', () => {
    cy.mount(<Toggle name="teste" checked={true} />)

    cy.findByRole('checkbox').should('be.visible')
    cy.matchImage()
  })

  it('render unchecked toggle', () => {
    cy.mount(<Toggle name="teste" checked={false} />)

    cy.findByRole('checkbox').should('be.visible')
    cy.matchImage()
  })

  it('render disabled toggle', () => {
    cy.mount(<Toggle name="teste" disabled />)

    cy.findByRole('checkbox').should('be.visible')
    cy.matchImage()
  })

  it('render toggle without icon', () => {
    cy.mount(<Toggle name="teste" disableIcon />)

    cy.findByRole('checkbox').should('be.visible')
    cy.matchImage()
  })
})
