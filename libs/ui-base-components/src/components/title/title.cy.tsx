import { Title } from './title'

describe(Title.name, () => {
  const text = 'Component Title'
  it('using size variations', () => {
    cy.mount(
      <>
        <Title size="large">{text}</Title>
        <Title size="medium">{text}</Title>
        <Title size="small">{text}</Title>
      </>,
    )
    cy.findAllByText(text).each(element => {
      expect(element.text()).to.be.equal(text)
    })
    cy.findAllByText(text).should('be.visible')
    cy.matchImage()
  })
})
