import { TabPanel } from './tabpanel'

describe(TabPanel.name, () => {
  it('should render default tabpanel', () => {
    cy.mount(
      <TabPanel id="1" tabId="1">
        <p>Conteúdo do tabpanel</p>
      </TabPanel>,
    )
    cy.get('#1').should('not.be.visible')
    cy.get('#1').should('have.attr', 'hidden')
    cy.matchImage()
  })

  it('should render selected tabpanel', () => {
    cy.mount(
      <TabPanel id="1" tabId="1" selected>
        <p>Conteúdo do tabpanel</p>
      </TabPanel>,
    )
    cy.findByRole('tabpanel').should('be.visible')
    cy.findByRole('tabpanel').should('not.have.attr', 'hidden')
    cy.matchImage()
  })
})
