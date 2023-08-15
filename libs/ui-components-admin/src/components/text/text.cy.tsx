import { Text } from './text'

const disclaimerSelector = '[data-testid="disclaimer"]'

describe(Text.name, () => {
  const text = 'Testando disclaimer'

  beforeEach(() => {
    cy.mount(<Text text={text} />)
  })

  it('uses custom text for disclaimer paragraph', () => {
    cy.get(`${disclaimerSelector} > p`).should('have.text', text)
  })

  it('should match the snapshot', () => {
    cy.matchImage()
  })
})
