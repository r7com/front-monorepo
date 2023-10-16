import { Subtitle } from './subtitle'

describe(Subtitle.name, () => {
  const text = 'Component Subtitle'
  it('using size variations', () => {
    cy.mount(
      <>
        <Subtitle size="large" as="h2">
          {text}
        </Subtitle>
        <Subtitle size="medium" as="h3">
          {text}
        </Subtitle>
        <Subtitle size="small" as="h4">
          {text}
        </Subtitle>
      </>,
    )
    cy.findAllByRole('heading').should('be.visible')
    cy.findAllByText(text).should('be.visible')
    cy.matchImage()
  })
})
