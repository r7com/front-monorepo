import { BannerOptions } from './banner-options'

describe(BannerOptions.name, () => {
  it('should render children', () => {
    cy.mount(
      <div className="flex flex-row flex-wrap gap-nano p-nano">
        <BannerOptions>Opções</BannerOptions>
      </div>,
    )
    cy.findByText('Opções').should('be.visible')
  })
})
