import { TabPanel } from './tab-panel'

describe(TabPanel.name, () => {
  it('should render default tabpanel', () => {
    cy.mount(
      <TabPanel id="1" tabId="1">
        <p>Conteúdo do tabpanel</p>
      </TabPanel>,
    )
    cy.get('#1').should('not.be.visible')
    cy.get('#1').should('have.attr', 'hidden')
    cy.get('#1').should('have.attr', 'role', 'tabpanel')
    cy.get('#1').should('have.attr', 'aria-labelledby')
    cy.get('#1').should('have.attr', 'tab-index', 0)
    cy.matchImage()
  })
})
