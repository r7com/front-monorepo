import { TabList } from '../tab-list/tab-list'
import { TabPanel } from '../tab-panel/tab-panel'
import { TabButton } from '../tab-button/tab-button'
import { Tabs } from './tabs'

const tabsSelector = '[data-testid="tabs"]'

describe(Tabs.name, () => {
  context('Rendering', () => {
    it('should render tabs component', () => {
      cy.mount(
        <Tabs>
          <TabList ariaLabel="cypress tabs">
            <TabButton id="tab1" tabpanelId="tabpanel1" text="tab1" />
            <TabButton id="tab2" tabpanelId="tabpanel2" text="tab2" />
            <TabButton id="tab3" tabpanelId="tabpanel3" text="tab3" />
          </TabList>

          <TabPanel id="tabpanel1" tabId="tab1">
            <h2>Conteúdo tab 1</h2>
          </TabPanel>

          <TabPanel id="tabpanel2" tabId="tab2">
            <h2>Conteúdo tab 2</h2>
          </TabPanel>

          <TabPanel id="tabpanel3" tabId="tab3">
            <h2>Conteúdo tab 3</h2>
          </TabPanel>
        </Tabs>,
      )
      cy.get(tabsSelector).should('be.visible')
      cy.matchImage()
    })

    it('should render tabs component with desired initial tab', () => {
      const initialTabId = 'tab2'
      cy.mount(
        <Tabs initialTabId={initialTabId}>
          <TabList ariaLabel="cypress tabs">
            <TabButton id="tab1" tabpanelId="tabpanel1" text="tab1" />
            <TabButton id="tab2" tabpanelId="tabpanel2" text="tab2" />
            <TabButton id="tab3" tabpanelId="tabpanel3" text="tab3" />
          </TabList>

          <TabPanel id="tabpanel1" tabId="tab1">
            <h2>Conteúdo tab 1</h2>
          </TabPanel>

          <TabPanel id="tabpanel2" tabId="tab2">
            <h2>Conteúdo tab 2</h2>
          </TabPanel>

          <TabPanel id="tabpanel3" tabId="tab3">
            <h2>Conteúdo tab 3</h2>
          </TabPanel>
        </Tabs>,
      )

      cy.get(tabsSelector).should('be.visible')
      cy.findAllByRole('tab').each(tab => {
        if (tab.attr('id') === initialTabId) {
          cy.wrap(tab).should('have.attr', 'aria-selected', 'true')
          cy.wrap(tab).should('have.attr', 'tabindex', 0)
        } else {
          cy.wrap(tab).should('have.attr', 'aria-selected', 'false')
          cy.wrap(tab).should('have.attr', 'tabindex', -1)
        }
      })
      cy.findAllByRole('tabpanel').should('have.length', 1)
      cy.findAllByRole('tabpanel').should('have.attr', 'aria-labelledby', initialTabId)
      cy.matchImage()
    })
  })

  context('Interaction', () => {
    beforeEach(() => {
      cy.mount(
        <Tabs>
          <TabList ariaLabel="cypress tabs">
            <TabButton id="tab1" tabpanelId="tabpanel1" text="tab1" />
            <TabButton id="tab2" tabpanelId="tabpanel2" text="tab2" />
            <TabButton id="tab3" tabpanelId="tabpanel3" text="tab3" />
          </TabList>

          <TabPanel id="tabpanel1" tabId="tab1">
            <h2>Conteúdo tab 1</h2>
          </TabPanel>

          <TabPanel id="tabpanel2" tabId="tab2">
            <h2>Conteúdo tab 2</h2>
          </TabPanel>

          <TabPanel id="tabpanel3" tabId="tab3">
            <h2>Conteúdo tab 3</h2>
          </TabPanel>
        </Tabs>,
      )
    })
    it('should change tab with click', () => {
      cy.findAllByRole('tab').eq(1).click()
      cy.findAllByRole('tab')
        .eq(1)
        .invoke('attr', 'id')
        .then(id => {
          cy.findAllByRole('tab').each(tab => {
            if (tab.attr('id') === id) {
              cy.wrap(tab).should('have.attr', 'aria-selected', 'true')
              cy.wrap(tab).should('have.attr', 'tabindex', 0)
            } else {
              cy.wrap(tab).should('have.attr', 'aria-selected', 'false')
              cy.wrap(tab).should('have.attr', 'tabindex', -1)
            }
          })
          cy.findAllByRole('tabpanel').should('have.length', 1)
          cy.findAllByRole('tabpanel').should('have.attr', 'aria-labelledby', id)
        })
      cy.matchImage()

      cy.findAllByRole('tab').eq(2).click()
      cy.findAllByRole('tab')
        .eq(2)
        .invoke('attr', 'id')
        .then(id => {
          cy.findAllByRole('tab').each(tab => {
            if (tab.attr('id') === id) {
              cy.wrap(tab).should('have.attr', 'aria-selected', 'true')
              cy.wrap(tab).should('have.attr', 'tabindex', 0)
            } else {
              cy.wrap(tab).should('have.attr', 'aria-selected', 'false')
              cy.wrap(tab).should('have.attr', 'tabindex', -1)
            }
          })
          cy.findAllByRole('tabpanel').should('have.length', 1)
          cy.findAllByRole('tabpanel').should('have.attr', 'aria-labelledby', id)
        })
      cy.matchImage()
    })

    it('should change to the tab on the right when arrow right is pressed', () => {
      cy.findAllByRole('tab').eq(0).focus()
      cy.findAllByRole('tab').eq(0).type('{rightArrow}')
      cy.findAllByRole('tab')
        .eq(1)
        .invoke('attr', 'id')
        .then(id => {
          cy.findAllByRole('tab').each(tab => {
            if (tab.attr('id') === id) {
              cy.wrap(tab).should('have.attr', 'aria-selected', 'true')
              cy.wrap(tab).should('have.attr', 'tabindex', 0)
            } else {
              cy.wrap(tab).should('have.attr', 'aria-selected', 'false')
              cy.wrap(tab).should('have.attr', 'tabindex', -1)
            }
          })
          cy.findAllByRole('tabpanel').should('have.length', 1)
          cy.findAllByRole('tabpanel').should('have.attr', 'aria-labelledby', id)
        })
      cy.matchImage()
    })

    it('should change to the tab on the left when arrow left is pressed', () => {
      // Utilizando clique para alterar a tab ativa pois o cypress ainda não oferece suporte para a tecla tab
      // Existe um plugin, porém ainda está em beta
      // https://docs.cypress.io/api/commands/type#Tabbing
      cy.findAllByRole('tab').eq(2).click()
      cy.findAllByRole('tab').eq(2).focus()
      cy.findAllByRole('tab').eq(2).type('{leftArrow}')
      cy.findAllByRole('tab')
        .eq(1)
        .invoke('attr', 'id')
        .then(id => {
          cy.findAllByRole('tab').each(tab => {
            if (tab.attr('id') === id) {
              cy.wrap(tab).should('have.attr', 'aria-selected', 'true')
              cy.wrap(tab).should('have.attr', 'tabindex', 0)
            } else {
              cy.wrap(tab).should('have.attr', 'aria-selected', 'false')
              cy.wrap(tab).should('have.attr', 'tabindex', -1)
            }
          })
          cy.findAllByRole('tabpanel').should('have.length', 1)
          cy.findAllByRole('tabpanel').should('have.attr', 'aria-labelledby', id)
        })
      cy.matchImage()
    })

    it('should not change tabs when arrow right is pressed, and theres no tab to the right', () => {
      cy.findAllByRole('tab').eq(2).click()
      cy.findAllByRole('tab').eq(2).focus()
      cy.findAllByRole('tab').eq(2).type('{rightArrow}')
      cy.findAllByRole('tab')
        .eq(2)
        .invoke('attr', 'id')
        .then(id => {
          cy.findAllByRole('tab').each(tab => {
            if (tab.attr('id') === id) {
              cy.wrap(tab).should('have.attr', 'aria-selected', 'true')
              cy.wrap(tab).should('have.attr', 'tabindex', 0)
            } else {
              cy.wrap(tab).should('have.attr', 'aria-selected', 'false')
              cy.wrap(tab).should('have.attr', 'tabindex', -1)
            }
          })
          cy.findAllByRole('tabpanel').should('have.length', 1)
          cy.findAllByRole('tabpanel').should('have.attr', 'aria-labelledby', id)
        })
      cy.matchImage()
    })
    it('should not change tabs when arrow left is pressed, and theres no tab to the left', () => {
      cy.findAllByRole('tab').eq(0).focus()
      cy.findAllByRole('tab').eq(0).type('{leftArrow}')
      cy.findAllByRole('tab')
        .eq(0)
        .invoke('attr', 'id')
        .then(id => {
          cy.findAllByRole('tab').each(tab => {
            if (tab.attr('id') === id) {
              cy.wrap(tab).should('have.attr', 'aria-selected', 'true')
              cy.wrap(tab).should('have.attr', 'tabindex', 0)
            } else {
              cy.wrap(tab).should('have.attr', 'aria-selected', 'false')
              cy.wrap(tab).should('have.attr', 'tabindex', -1)
            }
          })
          cy.findAllByRole('tabpanel').should('have.length', 1)
          cy.findAllByRole('tabpanel').should('have.attr', 'aria-labelledby', id)
        })
      cy.matchImage()
    })
  })
})
