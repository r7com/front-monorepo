import { Disclaimer } from './disclaimer'

describe(Disclaimer.name, () => {
  it('renders as button', () => {
    cy.mount(<Disclaimer text="lalala" />)
    cy.findByRole('button', { name: /click button/i })
    cy.matchImage()
  })
})
