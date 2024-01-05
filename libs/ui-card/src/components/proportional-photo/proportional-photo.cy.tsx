import { Card, ProportionalPhoto } from './proportional-photo'

describe(ProportionalPhoto.name, () => {
  beforeEach(() => {
    cy.mount(
      <ProportionalPhoto
        renderImage={
          <img
            src="//img.r7.com/images/apagao-sao-paulo-1123-19122023115816951?resize=348x199&amp;crop=1170x669 0 32&amp;dimensions=328x184"
            alt="Ministério da Justiça abre processo contra Enel por apagões"
            width="100%"
            height="auto"
          />
        }
        renderHat={
          <Card.HatWrapper>
            <Card.HatTitle>são paulo e rio de janeiro</Card.HatTitle>
          </Card.HatWrapper>
        }
        title="Ministério da Justiça abre processo contra Enel por apagões"
      />,
    )
  })

  it('should render proportional card - desktop', () => {
    cy.viewport('macbook-16')
    cy.findAllByRole('article').should('not.be.visible')
    cy.matchImage()
  })

  it('should render proportional card - mobile', () => {
    cy.viewport('iphone-se2')
    cy.findAllByRole('article').should('not.be.visible')
    cy.matchImage()
  })
})
