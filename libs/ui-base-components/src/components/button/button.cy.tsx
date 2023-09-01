import { SvgIcon } from '../svg-icon'
import { Button } from './button'

describe(Button.name, () => {
  it('renders as button', () => {
    cy.mount(<Button as="button">click button</Button>)
    cy.findByRole('button', { name: /click button/i })
    cy.matchImage()
  })

  it('renders as link', () => {
    cy.mount(
      <Button as="a" href="#">
        click link
      </Button>,
    )
    cy.findByRole('link', { name: /click link/i })
    cy.matchImage()
  })

  it('on click', () => {
    const onClick = cy.stub().as('callback')
    cy.mount(<Button onClick={onClick}>click buttonsdsd</Button>)

    cy.findByRole('button', { name: /click button/i }).click()
    cy.get('@callback').should('have.been.calledOnce')
  })

  it('failed click with disabled button', () => {
    const onClick = cy.stub().as('callback')
    cy.mount(
      <Button onClick={onClick} disabled>
        click button
      </Button>,
    )

    cy.findByRole('button', { name: /click button/i }).click({ force: true })
    cy.get('@callback').should('not.have.been.called')
  })

  it('with icon', () => {
    cy.mount(
      <Button
        color="primary"
        startIcon={<SvgIcon iconName="check" />}
        endIcon={<SvgIcon iconName="check" />}
      >
        Button With Icon
      </Button>,
    )

    cy.findByRole('button', { name: /button with icon/i }).should('be.visible')
    cy.findAllByTestId('svg-icon').should('be.visible')
    cy.matchImage()
  })
})
