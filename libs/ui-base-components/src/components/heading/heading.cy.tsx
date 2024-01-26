import { Heading } from './heading'

describe(Heading.name, () => {
  const text = 'Component Heading'
  it('using size variations', () => {
    cy.mount(
      <>
        <Heading size="large" as="h1">
          {text}
        </Heading>
        <Heading size="medium" as="h2">
          {text}
        </Heading>
        <Heading size="small" as="h3">
          {text}
        </Heading>
      </>,
    )
    cy.findAllByRole('heading').should('be.visible')
    cy.matchImage()
  })

  it('Should render Heading dark mode', () => {
    cy.mount(
      <>
        <Heading size="large" as="h1">
          {text}
        </Heading>
        <Heading size="medium" as="h2">
          {text}
        </Heading>
        <Heading size="small" as="h3">
          {text}
        </Heading>
      </>,
    )
    cy.addDarkMode()
    cy.matchImage()
  })
})
