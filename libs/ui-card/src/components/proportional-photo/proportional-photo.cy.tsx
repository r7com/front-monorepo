import { Card } from '../card'
import { ProportionalPhoto } from './proportional-photo'

describe(ProportionalPhoto.name, () => {
  beforeEach(() => {
    cy.mount(
      <div className="card-p-xxxs">
        <ProportionalPhoto>
          <ProportionalPhoto.Figure>
            <img
              src="//img.r7.com/images/apagao-sao-paulo-1123-19122023115816951?resize=348x199&amp;crop=1170x669 0 32&amp;dimensions=328x184"
              alt="Ministério da Justiça abre processo contra Enel por apagões"
              width="100%"
              height="auto"
            />
          </ProportionalPhoto.Figure>

          <ProportionalPhoto.TextWrapper>
            <Card.HatWrapper>
              <Card.HatTitle>são paulo e rio de janeiro</Card.HatTitle>
            </Card.HatWrapper>

            <ProportionalPhoto.Title>
              Ministério da Justiça abre processo contra Enel por apagões
            </ProportionalPhoto.Title>
          </ProportionalPhoto.TextWrapper>
        </ProportionalPhoto>
      </div>,
    )
  })

  it('should render proportional card - desktop', () => {
    cy.viewport('macbook-16')
    cy.findAllByRole('article').should('be.visible')
    cy.matchImage()
  })

  it('should render proportional card - mobile', () => {
    cy.viewport('iphone-se2')
    cy.findAllByRole('article').should('be.visible')
    cy.matchImage()
  })
})
