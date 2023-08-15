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
})
