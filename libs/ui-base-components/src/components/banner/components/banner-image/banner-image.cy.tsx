import { BannerImage } from './banner-image'

describe(BannerImage.name, () => {
  it('should render image', () => {
    cy.mount(<BannerImage alt="Minha imagem" />)
    cy.findByRole('img').should('be.visible')
    cy.matchImage()
  })

  it('should render banner image with custom image', () => {
    const testSrc = 'https://img.r7.com/images/r7-30072019142631584'

    cy.mount(<BannerImage sourceUrl={testSrc} alt="Minha imagem" />)
    cy.findByRole('img').invoke('attr', 'src').should('eq', testSrc)
    cy.matchImage()
  })
})
