import { Chips } from './chips'
import { SvgIcon } from '../svg-icon'

describe(Chips.name, () => {
  const text = 'nome tag'
  const link = '#'

  //layout disabled é o mesmo p primary e secondary
  it('renders a large chip with disabled primary', () => {
    cy.mount(
      <Chips size="large" disabled color="primary">
        {text}
      </Chips>,
    )
    cy.findByText(text).should('be.visible')
    cy.matchImage()
  })

  it('renders a large chip with disabled tertiary', () => {
    cy.mount(
      <Chips size="large" disabled color="tertiary">
        {text}
      </Chips>,
    )
    cy.findByText(text).should('be.visible')
    cy.matchImage()
  })

  it('renders a large chip with selected primary', () => {
    const handleClick = cy.stub()
    cy.mount(
      <Chips size="large" color="primary" onClick={handleClick} selected>
        {text}
      </Chips>,
    )

    cy.findByText(text).should('be.visible')
    cy.get('span').click()
    cy.wrap(handleClick).should('have.been.calledOnce')
    cy.matchImage()
  })

  it('renders a large chip with selected tertiary', () => {
    cy.mount(
      <Chips size="large" color="tertiary" selected>
        {text}
      </Chips>,
    )

    cy.findByText(text).should('be.visible')
    cy.matchImage()
  })

  it('renders a small chip with selected secondary', () => {
    const handleClick = cy.stub()
    cy.mount(
      <Chips size="small" color="secondary" onClick={handleClick} selected>
        {text}
      </Chips>,
    )

    cy.findByText(text).should('be.visible')
    cy.get('span').click()
    cy.wrap(handleClick).should('have.been.calledOnce')
    cy.matchImage()
  })

  it('renders a small chip with primary', () => {
    cy.mount(
      <Chips size="small" color="primary">
        {text}
      </Chips>,
    )
    cy.findByText(text).should('be.visible')
    cy.matchImage()
  })

  it('renders a medium chip with primary', () => {
    cy.mount(
      <Chips size="medium" color="primary">
        {text}
      </Chips>,
    )
    cy.findByText(text).should('be.visible')
    cy.matchImage()
  })

  it('renders a large chip with primary', () => {
    cy.mount(
      <Chips size="large" color="primary">
        {text}
      </Chips>,
    )
    cy.findByText(text).should('be.visible')
    cy.matchImage()
  })

  it('renders a medium chip with secondary', () => {
    cy.mount(
      <Chips size="medium" color="secondary">
        {text}
      </Chips>,
    )
    cy.findByText(text).should('be.visible')
    cy.matchImage()
  })

  it('renders a small chip with tertiary', () => {
    cy.mount(
      <Chips size="small" color="tertiary">
        {text}
      </Chips>,
    )
    cy.findByText(text).should('be.visible')
    cy.matchImage()
  })

  it('renders a large chip with primary tag a', () => {
    cy.mount(
      <Chips size="large" color="primary" as="a" title={text} href={link}>
        {text}
      </Chips>,
    )
    cy.findByText(text).should('be.visible')
    cy.matchImage()
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
    cy.matchImage()
  })

  it('renders a large chip with primary tag button', () => {
    cy.mount(
      <Chips size="large" color="primary" as="button" title={text}>
        {text}
      </Chips>,
    )
    cy.findByText(text).should('be.visible')
    cy.matchImage()
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
    cy.matchImage()
  })

  it('renders a icon chip with only icon primary', () => {
    cy.mount(
      <Chips size="icon" color="primary">
        <SvgIcon iconName="chevron-right" size="medium" className="fill-neutral-high-400" />
      </Chips>,
    )
    cy.matchImage()
  })

  it('renders a icon chip with only icon secondary', () => {
    cy.mount(
      <Chips size="icon" color="secondary">
        <SvgIcon iconName="chevron-right" size="medium" className="fill-neutral-high-400" />
      </Chips>,
    )
    cy.matchImage()
  })

  it('renders a icon chip with only icon tertiary', () => {
    cy.mount(
      <Chips size="icon" color="tertiary">
        <SvgIcon iconName="chevron-right" size="medium" className="fill-brand-primary-500" />
      </Chips>,
    )
    cy.matchImage()
  })
})
