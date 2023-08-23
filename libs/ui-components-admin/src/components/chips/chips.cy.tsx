import { Chips } from './chips'
import { SvgIcon } from '../svg-icon'

describe(Chips.name, () => {
  const text = 'nome tag'
  const link = '#'

  //layout disabled é o mesmo p primary e secondary
  it('renders a large chip with disabled primary', () => {
    const handleClick = cy.stub()
    cy.mount(
      <Chips
        size="large"
        disabled
        color="primary"
        onClick={handleClick}
        startIcon={<SvgIcon iconName="chevron-left" />}
        endIcon={<SvgIcon iconName="chevron-right" />}
      >
        {text}
      </Chips>,
    )
    cy.get('svg').should('be.visible')
    cy.findByText(text).should('be.visible')
    cy.findByRole('button').click()
    cy.wrap(handleClick).should('not.have.been.called')
    cy.matchImage()
  })

  it('renders a medium chip with disabled tertiary', () => {
    const handleClick = cy.stub()
    cy.mount(
      <Chips
        size="medium"
        disabled
        color="tertiary"
        onClick={handleClick}
        startIcon={<SvgIcon iconName="chevron-left" />}
        endIcon={<SvgIcon iconName="chevron-right" />}
      >
        {text}
      </Chips>,
    )
    cy.get('svg').should('be.visible')
    cy.findByText(text).should('be.visible')
    cy.findByRole('button').click()
    cy.wrap(handleClick).should('not.have.been.called')
    cy.matchImage()
  })

  it('renders a large chip with selected primary', () => {
    const handleClick = cy.stub()
    cy.mount(
      <Chips
        startIcon={<SvgIcon iconName="chevron-left" />}
        endIcon={<SvgIcon iconName="chevron-right" />}
        size="large"
        color="primary"
        onClick={handleClick}
        selected
      >
        {text}
      </Chips>,
    )

    cy.findByText(text).should('be.visible')
    cy.get('svg').should('be.visible')
    cy.findByRole('button').click()
    cy.wrap(handleClick).should('have.been.calledOnce')
    cy.matchImage()
  })

  it('renders a medium chip with selected tertiary', () => {
    const handleClick = cy.stub()
    cy.mount(
      <Chips
        startIcon={<SvgIcon iconName="chevron-left" />}
        endIcon={<SvgIcon iconName="chevron-right" />}
        size="medium"
        color="tertiary"
        onClick={handleClick}
        selected
      >
        {text}
      </Chips>,
    )

    cy.findByText(text).should('be.visible')
    cy.get('svg').should('be.visible')
    cy.findByRole('button').click()
    cy.wrap(handleClick).should('have.been.calledOnce')
    cy.matchImage()
  })

  it('renders a small chip with selected secondary', () => {
    const handleClick = cy.stub()
    cy.mount(
      <Chips
        size="small"
        startIcon={<SvgIcon iconName="chevron-left" />}
        endIcon={<SvgIcon iconName="chevron-right" />}
        color="secondary"
        onClick={handleClick}
        selected
      >
        {text}
      </Chips>,
    )

    cy.findByText(text).should('be.visible')
    cy.get('svg').should('be.visible')
    cy.findByRole('button').click()
    cy.wrap(handleClick).should('have.been.calledOnce')
    cy.matchImage()
  })

  it('renders a large chip with primary', () => {
    cy.mount(
      <Chips
        size="large"
        color="primary"
        startIcon={<SvgIcon iconName="chevron-left" />}
        endIcon={<SvgIcon iconName="chevron-right" />}
      >
        {text}
      </Chips>,
    )
    cy.findByText(text).should('be.visible')
    cy.get('svg').should('be.visible')
    cy.get('span').should('be.visible')
    cy.matchImage()
  })

  it('renders a medium chip with secondary', () => {
    cy.mount(
      <Chips
        size="medium"
        color="secondary"
        startIcon={<SvgIcon iconName="chevron-left" />}
        endIcon={<SvgIcon iconName="chevron-right" />}
      >
        {text}
      </Chips>,
    )
    cy.findByText(text).should('be.visible')
    cy.get('svg').should('be.visible')
    cy.get('span').should('be.visible')
    cy.matchImage()
  })

  it('renders a small chip with tertiary', () => {
    cy.mount(
      <Chips
        size="small"
        color="tertiary"
        startIcon={<SvgIcon iconName="chevron-left" />}
        endIcon={<SvgIcon iconName="chevron-right" />}
      >
        {text}
      </Chips>,
    )
    cy.findByText(text).should('be.visible')
    cy.get('svg').should('be.visible')
    cy.get('span').should('be.visible')
    cy.matchImage()
  })

  it('renders a large chip with primary tag a', () => {
    cy.mount(
      <Chips size="large" color="primary" as="a" title={text} href={link}>
        {text}
      </Chips>,
    )
    cy.findByText(text).should('be.visible')
    cy.get('a').should('be.visible')
  })
})
