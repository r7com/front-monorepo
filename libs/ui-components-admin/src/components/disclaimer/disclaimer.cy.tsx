import { Disclaimer } from './disclaimer'

const disclaimerSelector = '[data-testid="disclaimer"]'

describe(Disclaimer.name, () => {
  const text = 'Testando disclaimer'

  beforeEach(() => {
    cy.mount(<Disclaimer text={text} />)
  })

  it('uses custom text for disclaimer paragraph', () => {
    cy.get(`${disclaimerSelector} > p`).should('have.text', text)
  })

  it('should match the snapshot', () => {
    cy.matchImage()
  })
})
