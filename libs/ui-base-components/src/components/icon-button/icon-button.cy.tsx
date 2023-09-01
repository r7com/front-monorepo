import { SvgIcon } from '../svg-icon'
import { IconButton } from './icon-button'

describe(IconButton.name, () => {
  it('rendered', () => {
    cy.mount(
      <IconButton>
        <SvgIcon iconName="circle-error" color="primary" title="error" />
      </IconButton>,
    )

    cy.findByRole('button').should('be.visible')
    cy.findByTitle('error').should('exist')
    cy.matchImage()
  })

  it('on click', () => {
    const onClick = cy.stub().as('callback')

    cy.mount(
      <IconButton onClick={onClick}>
        <SvgIcon iconName="circle-error" color="primary" title="error" />
      </IconButton>,
    )

    cy.findByRole('button').click()
    cy.get('@callback').should('have.been.calledOnce')
  })

  it('failed click with disabled button', () => {
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