import { Card } from '../'

const selector = '[data-testid="label"]'

describe(Card.Label.name, () => {
  it('should render "type sponsored-by" variant', () => {
    cy.mount(
      <Card.Label
        type="sponsored-by"
        sponsoredByImage="http://img.r7.com/images/concurso-publico-14032022123440824?dimensions=128x128"
        sponsoredByImageDesc="Human hand writting in a paper"
        sponsoredByTitle="Sponsored by"
        sponsoredByUrl="http://www.google.com"
      />,
    )
    cy.findByRole('link')
      .should('be.visible')
      .within(() => {
        cy.findByRole('img').should('be.visible')
      })
    cy.matchImage()
  })

  it('should render all other "type" variants', () => {
    cy.mount(
      <div className="card-flex card-flex-col card-items-end">
        <div className="card-w-[150px] card-h-[50px] card-relative">
          <Card.Label type="aclr" />
        </div>
        <div className="card-w-[150px] card-h-[50px] card-relative">
          <Card.Label type="blog" />
        </div>
        <div className="card-w-[150px] card-h-[50px] card-relative">
          <Card.Label type="live" />
        </div>
        <div className="card-w-[150px] card-h-[50px] card-relative">
          <Card.Label type="podcast" />
        </div>
        <div className="card-w-[150px] card-h-[50px] card-relative">
          <Card.Label type="studio" />
        </div>
        <div className="card-w-[150px] card-h-[50px] card-relative">
          <Card.Label type="voting" />
        </div>
      </div>,
    )
    cy.get(selector).should('be.visible').should('have.length', 6)
    cy.matchImage()
  })
})
