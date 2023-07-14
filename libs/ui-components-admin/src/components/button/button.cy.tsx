import { Button } from './button'

describe(Button.name, () => {
  it('renders as button', () => {
    cy.mount(<Button as="button">click button</Button>)
    cy.findByText(/click button/i)
    cy.matchImage()
  })

  it('renders as link', () => {
    cy.mount(
      <Button as="link" href="#">
        click link
      </Button>,
    )
    cy.findByText(/click link/i)
    cy.matchImage()
  })
})
