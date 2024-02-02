import { VerticalCarousel } from './vertical-carousel'
import { VERTICAL_CAROUSEL_MOCK } from './vertical-carousel.mock'

describe(VerticalCarousel.name, () => {
  beforeEach(() => {
    cy.mount(
      <div className="card-max-w-[1000px] card-px-xxxs">
        <VerticalCarousel>
          <VerticalCarousel.ScrollContainer id="vertical-carousel-1">
            {VERTICAL_CAROUSEL_MOCK.map(item => (
              <VerticalCarousel.Item>
                <VerticalCarousel.Figure>
                  <img src={item.img} alt={item.title} />
                </VerticalCarousel.Figure>

                <VerticalCarousel.TextWrapper>
                  <VerticalCarousel.Title>{item.title}</VerticalCarousel.Title>
                </VerticalCarousel.TextWrapper>
              </VerticalCarousel.Item>
            ))}
          </VerticalCarousel.ScrollContainer>

          <VerticalCarousel.ArrowLeft aria-label="Anterior" aria-controls="vertical-carousel-1" />
          <VerticalCarousel.ArrowRight aria-label="Próximo" aria-controls="vertical-carousel-1" />
        </VerticalCarousel>
      </div>,
    )
  })

  it('should render vertical carousel - desktop', () => {
    cy.viewport('macbook-16')
    cy.findAllByRole('article').should('have.length', VERTICAL_CAROUSEL_MOCK.length)
    cy.matchImage()
  })

  it('should render vertical carousel - mobile', () => {
    cy.viewport('iphone-se2')
    cy.findAllByRole('article').should('have.length', VERTICAL_CAROUSEL_MOCK.length)
    cy.matchImage()
  })

  it('should render the arrows', () => {
    cy.findByLabelText('Anterior').should('be.visible')
    cy.findByLabelText('Próximo').should('be.visible')
  })
})
