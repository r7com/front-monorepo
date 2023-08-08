import { Button } from '../button'
import { Tooltip } from './tooltip'

describe(Tooltip.name, () => {
  beforeEach(() => {
    cy.mount(
      <div className="flex justify-center items-center h-screen">
        <Tooltip content="conteudo do tooltip" position="bottom">
          <Button>teste</Button>
        </Tooltip>
      </div>,
    )
  })

  it('Visible', () => {
    cy.findByRole('button', { name: 'teste' }).trigger('mouseover')
    cy.findByRole('tooltip').should('be.visible')
    cy.matchImage()
  })

  it('Not visible', () => {
    cy.findByRole('tooltip', { hidden: true }).should('not.be.visible')
    cy.matchImage()
  })
})
