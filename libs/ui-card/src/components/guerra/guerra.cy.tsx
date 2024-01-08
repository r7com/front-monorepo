import { Bullet } from '@r7/ui-base-components'
import { Guerra } from './guerra'

describe(Guerra.name, () => {
  beforeEach(() => {
    cy.mount(
      <Guerra
        hat="Economia"
        title="Esperamos ter novo valor do auxílio emergencial até sexta, diz Bolsonaro "
        renderImage={
          <img
            src="//img.r7.com/images/pr-jair-bolsonaro-declaracao-a-imprensa-1500-13082020105425814?resize=1100x628&crop=1101x628 123 47&dimensions=1100x628"
            alt="Esperamos ter novo valor do auxílio emergencial até sexta, diz Bolsonaro  ( Carolina Antunes/PR - 12.08.2020)"
            style={{ width: '100%' }}
          />
        }
        renderBullets={
          <>
            <Bullet url="#" color="neutralHigh">
              Bullet 1
            </Bullet>
            <Bullet url="#" color="neutralHigh">
              Bullet 2
            </Bullet>
            <Bullet url="#" color="neutralHigh">
              Bullet 3
            </Bullet>
            <Bullet url="#" color="neutralHigh">
              Bullet 4
            </Bullet>
            <Bullet url="#" color="neutralHigh">
              Bullet 5
            </Bullet>
            <Bullet url="#" color="neutralHigh">
              Bullet 6
            </Bullet>
            <Bullet url="#" color="neutralHigh">
              Bullet 7
            </Bullet>
            <Bullet url="#" color="neutralHigh">
              Bullet 8
            </Bullet>
          </>
        }
      />,
    )
  })

  it('should render all bullets', () => {
    cy.viewport('macbook-16')
    cy.findAllByRole('link').should('have.length', 8)
  })

  it('should render guerra card - desktop', () => {
    cy.viewport('macbook-16')
    cy.findAllByRole('article').should('be.visible')
    cy.matchImage()
  })

  it('should render guerra card - tablet', () => {
    cy.viewport('ipad-mini')
    cy.findAllByRole('article').should('be.visible')
    cy.matchImage()
  })

  it('should render guerra card - mobile', () => {
    cy.viewport('iphone-se2')
    cy.findAllByRole('article').should('be.visible')
    cy.matchImage()
  })
})
