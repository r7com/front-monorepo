import { Title } from './title'

describe(Title.name, () => {
  const text = 'Teste'
  it('using fontSize', () => {
    cy.mount(
      <>
        <Title as="h1" style="subtitleLarge">
          {text}
        </Title>
        <Title as="h2" style="subtitleMedium">
          {text}
        </Title>
        <Title as="h3" style="titleLarge">
          {text}
        </Title>
        <Title as="h4" style="titleMedium">
          {text}
        </Title>
        <Title as="h5" style="titleSmall">
          {text}
        </Title>
        <Title as="h6" style="subtitleLarge">
          {text}
        </Title>
      </>,
    )
    cy.findAllByText(text).each(element => {
      expect(element.text()).to.be.equal(text)
    })
    cy.findAllByText(text).should('be.visible')
    cy.matchImage()
  })
})
