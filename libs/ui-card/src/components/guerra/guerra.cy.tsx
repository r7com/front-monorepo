import { Bullet } from '@r7/ui-base-components'
import { Guerra } from './guerra'
import { Card } from '../card'

const GuerraResponsive = (
  <Guerra>
    <Guerra.Figure>
      <img
        src="//img.r7.com/images/pr-jair-bolsonaro-declaracao-a-imprensa-1500-13082020105425814?resize=1100x628&crop=1101x628 123 47&dimensions=1100x628"
        alt="Esperamos ter novo valor do auxílio emergencial até sexta, diz Bolsonaro  ( Carolina Antunes/PR - 12.08.2020)"
        style={{ width: '100%' }}
      />
    </Guerra.Figure>

    <Guerra.Overlay>
      <Card.HatWrapper type="warning">
        <Card.HatTitle color="high">Economia</Card.HatTitle>
      </Card.HatWrapper>

      <Guerra.Title>
        Esperamos ter novo valor do auxílio emergencial até sexta, diz Bolsonaro
      </Guerra.Title>

      <Guerra.Bullets>
        <>
          <Bullet url="#" color="neutralHigh">
            Câmara aprova MP que adia Lei de Dados para 31 de dezembro
          </Bullet>

          <Bullet url="#" color="neutralHigh">
            Casa Verde e Amarela terá financiamento com juros de 4,25%
          </Bullet>

          <Bullet url="#" color="neutralHigh">
            Senado aprova, em segundo turno, PEC de renovação do Fundeb
          </Bullet>

          <Bullet url="#" color="neutralHigh">
            Guedes defende fim de deduções do IR para Renda Brasil chegar a R$ 300
          </Bullet>

          <Bullet url="#" color="neutralHigh">
            Retomada de alto-forno da Usiminas terá presença de Bolsonaro e Zema
          </Bullet>

          <Bullet url="#" color="neutralHigh">
            Senado aprova em primeiro turno PEC que renova o Fundeb
          </Bullet>

          <Bullet url="#" color="neutralHigh">
            5 pontos para o Brasil decolar de vez na economia
          </Bullet>

          <Bullet url="#" color="neutralHigh">
            Queda no PIB e aprovação a Bolsonaro são destaques nesta sexta (14)
          </Bullet>
        </>
      </Guerra.Bullets>
    </Guerra.Overlay>
  </Guerra>
)

describe(Guerra.name, () => {
  it('should render all bullets', () => {
    cy.mount(<div className="card-p-xxxs">{GuerraResponsive}</div>)
    cy.viewport('macbook-16')
    cy.findAllByRole('link').should('have.length', 8)
  })

  it('should render guerra card - desktop', () => {
    cy.mount(<div className="card-p-xxxs">{GuerraResponsive}</div>)
    cy.viewport('macbook-16')
    cy.findAllByRole('article').should('be.visible')
    cy.matchImage()
  })

  it('should render guerra card - tablet', () => {
    cy.mount(<div className="card-p-xxxs">{GuerraResponsive}</div>)
    cy.viewport('ipad-mini')
    cy.findAllByRole('article').should('be.visible')
    cy.matchImage()
  })

  it('should render guerra card - mobile', () => {
    cy.mount(GuerraResponsive)
    cy.viewport('iphone-se2')
    cy.findAllByRole('article').should('be.visible')
    cy.matchImage()
  })
})
