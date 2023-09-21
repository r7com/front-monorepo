import { Tabs } from './tabs'

describe(Tabs.name, () => {
  it('should render default tabs', () => {
    cy.mount(
      <Tabs initialTabId="tab1">
        <h1>asdad</h1>
      </Tabs>,
    )
    cy.matchImage()
  })
})
