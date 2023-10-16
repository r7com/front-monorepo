import { Title } from './title'

describe(Title.name, () => {
  const text = 'Component Title'
  it('using size variations', () => {
    cy.mount(
      <>
        <Title size="large" as="h1">
          {text}
        </Title>
        <Title size="medium" as="h2">
          {text}
        </Title>
        <Title size="small" as="h3">
          {text}
        </Title>
      </>,
    )
    cy.findAllByRole('heading').should('be.visible')
    cy.findAllByText(text).should('be.visible')
    cy.matchImage()
  })
})
