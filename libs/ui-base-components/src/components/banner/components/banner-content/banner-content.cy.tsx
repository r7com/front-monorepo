import { BannerContent } from './banner-content'

describe(BannerContent.name, () => {
  it('should render all type variants', () => {
    cy.mount(
      <div className="flex flex-row flex-wrap gap-nano p-nano">
        <BannerContent>Conteúdo do banner</BannerContent>
      </div>,
    )
    cy.findByText('Conteúdo do banner').should('be.visible')
    cy.matchImage()
  })
})
