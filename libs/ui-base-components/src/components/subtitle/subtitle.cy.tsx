import { Subtitle } from './subtitle'

describe(Subtitle.name, () => {
  const text = 'Component Subtitle'
  it('using size variations', () => {
    cy.mount(
      <>
        <Subtitle size="large">{text}</Subtitle>
        <Subtitle size="medium">{text}</Subtitle>
        <Subtitle size="small">{text}</Subtitle>
      </>,
    )
    cy.findAllByText(text).each(element => {
      expect(element.text()).to.be.equal(text)
    })
    cy.findAllByText(text).should('be.visible')
    cy.matchImage()
  })
})
