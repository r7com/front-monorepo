import { Card } from './'

describe(Card.name, () => {
  it('should render default card', () => {
    cy.mount(
      <Card newsTitle="I am a news" newsUrl="https://www.r7.com">
        <Card.Title>I am a news</Card.Title>
      </Card>,
    )
    cy.findByRole('article')
      .should('be.visible')
      .within(() => {
        cy.findByRole('link').should('be.visible')
      })
    cy.matchImage()
  })
})
