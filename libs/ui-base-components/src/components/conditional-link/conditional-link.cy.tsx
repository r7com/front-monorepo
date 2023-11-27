import { ConditionalLink } from './conditional-link'

describe(`${ConditionalLink.name}`, () => {
  it('should render conditional link with link', () => {
    cy.mount(
      <ConditionalLink href="https://www.google.com">
        <span>I am a link</span>
      </ConditionalLink>,
    )
    cy.findByRole('link').should('be.visible')
  })

  it('should render conditional link without link', () => {
    cy.mount(
      <ConditionalLink>
        <span>I am not a link</span>
      </ConditionalLink>,
    )
    cy.findByRole('link').should('not.exist')
  })
})
