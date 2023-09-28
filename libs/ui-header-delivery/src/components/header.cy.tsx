import { Header } from './header'
import { Menu } from './menu'

const CompleteHeader = () => (
  <Header>
    <Menu.Root>
      <Menu.List>
        <Menu.Item>
          <Menu.Link href="#">brasilia</Menu.Link>
        </Menu.Item>
        <Menu.Item>
          <Menu.Link href="#">entretenimento</Menu.Link>
        </Menu.Item>
        <Menu.Item>
          <Menu.Link href="#">esportes</Menu.Link>
        </Menu.Item>
        <Menu.Item>
          <Menu.Link href="#">hora 7</Menu.Link>
        </Menu.Item>
        <Menu.Item>
          <Menu.Link href="#">jr 24h</Menu.Link>
        </Menu.Item>
        <Menu.Item>
          <Menu.Link href="#">record tv</Menu.Link>
        </Menu.Item>
        <Menu.Item>
          <Menu.Link href="#">a fazenda 15</Menu.Link>
        </Menu.Item>
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
