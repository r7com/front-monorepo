import { Bullet } from '@r7/ui-base-components'
import { TitleWithBullets } from './title-with-bullets'

describe(TitleWithBullets.name, () => {
  it('should render with bullets', () => {
    cy.mount(
      <TitleWithBullets
        hat="Economia"
        title="Esperamos ter novo valor do auxílio emergencial até sexta, diz Bolsonaro "
        renderBullets={
          <>
            <Bullet url="#">Bullet 1</Bullet>
            <Bullet url="#">Bullet 2</Bullet>
            <Bullet url="#">Bullet 3</Bullet>
            <Bullet url="#">Bullet 4</Bullet>
          </>
        }
      />,
    )
    cy.viewport('macbook-16')
    cy.findByRole('link', { name: /Bullet 1/i }).should('be.visible')
    cy.findByRole('link', { name: /Bullet 2/i }).should('be.visible')
    cy.findByRole('link', { name: /Bullet 3/i }).should('be.visible')
    cy.findByRole('link', { name: /Bullet 4/i }).should('be.visible')
  })

  it('should render without bullets', () => {
    cy.mount(
      <TitleWithBullets
        hat="Economia"
        title="Esperamos ter novo valor do auxílio emergencial até sexta, diz Bolsonaro"
      />,
    )
    cy.viewport('macbook-16')
    cy.findByRole('link').should('not.exist')
  })
})

describe(`${TitleWithBullets.name} responsiveness`, () => {
  beforeEach(() => {
    cy.mount(
      <TitleWithBullets
        hat="Economia"
        title="Esperamos ter novo valor do auxílio emergencial até sexta, diz Bolsonaro "
        renderBullets={
          <>
            <Bullet url="#">Câmara aprova MP que adia Lei de Dados para 31 de dezembro</Bullet>
            <Bullet url="#">Casa Verde e Amarela terá financiamento com juros de 4,25%</Bullet>
            <Bullet url="#">Senado aprova, em segundo turno, PEC de renovação do Fundeb</Bullet>
            <Bullet url="#">
              Guedes defende fim de deduções do IR para Renda Brasil chegar a R$ 300
            </Bullet>
          </>
        }
      />,
    )
  })

  it('should render title-with-bullets card - desktop', () => {
    cy.viewport('macbook-16')
    cy.findAllByRole('article').should('be.visible')
    cy.matchImage()
  })

  it('should render title-with-bullets card - tablet', () => {
    cy.viewport('ipad-mini')
    cy.findAllByRole('article').should('be.visible')
    cy.matchImage()
  })

  it('should render title-with-bullets card - mobile', () => {
    cy.viewport('iphone-se2')
    cy.findAllByRole('article').should('be.visible')
    cy.matchImage()
  })
})
