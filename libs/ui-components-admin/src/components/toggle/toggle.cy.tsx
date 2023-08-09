import { Toggle } from './toggle'

const toggleSelector = '[data-testid="toggle"]'

describe(Toggle.name, () => {
  it('render default toggle', () => {
    cy.mount(<Toggle></Toggle>)

    cy.get(toggleSelector).should('be.visible')
    cy.matchImage()
  })

  it('render large toggle', () => {
    cy.mount(<Toggle size="large"></Toggle>)

    cy.get(toggleSelector).should('be.visible')
    cy.matchImage()
  })

  it('render medium toggle', () => {
    cy.mount(<Toggle size="medium"></Toggle>)

    cy.get(toggleSelector).should('be.visible')
    cy.matchImage()
  })

  it('render small toggle', () => {
    cy.mount(<Toggle size="small"></Toggle>)

    cy.get(toggleSelector).should('be.visible')
    cy.matchImage()
  })

  it('render checked toggle', () => {
    cy.mount(<Toggle checked></Toggle>)

    cy.get(toggleSelector).should('be.visible')
    cy.matchImage()
  })

  it('render unchecked toggle', () => {
    cy.mount(<Toggle checked={false}></Toggle>)

    cy.get(toggleSelector).should('be.visible')
    cy.matchImage()
  })

  it('render disabled toggle', () => {
    cy.mount(<Toggle disabled></Toggle>)

    cy.get(toggleSelector).should('be.visible')
    cy.matchImage()
  })

  it('render toggle without icon', () => {
    cy.mount(<Toggle icon={false}></Toggle>)

    cy.get(toggleSelector).should('be.visible')
    cy.matchImage()
  })
})
