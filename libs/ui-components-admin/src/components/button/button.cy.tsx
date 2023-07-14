import { Button } from './button'

describe(Button.name, () => {
  it('renders as button', () => {
    cy.mount(<Button as="button">click button</Button>)
    cy.findByRole('button')
    cy.matchImage()
  })

  it('renders as link', () => {
    cy.mount(
      <Button as="a" href="#">
        click link
      </Button>,
    )
    cy.findByRole('link')
    cy.matchImage()
  })
})
