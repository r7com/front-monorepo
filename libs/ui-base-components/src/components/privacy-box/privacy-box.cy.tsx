import { PrivacyBox } from './privacy-box'

describe(PrivacyBox.name, () => {
  it('Should return privacy box', () => {
    cy.mount(<PrivacyBox link="https://www.r7.com/termos-e-condicoes" />)
    cy.matchImage()
  })
  it('Should return privacy box dark mode', () => {
    cy.mount(<PrivacyBox link="https://www.r7.com/termos-e-condicoes" />)
    cy.addDarkMode()
    cy.matchImage()
  })
})
