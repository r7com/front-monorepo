import { VerticalCarousel } from './vertical-carousel'

describe(VerticalCarousel.name, () => {
  beforeEach(() => {
    cy.mount(
      <div className="card-max-w-[1000px] card-px-xxxs">
        <VerticalCarousel>
          <VerticalCarousel.Item>
            <VerticalCarousel.Figure>
              <img
                src="https://img.r7.com/images/dolar-03112023122719357?dimensions=183x326"
                alt="Dólar cai em meio a receios com bancos dos Estados Unidos"
              />
            </VerticalCarousel.Figure>
            <VerticalCarousel.TextWrapper>
              <VerticalCarousel.Title>
                Dólar cai em meio a receios com bancos dos Estados Unidos
              </VerticalCarousel.Title>
            </VerticalCarousel.TextWrapper>
          </VerticalCarousel.Item>

          <VerticalCarousel.ArrowLeft aria-label="Anterior" aria-controls="vertical-carousel-1" />
          <VerticalCarousel.ArrowRight aria-label="Próximo" aria-controls="vertical-carousel-1" />
        </VerticalCarousel>
      </div>,
    )
  })

  it('should render vertical carousel - desktop', () => {
    cy.viewport('macbook-16')
    cy.findAllByRole('article').should('have.length', 1)
    cy.matchImage()
  })

  it('should render vertical carousel - mobile', () => {
    cy.viewport('iphone-se2')
    cy.findAllByRole('article').should('have.length', 1)
    cy.matchImage()
  })

  it('should render the arrows', () => {
    cy.findByLabelText('Anterior').should('be.visible')
    cy.findByLabelText('Próximo').should('be.visible')
  })
})
