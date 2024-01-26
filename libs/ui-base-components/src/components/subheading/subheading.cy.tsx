import { Subheading } from './subheading'

describe(Subheading.name, () => {
  const text = 'Component Subheading'
  it('using size variations', () => {
    cy.mount(
      <>
        <Subheading size="large" as="h2">
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

  it('should render subheading dark mode', () => {
    cy.mount(
      <>
        <Subheading size="large" as="h2">
          {text}
        </Subheading>
        <Subheading size="small" as="h4">
          {text}
        </Subheading>
      </>,
    )
    cy.addDarkMode()
    cy.matchImage()
  })
})
