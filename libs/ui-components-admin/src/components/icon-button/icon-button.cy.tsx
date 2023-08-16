import { SvgIcon } from '../svg-icon'
import { IconButton } from './icon-button'

describe(IconButton.name, () => {
  it('rendered', () => {
    cy.mount(
      <IconButton>
        <SvgIcon iconName="error" color="primary" title="error" />
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
        <SvgIcon iconName="error" color="primary" title="error" />
      </IconButton>,
    )

    cy.findByRole('button').click()
    cy.get('@callback').should('have.been.calledOnce')
  })
})
