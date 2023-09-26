import { TabButton } from './tab-button'

describe(TabButton.name, () => {
  it('should render default tab', () => {
    cy.mount(<TabButton id="1" tabpanelId="1" text="Aba" />)
    cy.findByRole('tab').should('be.visible')
    cy.findByRole('tab').should('have.attr', 'aria-selected', 'false')
    cy.findByRole('tab').should('have.attr', 'tabindex', '-1')
    cy.matchImage()
  })

  it('should render all "size" variant options', () => {
    cy.mount(
      <>
        <TabButton id="1" tabpanelId="1" text="small" size="small" />
        <TabButton id="2" tabpanelId="2" text="medium" />
        <TabButton id="3" tabpanelId="3" text="large" size="large" />
      </>,
    )

    cy.findByRole('tab', { name: /small/i }).should('be.visible')
    cy.findByRole('tab', { name: /medium/i }).should('be.visible')
    cy.findByRole('tab', { name: /large/i }).should('be.visible')
    cy.matchImage()
  })

  it('should render the tab with icons at the start, at the end and both start and end', () => {
    cy.mount(
      <>
        <TabButton id="1" tabpanelId="1" text="start" startIconName="info" />
        <TabButton id="2" tabpanelId="2" text="end" endIconName="info" />
        <TabButton id="3" tabpanelId="3" text="both" startIconName="info" endIconName="clock" />
      </>,
    )

    cy.findByRole('tab', { name: /start/i }).should('be.visible')
    cy.findByRole('tab', { name: /start/i }).within(() => {
      cy.get('svg').should('be.visible')
      cy.get('svg').should('have.length', 1)
    })

    cy.findByRole('tab', { name: /end/i }).should('be.visible')
    cy.findByRole('tab', { name: /end/i }).within(() => {
      cy.get('svg').should('be.visible')
      cy.get('svg').should('have.length', 1)
    })

    cy.findByRole('tab', { name: /both/i }).should('be.visible')
    cy.findByRole('tab', { name: /both/i }).within(() => {
      cy.get('svg').should('be.visible')
      cy.get('svg').should('have.length', 2)
    })

    cy.matchImage()
  })
})