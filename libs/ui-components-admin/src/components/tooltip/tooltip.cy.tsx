import { Button } from '../button'
import { Tooltip } from './tooltip'

describe(Tooltip.name, () => {
  it('Visible', () => {
    cy.mount(
      <div className="flex justify-center items-center h-screen">
        <Tooltip content="conteudo do tooltip" position="bottom">
          <Button>teste</Button>
        </Tooltip>
      </div>,
    )
    cy.findByRole('button', { name: 'teste' }).trigger('mouseover')
    cy.findByRole('tooltip', { hidden: false }).should('be.visible')
    cy.matchImage()
  })

  it('Not visible', () => {
    cy.mount(
      <div className="flex justify-center items-center h-screen">
        <Tooltip content="conteudo do tooltip" position="bottom-left">
          <Button>teste</Button>
        </Tooltip>
      </div>,
    )
    cy.findByRole('tooltip', { hidden: true }).should('not.be.visible')
    cy.matchImage()
  })

  it('Position bottom-right', () => {
    cy.mount(
      <div className="flex justify-center items-center h-screen">
        <Tooltip content="conteudo do tooltip" position="bottom-right">
          <Button>teste</Button>
        </Tooltip>
      </div>,
    )
    cy.findByRole('button', { name: 'teste' }).trigger('mouseover')
    cy.findByRole('tooltip', { hidden: false }).should('be.visible')
    cy.matchImage()
  })

  it('Position left', () => {
    cy.mount(
      <div className="flex justify-center items-center h-screen">
        <Tooltip content="conteudo do tooltip" position="left">
          <Button>teste</Button>
        </Tooltip>
      </div>,
    )
    cy.findByRole('button', { name: 'teste' }).trigger('mouseover')
    cy.findByRole('tooltip', { hidden: false }).should('be.visible')
    cy.matchImage()
  })

  it('Position right', () => {
    cy.mount(
      <div className="flex justify-center items-center h-screen">
        <Tooltip content="conteudo do tooltip" position="right">
          <Button>teste</Button>
        </Tooltip>
      </div>,
    )
    cy.findByRole('button', { name: 'teste' }).trigger('mouseover')
    cy.findByRole('tooltip', { hidden: false }).should('be.visible')
    cy.matchImage()
  })

  it('Position top', () => {
    cy.mount(
      <div className="flex justify-center items-center h-screen">
        <Tooltip content="conteudo do tooltip" position="top">
          <Button>teste</Button>
        </Tooltip>
      </div>,
    )
    cy.findByRole('button', { name: 'teste' }).trigger('mouseover')
    cy.findByRole('tooltip', { hidden: false }).should('be.visible')
    cy.matchImage()
  })

  it('Position top-left', () => {
    cy.mount(
      <div className="flex justify-center items-center h-screen">
        <Tooltip content="conteudo do tooltip" position="top-left">
          <Button>teste</Button>
        </Tooltip>
      </div>,
    )
    cy.findByRole('button', { name: 'teste' }).trigger('mouseover')
    cy.findByRole('tooltip', { hidden: false }).should('be.visible')
    cy.matchImage()
  })

  it('Position top-right', () => {
    cy.mount(
      <div className="flex justify-center items-center h-screen">
        <Tooltip content="conteudo do tooltip" position="top-right">
          <Button>teste</Button>
        </Tooltip>
      </div>,
    )
    cy.findByRole('button', { name: 'teste' }).trigger('mouseover')
    cy.findByRole('tooltip', { hidden: false }).should('be.visible')
    cy.matchImage()
  })
})
