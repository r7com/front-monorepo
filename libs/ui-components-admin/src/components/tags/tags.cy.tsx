import { Tags } from './tags'

describe('Tags Component', () => {
  it('renders a primary large tag', () => {
    cy.mount(
      <Tags color="primary" size="large">
        Primary Large
      </Tags>,
    )
    cy.contains('Primary Large').should('exist')
    cy.matchImage()
  })

  it('renders a primary medium tag', () => {
    cy.mount(
      <Tags color="primary" size="medium">
        Primary Medium
      </Tags>,
    )
    cy.contains('Primary Medium').should('exist')
    cy.matchImage()
  })

  it('renders a primary small tag', () => {
    cy.mount(
      <Tags color="primary" size="small">
        Primary Small
      </Tags>,
    )
    cy.contains('Primary Small').should('exist')
    cy.matchImage()
  })

  it('renders a secondary large tag', () => {
    cy.mount(
      <Tags color="secondary" size="large">
        Secondary Large
      </Tags>,
    )
    cy.contains('Secondary Large').should('exist')
    cy.matchImage()
  })

  it('renders a secondary medium tag', () => {
    cy.mount(
      <Tags color="secondary" size="medium">
        Secondary Medium
      </Tags>,
    )
    cy.contains('Secondary Medium').should('exist')
    cy.matchImage()
  })

  it('renders a secondary small tag', () => {
    cy.mount(
      <Tags color="secondary" size="small">
        Secondary Small
      </Tags>,
    )
    cy.contains('Secondary Small').should('exist')
    cy.matchImage()
  })

  it('renders a tertiary large tag', () => {
    cy.mount(
      <Tags color="tertiary" size="large">
        Tertiary Large
      </Tags>,
    )
    cy.contains('Tertiary Large').should('exist')
    cy.matchImage()
  })

  it('renders a tertiary medium tag', () => {
    cy.mount(
      <Tags color="tertiary" size="medium">
        Tertiary Medium
      </Tags>,
    )
    cy.contains('Tertiary Medium').should('exist')
    cy.matchImage()
  })

  it('renders a tertiary small tag', () => {
    cy.mount(
      <Tags color="tertiary" size="small">
        Tertiary Small
      </Tags>,
    )
    cy.contains('Tertiary Small').should('exist')
    cy.matchImage()
  })

  it('renders a neutral large tag', () => {
    cy.mount(
      <Tags color="neutral" size="large">
        Neutral Large
      </Tags>,
    )
    cy.contains('Neutral Large').should('exist')
    cy.matchImage()
  })

  it('renders a neutral medium tag', () => {
    cy.mount(
      <Tags color="neutral" size="medium">
        Neutral Medium
      </Tags>,
    )
    cy.contains('Neutral Medium').should('exist')
    cy.matchImage()
  })

  it('renders a neutral small tag', () => {
    cy.mount(
      <Tags color="neutral" size="small">
        Neutral Small
      </Tags>,
    )
    cy.contains('Neutral Small').should('exist')
    cy.matchImage()
  })
})
