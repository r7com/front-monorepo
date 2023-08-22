import { Chips } from './chips'
import { SvgIcon } from '../svg-icon'

describe(Chips.name, () => {
  const text = 'nome tag'
  const link = '#'

  //layout disabled é o mesmo p primary e secondary
  it('renders a large chip with disabled primary', () => {
    cy.mount(
      <Chips
        size="large"
        disabled
        color="primary"
        startIcon={<SvgIcon iconName="chevron-left" />}
        endIcon={<SvgIcon iconName="chevron-right" />}
      >
        {text}
      </Chips>,
    )
    cy.get('svg').should('be.visible')
    cy.findByText(text).should('be.visible')
    cy.matchImage()
  })

  it('renders a large chip with disabled tertiary', () => {
    cy.mount(
      <Chips
        size="large"
        disabled
        color="tertiary"
        startIcon={<SvgIcon iconName="chevron-left" />}
        endIcon={<SvgIcon iconName="chevron-right" />}
      >
        {text}
      </Chips>,
    )
    cy.get('svg').should('be.visible')
    cy.findByText(text).should('be.visible')
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
    cy.get('span').click()
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
    cy.get('span').click()
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
    cy.get('span').click()
    cy.wrap(handleClick).should('have.been.calledOnce')
    cy.matchImage()
  })

  it('renders a large chip with disabled primary on click', () => {
    const handleClick = cy.stub()
    cy.mount(
      <Chips size="large" color="primary" onClick={handleClick} disabled>
        {text}
      </Chips>,
    )

    cy.findByText(text).should('be.visible')
    cy.get('span').click()
    cy.wrap(handleClick).should('have.been.calledOnce')
  })

  it('renders a medium chip with disabled tertiary on click', () => {
    const handleClick = cy.stub()
    cy.mount(
      <Chips size="medium" color="tertiary" onClick={handleClick} disabled>
        {text}
      </Chips>,
    )

    cy.findByText(text).should('be.visible')
    cy.get('span').click()
    cy.wrap(handleClick).should('have.been.calledOnce')
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
    cy.matchImage()
  })

  it('renders a large chip with primary tag a', () => {
    cy.mount(
      <Chips size="large" color="primary" as="a" title={text} href={link}>
        {text}
      </Chips>,
    )
    cy.findByText(text).should('be.visible')
  })

  it('renders a large chip with selected primary tag a', () => {
    const handleClick = cy.stub()
    cy.mount(
      <Chips size="large" color="primary" onClick={handleClick} selected as="a">
        {text}
      </Chips>,
    )

    cy.findByText(text).should('be.visible')
    cy.get('a').click()
    cy.wrap(handleClick).should('have.been.calledOnce')
  })

  it('renders a large chip with primary tag button', () => {
    cy.mount(
      <Chips size="large" color="primary" as="button" title={text}>
        {text}
      </Chips>,
    )
    cy.findByText(text).should('be.visible')
  })

  it('renders a medium chip with selected primary tag button', () => {
    const handleClick = cy.stub()
    cy.mount(
      <Chips size="medium" color="primary" onClick={handleClick} selected as="button">
        {text}
      </Chips>,
    )

    cy.findByText(text).should('be.visible')
    cy.get('button').click()
    cy.wrap(handleClick).should('have.been.calledOnce')
  })
})
