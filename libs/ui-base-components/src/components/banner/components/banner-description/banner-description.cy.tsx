import { BannerDescription } from './banner-description'

describe(BannerDescription.name, () => {
  it('should render all type variants', () => {
    cy.mount(
      <div className="flex flex-row flex-wrap gap-nano p-nano">
        <BannerDescription>Descrição do banner</BannerDescription>
      </div>,
    )
    cy.findByRole('alert').should('be.visible')
    cy.matchImage()
  })
})
