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
  })

  it('renders a medium chip with primary', () => {
    cy.mount(
      <Chips size="medium" color="primary">
        {text}
      </Chips>,
    )
    cy.findByText(text).should('be.visible')
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

  it('renders a large chip with icon right primary', () => {
    cy.mount(
      <Chips size="large" color="primary">
        {text}
        <SvgIcon iconName="clock" size="medium" className="ml-quark" />
      </Chips>,
    )
    cy.get('svg').should('be.visible')
    cy.findByText(text).should('be.visible')
    cy.matchImage()
  })

  it('renders a large chip with icon left primary', () => {
    cy.mount(
      <Chips size="large" color="primary">
        <SvgIcon iconName="chevron-right" size="medium" className=" mr-quark" />
        {text}
      </Chips>,
    )
    cy.findByText(text).should('be.visible')
    cy.get('svg').should('be.visible')
    cy.matchImage()
  })

  it('renders a large chip with only icon primary', () => {
    cy.mount(
      <Chips size="large" color="primary">
        <SvgIcon iconName="clock" size="medium" />
      </Chips>,
    )
    cy.get('svg').should('be.visible')
    cy.matchImage()
  })

  it('renders a large chip with only icon secondary', () => {
    cy.mount(
      <Chips size="large" color="secondary">
        <SvgIcon iconName="clock" size="medium" />
      </Chips>,
    )
    cy.get('svg').should('be.visible')
    cy.matchImage()
  })

  it('renders a icon chip with only icon tertiary', () => {
    cy.mount(
      <Chips size="large" color="tertiary">
        <SvgIcon iconName="clock" size="medium" />
      </Chips>,
    )
    cy.get('svg').should('be.visible')
    cy.matchImage()
  })

  it('renders a large selected chip with only icon primary', () => {
    const handleClick = cy.stub()
    cy.mount(
      <Chips size="large" color="primary" onClick={handleClick} selected>
        <SvgIcon iconName="clock" size="medium" />
      </Chips>,
    )
    cy.get('svg').should('be.visible')
    cy.get('span').click()
    cy.wrap(handleClick).should('have.been.calledOnce')
    cy.matchImage()
  })

  it('renders a large selected chip with only icon secondary', () => {
    const handleClick = cy.stub()
    cy.mount(
      <Chips size="large" color="secondary" onClick={handleClick} selected>
        <SvgIcon iconName="clock" size="medium" />
      </Chips>,
    )
    cy.get('svg').should('be.visible')
    cy.get('span').click()
    cy.wrap(handleClick).should('have.been.calledOnce')
    cy.matchImage()
  })

  it('renders a icon selected chip with only icon tertiary', () => {
    const handleClick = cy.stub()
    cy.mount(
      <Chips size="large" color="tertiary" onClick={handleClick} selected>
        <SvgIcon iconName="clock" size="medium" />
      </Chips>,
    )
    cy.get('svg').should('be.visible')
    cy.get('span').click()
    cy.wrap(handleClick).should('have.been.calledOnce')
    cy.matchImage()
  })

  it('renders a large chip disabled with icon right primary', () => {
    cy.mount(
      <Chips size="large" color="primary" disabled>
        {text}
        <SvgIcon iconName="clock" size="medium" className="ml-quark" />
      </Chips>,
    )
    cy.get('svg').should('be.visible')
    cy.findByText(text).should('be.visible')
    cy.matchImage()
  })

  it('renders a large chip disabled with icon left primary', () => {
    cy.mount(
      <Chips size="large" color="primary" disabled>
        <SvgIcon iconName="chevron-right" size="medium" className=" mr-quark" />
        {text}
      </Chips>,
    )
    cy.findByText(text).should('be.visible')
    cy.get('svg').should('be.visible')
    cy.matchImage()
  })
})