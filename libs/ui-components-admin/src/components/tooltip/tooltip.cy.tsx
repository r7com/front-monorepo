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

  it('render Tooltip', () => {
    cy.findByRole('button', { name: 'teste' }).trigger('mouseover')
    cy.get('[data-testid="tooltip"]').should('be.visible')
    cy.matchImage()
  })
})
