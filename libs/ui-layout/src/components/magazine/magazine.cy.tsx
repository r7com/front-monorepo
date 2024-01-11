import { Magazine } from './magazine'
import { Block } from './mocks/mocks'

const MagazineOne = (
  <Magazine.One>
    <Block />
    <Block />
    <Block />
  </Magazine.One>
)

const MagazineTwo = (
  <Magazine.Two>
    <Block />
    <Block />
  </Magazine.Two>
)

describe('Magazine Grids - Desktop', () => {
  beforeEach(() => cy.viewport('macbook-11'))

  it('should render magazine-one grid with three elements', () => {
    cy.mount(MagazineOne)

    cy.findAllByText(/Large Main Block/i)
      .should('be.visible')
      .and('have.length', 3)

    cy.matchImage()
  })

  it('should render magazine-two grid with two elements', () => {
    cy.mount(MagazineTwo)

    cy.findAllByText(/Large Main Block/i)
      .should('be.visible')
      .and('have.length', 2)

    cy.matchImage()
  })
})

describe('Magazine Grids - Tablet', () => {
  beforeEach(() => cy.viewport('ipad-mini'))

  it('should render magazine-one grids with three elements', () => {
    cy.mount(MagazineOne)

    cy.findAllByText(/Large Main Block/i)
      .should('be.visible')
      .and('have.length', 3)

    cy.matchImage()
  })

  it('should render magazine-two grids with two elements', () => {
    cy.mount(MagazineTwo)

    cy.findAllByText(/Large Main Block/i)
      .should('be.visible')
      .and('have.length', 2)

    cy.matchImage()
  })
})

describe('Magazine Grids - Mobile', () => {
  beforeEach(() => cy.viewport('iphone-se2'))

  it('should render magazine-one grid with three elements', () => {
    cy.mount(MagazineOne)

    cy.findAllByText(/Large Main Block/i)
      .should('be.visible')
      .and('have.length', 3)

    cy.matchImage()
  })

  it('should render magazine-two grid with two elements', () => {
    cy.mount(MagazineTwo)

    cy.findAllByText(/Large Main Block/i)
      .should('be.visible')
      .and('have.length', 2)

    cy.matchImage()
  })
})
