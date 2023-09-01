import { SvgIcon } from '../svg-icon'
import { Button } from './button'

describe(`${Button.name} variant options`, () => {
  it('should renders as button', () => {
    cy.mount(<Button>click button</Button>)
    cy.findByRole('button', { name: /click button/i }).should('be.visible')
    cy.matchImage()
  })

  it('should renders as link', () => {
    cy.mount(
      <Button as="a" href="#">
        click link
      </Button>,
    )
    cy.findByRole('link', { name: /click link/i }).should('be.visible')
    cy.matchImage()
  })

  it('should renders all "color" variant options', () => {
    cy.mount(
      <>
        <Button color="primary">primary</Button>
        <Button color="secondary">secondary</Button>
        <Button color="tertiary">tertiary</Button>
        <Button color="ghost">ghost</Button>
      </>,
    )

    cy.findByRole('button', { name: /primary/i }).should('be.visible')
    cy.findByRole('button', { name: /secondary/i }).should('be.visible')
    cy.findByRole('button', { name: /tertiary/i }).should('be.visible')
    cy.findByRole('button', { name: /ghost/i }).should('be.visible')
    cy.matchImage()
  })

  it('should renders all "size" variant options', () => {
    cy.mount(
      <>
        <Button size="large">large</Button>
        <Button size="medium">medium</Button>
        <Button size="small">small</Button>
      </>,
    )

    cy.findByRole('button', { name: /large/i }).should('be.visible')
    cy.findByRole('button', { name: /medium/i }).should('be.visible')
    cy.findByRole('button', { name: /small/i }).should('be.visible')
    cy.matchImage()
  })

  it('should renders with "startIcon" and "endIcon"', () => {
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
    cy.matchImage()
  })
})

describe(`${Button.name} interactions`, () => {
  it('should called "onClick" callback once on click', () => {
    const onClick = cy.stub().as('callback')
    cy.mount(<Button onClick={onClick}>click button</Button>)

    cy.findByRole('button', { name: /click button/i }).click()
    cy.get('@callback').should('have.been.calledOnce')
  })

  it('should failed to trigger "onClick" callback on click disabled button', () => {
    const onClick = cy.stub().as('callback')
    cy.mount(
      <Button onClick={onClick} disabled>
        click button
      </Button>,
    )

    cy.findByRole('button', { name: /click button/i }).click({ force: true })
    cy.get('@callback').should('not.have.been.called')
  })
})
