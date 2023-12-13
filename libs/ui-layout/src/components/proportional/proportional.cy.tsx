import { Proportional } from '.'

const Block = () => (
  <div
    data-testid="block"
    className="layout-h-[280px] layout-bg-neutral-low-400 layout-items-center layout-justify-center layout-flex"
  >
    Large Main Block
  </div>
)

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

describe('Proportional Grids', () => {
  beforeEach(() => cy.viewport('macbook-11'))

  it('should render proportional-one grid with one element', () => {
    cy.mount(ProportionalOne)

    cy.get('[data-testid="block"]').should('be.visible').and('have.length', 1)

    cy.matchImage()
  })

  it('should render proportional-two grid with two element', () => {
    cy.mount(ProportionalTwo)

    cy.get('[data-testid="block"]').should('be.visible').and('have.length', 2)

    cy.matchImage()
  })

  it('should render proportional-three grid with three element', () => {
    cy.mount(ProportionalThree)

    cy.get('[data-testid="block"]').should('be.visible').and('have.length', 3)

    cy.matchImage()
  })

  it('should render proportional-four grid with four element', () => {
    cy.mount(ProportionalFour)

    cy.get('[data-testid="block"]').should('be.visible').and('have.length', 4)

    cy.matchImage()
  })
})
