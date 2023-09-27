import { Header } from './header'
import { Menu } from './menu'

const CompleteHeader = () => (
  <Header>
    <Menu.Root>
      <Menu.List>
        <Menu.Item url="#">brasilia</Menu.Item>
        <Menu.Item url="#">entretenimento</Menu.Item>
        <Menu.Item url="#">esportes</Menu.Item>
        <Menu.Item url="#">hora 7</Menu.Item>
        <Menu.Item url="#">jr 24h</Menu.Item>
        <Menu.Item url="#">record tv</Menu.Item>
        <Menu.Item url="#">a fazenda 15</Menu.Item>
      </Menu.List>
    </Menu.Root>
  </Header>
)

describe('Header with menu', () => {
  it('navigation should be visible with desktop viewport', () => {
    cy.viewport('macbook-11')

    cy.mount(<CompleteHeader />)

    cy.findByRole('navigation').should('be.visible')
    cy.matchImage()
  })

  it('navigation should not be visible with mobile viewport', () => {
    cy.viewport('iphone-se2')

    cy.mount(<CompleteHeader />)

    cy.findByRole('navigation', { hidden: true }).should('not.be.visible')
  })
})
