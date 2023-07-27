import { Tooltip } from './tooltip'

describe(Tooltip.name, () => {
  it('render Tooltip', () => {
    cy.mount(
      <Tooltip content="conteudo do tooltip">
        <button>anderson</button>
      </Tooltip>,
    )
    cy.findByRole('button', { name: /anderson/i }).trigger('mouseenter')
    // cy.matchImage()
  })
})
