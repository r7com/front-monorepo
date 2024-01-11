import { Proportional } from './proportional'
import { Block } from './mocks/mocks'

const ProportionalOne = (
  <Proportional.One>
    <Block />
  </Proportional.One>
)

const ProportionalTwo = (
  <Proportional.Two>
    <Block />
    <Block />
  </Proportional.Two>
)

const ProportionalThree = (
  <Proportional.Three>
    <Block />
    <Block />
    <Block />
  </Proportional.Three>
)

const ProportionalFour = (
  <Proportional.Four>
    <Block />
    <Block />
    <Block />
    <Block />
  </Proportional.Four>
)

describe('Proportional Grids - Desktop', () => {
  beforeEach(() => cy.viewport('macbook-11'))

  it('should render proportional-one grid with one element', () => {
    cy.mount(ProportionalOne)

    cy.findAllByText(/Large Main Block/i)
      .should('be.visible')
      .and('have.length', 1)

    cy.matchImage()
  })

  it('should render proportional-two grid with two element', () => {
    cy.mount(ProportionalTwo)

    cy.findAllByText(/Large Main Block/i)
      .should('be.visible')
      .and('have.length', 2)

    cy.matchImage()
  })

  it('should render proportional-three grid with three element', () => {
    cy.mount(ProportionalThree)

    cy.findAllByText(/Large Main Block/i)
      .should('be.visible')
      .and('have.length', 3)

    cy.matchImage()
  })

  it('should render proportional-four grid with four element', () => {
    cy.mount(ProportionalFour)

    cy.findAllByText(/Large Main Block/i)
      .should('be.visible')
      .and('have.length', 4)

    cy.matchImage()
  })
})

describe('Proportional Grids - Tablet', () => {
  beforeEach(() => cy.viewport('ipad-mini'))

  it('should render proportional-one grid with one element', () => {
    cy.mount(ProportionalOne)

    cy.findAllByText(/Large Main Block/i)
      .should('be.visible')
      .and('have.length', 1)

    cy.matchImage()
  })

  it('should render proportional-two grid with two element', () => {
    cy.mount(ProportionalTwo)

    cy.findAllByText(/Large Main Block/i)
      .should('be.visible')
      .and('have.length', 2)

    cy.matchImage()
  })

  it('should render proportional-three grid with three element', () => {
    cy.mount(ProportionalThree)

    cy.findAllByText(/Large Main Block/i)
      .should('be.visible')
      .and('have.length', 3)

    cy.matchImage()
  })

  it('should render proportional-four grid with four element', () => {
    cy.mount(ProportionalFour)

    cy.findAllByText(/Large Main Block/i)
      .should('be.visible')
      .and('have.length', 4)

    cy.matchImage()
  })
})

describe('Proportional Grids - Mobile', () => {
  beforeEach(() => cy.viewport('iphone-se2'))

  it('should render proportional-one grid with one element', () => {
    cy.mount(ProportionalOne)

    cy.findAllByText(/Large Main Block/i)
      .should('be.visible')
      .and('have.length', 1)

    cy.matchImage()
  })

  it('should render proportional-two grid with two elements', () => {
    cy.mount(ProportionalTwo)

    cy.findAllByText(/Large Main Block/i)
      .should('be.visible')
      .and('have.length', 2)

    cy.matchImage()
  })

  it('should render proportional-three grid with three elements', () => {
    cy.mount(ProportionalThree)

    cy.findAllByText(/Large Main Block/i)
      .should('be.visible')
      .and('have.length', 3)

    cy.matchImage()
  })

  it('should render proportional-four grid with four elements', () => {
    cy.mount(ProportionalFour)

    cy.findAllByText(/Large Main Block/i)
      .should('be.visible')
      .and('have.length', 4)

    cy.matchImage()
  })
})
