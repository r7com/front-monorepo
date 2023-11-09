import { Card } from '../'

describe(Card.Image.name, () => {
  it('should render default image', () => {
    cy.mount(
      <Card.Image className="w-[200px] mb-xxxs">
        <img
          src="//img.r7.com/images/pantano-australia-rosa-brilhante-04102023182425856?&dimensions=300x300"
          alt="Human hand writting in a paper"
        />
      </Card.Image>,
    )
    cy.findByRole('figure').should('be.visible')
    cy.matchImage()
  })

  it('should render all format variants', () => {
    cy.mount(
      <>
        <Card.Image className="w-[200px] mb-xxxs">
          <img
            src="//img.r7.com/images/pantano-australia-rosa-brilhante-04102023182425856?&dimensions=300x300"
            alt="Human hand writting in a paper"
          />
        </Card.Image>
        <Card.Image className="w-[200px] mb-xxxs" format="landscape">
          <img
            src="//img.r7.com/images/pantano-australia-rosa-brilhante-04102023182425856?&dimensions=300x300"
            alt="Human hand writting in a paper"
          />
        </Card.Image>
        <Card.Image className="w-[200px] mb-xxxs" format="portrait">
          <img
            src="//img.r7.com/images/pantano-australia-rosa-brilhante-04102023182425856?&dimensions=300x300"
            alt="Human hand writting in a paper"
            className="h-full"
          />
        </Card.Image>
      </>,
    )
    cy.findAllByRole('figure').should('be.visible')
    cy.matchImage()
  })

  it('should render image with shadow', () => {
    cy.mount(
      <Card.Image className="w-[200px] mb-xxxs" shadow>
        <img
          src="//img.r7.com/images/pantano-australia-rosa-brilhante-04102023182425856?&dimensions=300x300"
          alt="Human hand writting in a paper"
        />
      </Card.Image>,
    )
    cy.findByRole('figure').should('be.visible')
    cy.matchImage()
  })

  it('should render image with link', () => {
    cy.mount(
      <Card.Image
        className="w-[200px] mb-xxxs"
        withLink
        newsUrl="https://www.google.com"
        newsUrlTitle="The McRib is back (again): How a McNugget shortage led to its rise"
      >
        <img
          src="//img.r7.com/images/pantano-australia-rosa-brilhante-04102023182425856?&dimensions=300x300"
          alt="Human hand writting in a paper"
        />
      </Card.Image>,
    )
    cy.findByRole('figure')
      .should('be.visible')
      .within(() => {
        cy.findByRole('link').should('be.visible')
      })
  })
})
