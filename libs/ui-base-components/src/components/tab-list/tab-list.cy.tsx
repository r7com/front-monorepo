import { Tab } from '../tab/tab'
import { TabList } from './tab-list'

describe(TabList.name, () => {
  it('should render the tablist component', () => {
    cy.mount(
      <TabList ariaLabel="test tabs">
        <Tab tabpanelId="panel1" id="tab1" text="sou o tab1" size="large" />
        <Tab tabpanelId="panel2" id="tab2" text="sou o tab2" size="large" />
      </TabList>,
    )
    cy.findByRole('tablist').should('be.visible')
    cy.findByRole('tablist').should('have.attr', 'aria-label')
    cy.matchImage()
  })
})
