import { Chips } from './chips'
import { SvgIcon } from '../svg-icon'

describe(Chips.name, () => {
  const text = 'nome tag'
  const chipsSelector = '[data-testid="chips"]'
  const iconSelector = '[data-testid="svg-icon"]' // Defina o seletor correto para o ícone
  const link = 'r7.com'

  // primary e secondary tem o mesmo layout de disabled
  it('renders a small chip with disabled', () => {
    cy.mount(
      <Chips size="small" variant="disabled" color="primary" title={text} href={link}>
        {text}
      </Chips>,
    )
    cy.findByText(text).should('be.visible')
    cy.get(chipsSelector).should('be.visible')
    cy.matchImage()
  })

  it('renders a medium chip with disabled', () => {
    cy.mount(
      <Chips size="medium" variant="disabled" color="primary" title={text} href={link}>
        {text}
      </Chips>,
    )
    cy.findByText(text).should('be.visible')
    cy.get(chipsSelector).should('be.visible')
    cy.matchImage()
  })

  it('renders a large chip with disabled', () => {
    cy.mount(
      <Chips size="large" variant="disabled" color="primary" title={text} href={link}>
        {text}
      </Chips>,
    )
    cy.findByText(text).should('be.visible')
    cy.get(chipsSelector).should('be.visible')
    cy.matchImage()
  })

  it('renders a small chip with disabled secondary', () => {
    cy.mount(
      <Chips size="small" variant="disabled" color="secondary" title={text} href={link}>
        {text}
      </Chips>,
    )
    cy.findByText(text).should('be.visible')
    cy.get(chipsSelector).should('be.visible')
    cy.matchImage()
  })

  it('renders a medium chip with disabled secondary', () => {
    cy.mount(
      <Chips size="medium" variant="disabled" color="secondary" title={text} href={link}>
        {text}
      </Chips>,
    )
    cy.findByText(text).should('be.visible')
    cy.get(chipsSelector).should('be.visible')
    cy.matchImage()
  })

  it('renders a large chip with disabled secondary', () => {
    cy.mount(
      <Chips size="large" variant="disabled" color="secondary" title={text} href={link}>
        {text}
      </Chips>,
    )
    cy.findByText(text).should('be.visible')
    cy.get(chipsSelector).should('be.visible')
    cy.matchImage()
  })

  it('renders a small chip with disabled tertiary', () => {
    cy.mount(
      <Chips size="small" variant="disabled" color="tertiary" title={text} href={link}>
        {text}
      </Chips>,
    )
    cy.findByText(text).should('be.visible')
    cy.get(chipsSelector).should('be.visible')
    cy.matchImage()
  })

  it('renders a medium chip with disabled tertiary', () => {
    cy.mount(
      <Chips size="medium" variant="disabled" color="tertiary" title={text} href={link}>
        {text}
      </Chips>,
    )
    cy.findByText(text).should('be.visible')
    cy.get(chipsSelector).should('be.visible')
    cy.matchImage()
  })

  it('renders a large chip with disabled tertiary', () => {
    cy.mount(
      <Chips size="large" variant="disabled" color="tertiary" title={text} href={link}>
        {text}
      </Chips>,
    )
    cy.findByText(text).should('be.visible')
    cy.get(chipsSelector).should('be.visible')
    cy.matchImage()
  })

  it('renders a small chip with active primary', () => {
    cy.mount(
      <Chips size="small" variant="active" color="primary" title={text} href={link}>
        {text}
      </Chips>,
    )
    cy.findByText(text).should('be.visible')
    cy.get(chipsSelector).should('be.visible')
    cy.matchImage()
  })

  it('renders a medium chip with active primary', () => {
    cy.mount(
      <Chips size="medium" variant="active" color="primary" title={text} href={link}>
        {text}
      </Chips>,
    )
    cy.findByText(text).should('be.visible')
    cy.get(chipsSelector).should('be.visible')
    cy.matchImage()
  })

  it('renders a large chip with active primary', () => {
    cy.mount(
      <Chips size="large" variant="active" color="primary" title={text} href={link}>
        {text}
      </Chips>,
    )
    cy.findByText(text).should('be.visible')
    cy.get(chipsSelector).should('be.visible')
    cy.matchImage()
  })

  it('renders a small chip with active secondary', () => {
    cy.mount(
      <Chips size="small" variant="active" color="secondary" title={text} href={link}>
        {text}
      </Chips>,
    )
    cy.findByText(text).should('be.visible')
    cy.get(chipsSelector).should('be.visible')
    cy.matchImage()
  })

  it('renders a medium chip with active secondary', () => {
    cy.mount(
      <Chips size="medium" variant="active" color="secondary" title={text} href={link}>
        {text}
      </Chips>,
    )
    cy.findByText(text).should('be.visible')
    cy.get(chipsSelector).should('be.visible')
    cy.matchImage()
  })

  it('renders a large chip with active secondary', () => {
    cy.mount(
      <Chips size="large" variant="active" color="secondary" title={text} href={link}>
        {text}
      </Chips>,
    )
    cy.findByText(text).should('be.visible')
    cy.get(chipsSelector).should('be.visible')
    cy.matchImage()
  })

  it('renders a small chip with active tertiary', () => {
    cy.mount(
      <Chips size="small" variant="active" color="tertiary" title={text} href={link}>
        {text}
      </Chips>,
    )
    cy.findByText(text).should('be.visible')
    cy.get(chipsSelector).should('be.visible')
    cy.matchImage()
  })

  it('renders a medium chip with active tertiary', () => {
    cy.mount(
      <Chips size="medium" variant="active" color="tertiary" title={text} href={link}>
        {text}
      </Chips>,
    )
    cy.findByText(text).should('be.visible')
    cy.get(chipsSelector).should('be.visible')
    cy.matchImage()
  })

  it('renders a large chip with active tertiary', () => {
    cy.mount(
      <Chips size="large" variant="active" color="tertiary" title={text} href={link}>
        {text}
      </Chips>,
    )
    cy.findByText(text).should('be.visible')
    cy.get(chipsSelector).should('be.visible')
    cy.matchImage()
  })

  it('renders a small chip with primary', () => {
    cy.mount(
      <Chips size="small" color="primary" title={text} href={link}>
        {text}
      </Chips>,
    )
    cy.findByText(text).should('be.visible')
    cy.get(chipsSelector).should('be.visible')
    cy.matchImage()
  })

  it('renders a medium chip with primary', () => {
    cy.mount(
      <Chips size="medium" color="primary" title={text} href={link}>
        {text}
      </Chips>,
    )
    cy.findByText(text).should('be.visible')
    cy.get(chipsSelector).should('be.visible')
    cy.matchImage()
  })

  it('renders a large chip with primary', () => {
    cy.mount(
      <Chips size="large" color="primary" title={text} href={link}>
        {text}
      </Chips>,
    )
    cy.findByText(text).should('be.visible')
    cy.get(chipsSelector).should('be.visible')
    cy.matchImage()
  })

  it('renders a small chip with secondary', () => {
    cy.mount(
      <Chips size="small" color="secondary" title={text} href={link}>
        {text}
      </Chips>,
    )
    cy.findByText(text).should('be.visible')
    cy.get(chipsSelector).should('be.visible')
    cy.matchImage()
  })

  it('renders a medium chip with secondary', () => {
    cy.mount(
      <Chips size="medium" color="secondary" title={text} href={link}>
        {text}
      </Chips>,
    )
    cy.findByText(text).should('be.visible')
    cy.get(chipsSelector).should('be.visible')
    cy.matchImage()
  })

  it('renders a large chip with secondary', () => {
    cy.mount(
      <Chips size="large" color="secondary" title={text} href={link}>
        {text}
      </Chips>,
    )
    cy.findByText(text).should('be.visible')
    cy.get(chipsSelector).should('be.visible')
    cy.matchImage()
  })

  it('renders a small chip with tertiary', () => {
    cy.mount(
      <Chips size="small" color="tertiary" title={text} href={link}>
        {text}
      </Chips>,
    )
    cy.findByText(text).should('be.visible')
    cy.get(chipsSelector).should('be.visible')
    cy.matchImage()
  })

  it('renders a medium chip with tertiary', () => {
    cy.mount(
      <Chips size="medium" color="tertiary" title={text} href={link}>
        {text}
      </Chips>,
    )
    cy.findByText(text).should('be.visible')
    cy.get(chipsSelector).should('be.visible')
    cy.matchImage()
  })

  it('renders a large chip with tertiary', () => {
    cy.mount(
      <Chips size="large" color="tertiary" title={text} href={link}>
        {text}
      </Chips>,
    )
    cy.findByText(text).should('be.visible')
    cy.get(chipsSelector).should('be.visible')
    cy.matchImage()
  })

  it('renders a default chip with only icon primary', () => {
    cy.mount(
      <Chips size="default" color="primary" title={text} href={link}>
        <SvgIcon iconName="arrow" size="medium" className="fill-[#FFFFFF]" />
      </Chips>,
    )
    cy.get(iconSelector).should('be.visible')
    cy.matchImage()
  })

  it('renders a default chip with only icon secondary', () => {
    cy.mount(
      <Chips size="default" color="secondary" title={text} href={link}>
        <SvgIcon iconName="arrow" size="medium" className="fill-[#FFFFFF]" />
      </Chips>,
    )
    cy.get(iconSelector).should('be.visible')
    cy.matchImage()
  })

  it('renders a default chip with only icon tertiary', () => {
    cy.mount(
      <Chips size="default" color="tertiary" title={text} href={link}>
        <SvgIcon iconName="arrow" size="medium" className="fill-[#218EE1]" />
      </Chips>,
    )
    cy.get(iconSelector).should('be.visible')
    cy.matchImage()
  })
})
