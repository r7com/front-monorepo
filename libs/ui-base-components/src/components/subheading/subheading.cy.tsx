import { Subheading } from './subheading'

describe(Subheading.name, () => {
  const text = 'Component Subheading'
  it('using size variations', () => {
    cy.mount(
      <>
        <Subheading size="large" as="h2">
          {text}
        </Subheading>
        <Subheading size="medium" as="h3">
          {text}
        </Subheading>
        <Subheading size="small" as="h4">
          {text}
        </Subheading>
      </>,
    )
    cy.findAllByRole('heading').should('be.visible')
    cy.matchImage()
  })
})
