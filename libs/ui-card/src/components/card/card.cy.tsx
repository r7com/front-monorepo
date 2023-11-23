import { Card } from './'

describe(Card.name, () => {
  it('should render default card', () => {
    cy.mount(
      <Card className="card-flex-col" newsUrlTitle="I am a news" newsUrl="https://www.r7.com">
        <Card.HatWrapper>
          <Card.HatImage
            imageSource="//img.r7.com/images/concurso-publico-14032022123440824?dimensions=128x128"
            description="Human hand writting in a paper"
          />
          <Card.HatTitle>News section</Card.HatTitle>
        </Card.HatWrapper>
        <Card.Title as="h2" fontStyle="heading-level-1">
          News title
        </Card.Title>
      </Card>,
    )
    cy.findByRole('article')
      .should('be.visible')
      .within(() => {
        cy.findByRole('link').should('be.visible')
      })
    cy.matchImage()
  })

  it('should render card without link', () => {
    cy.mount(
      <Card>
        <Card.HatWrapper>
          <Card.HatImage
            imageSource="//img.r7.com/images/concurso-publico-14032022123440824?dimensions=128x128"
            description="Human hand writting in a paper"
          />
          <Card.HatTitle>News section</Card.HatTitle>
        </Card.HatWrapper>
        <Card.Title as="h2" fontStyle="heading-level-1">
          News title
        </Card.Title>
      </Card>,
    )
    cy.findByRole('article')
      .should('be.visible')
      .within(() => {
        cy.findByRole('link').should('not.exist')
      })
  })
})
