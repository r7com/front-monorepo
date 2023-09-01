import { SvgIcon } from '../svg-icon'
import { IconButton } from './icon-button'

describe(`${IconButton.name} with icon`, () => {
  it('should renders icon-button with icon', () => {
    cy.mount(
      <IconButton>
        <SvgIcon iconName="error" color="primary" title="error" />
      </IconButton>,
    )

    cy.findByRole('button').should('be.visible')
    cy.matchImage()
  })
})

describe(`${IconButton.name} interactions`, () => {
  it('should called "onClick" callback once on click', () => {
    const onClick = cy.stub().as('callback')

    cy.mount(
      <IconButton onClick={onClick}>
        <SvgIcon iconName="circle-error" color="primary" title="error" />
      </IconButton>,
    )

    cy.findByRole('button').click()
    cy.get('@callback').should('have.been.calledOnce')
  })

  it('should failed to trigger "onClick" callback on click disabled button', () => {
    const onClick = cy.stub().as('callback')

    cy.mount(
      <IconButton onClick={onClick} disabled>
        <SvgIcon iconName="circle-error" color="primary" title="error" />
      </IconButton>,
    )

    cy.findByRole('button').click({ force: true })
    cy.get('@callback').should('not.have.been.called')
  })
})
