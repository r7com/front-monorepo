import { ConditionalLink } from '@r7/ui-base-components'
import { Card } from '..'

describe(Card.Figure.name, () => {
  it('should render default image', () => {
    cy.mount(
      <Card.Figure className="card-w-[200px] card-mb-xxxs">
        <img
          src="//img.r7.com/images/pantano-australia-rosa-brilhante-04102023182425856?&dimensions=300x300"
          alt="Human hand writting in a paper"
        />
      </Card.Figure>,
    )
    cy.findByRole('figure').should('be.visible')
    cy.findByAltText(/Human hand writting in a paper/i)
      .should('be.visible')
      .and('have.prop', 'naturalWidth')
      .should('be.greaterThan', 0)
    cy.matchImage()
  })

  it('should render all format variants', () => {
    cy.mount(
      <>
        <Card.Figure className="card-w-[200px] card-mb-xxxs">
          <img
            src="//img.r7.com/images/pantano-australia-rosa-brilhante-04102023182425856?&dimensions=300x300"
            alt="Human hand writting in a paper"
          />
        </Card.Figure>
        <Card.Figure className="card-w-[200px] card-mb-xxxs" format="landscape">
          <img
            src="//img.r7.com/images/pantano-australia-rosa-brilhante-04102023182425856?&dimensions=300x300"
            alt="Human hand writting in a paper"
          />
        </Card.Figure>
        <Card.Figure className="card-w-[200px] card-mb-xxxs" format="portrait">
          <img
            src="//img.r7.com/images/pantano-australia-rosa-brilhante-04102023182425856?&dimensions=300x300"
            alt="Human hand writting in a paper"
            className="card-h-full"
          />
        </Card.Figure>
      </>,
    )
    cy.findAllByRole('figure').should('be.visible')
    cy.matchImage()
  })

  it('should render image with shadow', () => {
    cy.mount(
      <Card.Figure className="card-w-[200px] card-mb-xxxs" shadow>
        <img
          src="//img.r7.com/images/pantano-australia-rosa-brilhante-04102023182425856?&dimensions=300x300"
          alt="Human hand writting in a paper"
        />
      </Card.Figure>,
    )
    cy.findByRole('figure').should('be.visible')
    cy.matchImage()
  })

  it('should render image with link', () => {
    cy.mount(
      <ConditionalLink href="https://www.google.com" title="Google">
        <Card.Figure className="card-w-[200px] card-mb-xxxs">
          <img
            src="//img.r7.com/images/pantano-australia-rosa-brilhante-04102023182425856?&dimensions=300x300"
            alt="Human hand writting in a paper"
          />
        </Card.Figure>
      </ConditionalLink>,
    )
    cy.findByRole('link')
      .should('be.visible')
      .within(() => {
        cy.findByRole('figure').should('be.visible')
      })
  })
})