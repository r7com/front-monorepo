import { PrivacyBox } from './privacy-box'

describe(PrivacyBox.name, () => {
  it('Should return privacy box', () => {
    cy.mount(<PrivacyBox />)
    cy.matchImage()
  })
  it('Should return privacy box dark mode', () => {
    cy.mount(<PrivacyBox />)
    cy.addDarkMode()
    cy.matchImage()
  })
})
