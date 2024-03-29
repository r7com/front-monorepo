import { Button } from '../button'
import { Tooltip } from './tooltip'

describe(Tooltip.name, () => {
  it('Should be visible on mouseover', () => {
    cy.mount(
      <div className="base-flex base-justify-center base-items-center base-h-screen">
        <Tooltip content="conteudo do tooltip" position="bottom">
          <Button>teste</Button>
        </Tooltip>
      </div>,
    )
    cy.findByRole('button', { name: 'teste' }).trigger('mouseover')
    cy.findByRole('tooltip', { hidden: false }).should('be.visible')
    cy.matchImage()
  })

  it('Should not be visible without mouseover', () => {
    cy.mount(
      <div className="base-flex base-justify-center base-items-center base-h-screen">
        <Tooltip content="conteudo do tooltip" position="bottom-left">
          <Button>teste</Button>
        </Tooltip>
      </div>,
    )
    cy.findByRole('tooltip', { hidden: true }).should('not.be.visible')
    cy.matchImage()
  })

  it('Should be visible with position bottom-right on mouseover', () => {
    cy.mount(
      <div className="base-flex base-justify-center base-items-center base-h-screen">
        <Tooltip content="conteudo do tooltip" position="bottom-right">
          <Button>teste</Button>
        </Tooltip>
      </div>,
    )
    cy.findByRole('button', { name: 'teste' }).trigger('mouseover')
    cy.findByRole('tooltip', { hidden: false }).should('be.visible')
    cy.matchImage()
  })

  it('Should be visible with position left on mouseover', () => {
    cy.mount(
      <div className="base-flex base-justify-center base-items-center base-h-screen">
        <Tooltip content="conteudo do tooltip" position="left">
          <Button>teste</Button>
        </Tooltip>
      </div>,
    )
    cy.findByRole('button', { name: 'teste' }).trigger('mouseover')
    cy.findByRole('tooltip', { hidden: false }).should('be.visible')
    cy.matchImage()
  })

  it('Should be visible with position right on mouseover', () => {
    cy.mount(
      <div className="base-flex base-justify-center base-items-center base-h-screen">
        <Tooltip content="conteudo do tooltip" position="right">
          <Button>teste</Button>
        </Tooltip>
      </div>,
    )
    cy.findByRole('button', { name: 'teste' }).trigger('mouseover')
    cy.findByRole('tooltip', { hidden: false }).should('be.visible')
    cy.matchImage()
  })

  it('Should be visible with position top on mouseover', () => {
    cy.mount(
      <div className="base-flex base-justify-center base-items-center base-h-screen">
        <Tooltip content="conteudo do tooltip" position="top">
          <Button>teste</Button>
        </Tooltip>
      </div>,
    )
    cy.findByRole('button', { name: 'teste' }).trigger('mouseover')
    cy.findByRole('tooltip', { hidden: false }).should('be.visible')
    cy.matchImage()
  })

  it('Should be visible with position top-left on mouseover', () => {
    cy.mount(
      <div className="base-flex base-justify-center base-items-center base-h-screen">
        <Tooltip content="conteudo do tooltip" position="top-left">
          <Button>teste</Button>
        </Tooltip>
      </div>,
    )
    cy.findByRole('button', { name: 'teste' }).trigger('mouseover')
    cy.findByRole('tooltip', { hidden: false }).should('be.visible')
    cy.matchImage()
  })

  it('Should be visible with position top-right on mouseover', () => {
    cy.mount(
      <div className="base-flex base-justify-center base-items-center base-h-screen">
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
