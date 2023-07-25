import { Disclaimer } from './disclaimer'

describe(Disclaimer.name, () => {
  const text = 'Testando disclaimer'

  beforeEach(() => {
    cy.mount(<Disclaimer text={text} />)
  })

  it('uses custom text for disclaimer paragraph', () => {
    cy.findByText(text)
    cy.should('be.visible')
  })

  it('should render svg', () => {
    cy.get('svg').should('be.visible')
  })

  it('should match the snapshot', () => {
    cy.get('[data-cy="disclaimer"]')
    cy.matchImage()
  })
})
