import { Header } from './header'
import { Menu } from './menu'
import { Sidebar } from './sidebar'

import { MENU_DATA } from '../mocks/MENU_DATA'
import { SIDEBAR_DATA } from '../mocks/SIDEBAR_DATA'

const MockMenu = (
  <Menu.Root>
    <Menu.List>
      {MENU_DATA.map(({ id, text, title, url }) => {
        return (
          <Menu.Item key={id}>
            <Menu.Link href={url} title={title}>
              {text}
            </Menu.Link>
          </Menu.Item>
        )
      })}
    </Menu.List>
  </Menu.Root>
)

const MockSidebar = (
  <>
    <Sidebar.Toggle>menu</Sidebar.Toggle>
    <Sidebar.Root>
      {SIDEBAR_DATA.map(({ category, data, id }) => {
        return (
          <Sidebar.Category key={id} title={category}>
            <Sidebar.List>
              {data.map(({ id, text, submenu, title, url }) => {
                return (
                  <Sidebar.Item key={id}>
                    {submenu?.length ? (
                      <>
                        <Sidebar.Button id={id}>{text}</Sidebar.Button>
                        {/* todo: submenu */}
                      </>
                    ) : (
                      <Sidebar.Link title={title} href={url}>
                        {text}
                      </Sidebar.Link>
                    )}
                  </Sidebar.Item>
                )
              })}
            </Sidebar.List>
          </Sidebar.Category>
        )
      })}
    </Sidebar.Root>
  </>
)

describe('Header with menu', () => {
  beforeEach(() => {
    cy.mount(<Header>{MockMenu}</Header>)
  })

  it('navigation should be visible with desktop viewport', () => {
    cy.viewport('macbook-11')

    cy.findByRole('navigation').should('be.visible')
    cy.matchImage()
  })

  it('navigation should not be visible with mobile viewport', () => {
    cy.viewport('iphone-se2')

    cy.findByRole('navigation', { hidden: true }).should('not.be.visible')
  })
})

describe('Header with sidebar', () => {
  beforeEach(() => {
    cy.mount(<Header>{MockSidebar}</Header>)
  })

  it('sidebar should not be visible by default', () => {
    cy.viewport('macbook-11')

    cy.findByRole('navigation', { hidden: true }).should('not.be.visible')

    cy.matchImage()
  })

  it('should open sidebar on sidebar-toggle click', () => {
    cy.viewport('macbook-11')

    cy.findByRole('navigation', { hidden: true }).should('not.be.visible')

    cy.findByRole('button', { expanded: false, name: /menu/i }).click()
    cy.findByRole('navigation').should('be.visible')

    cy.matchImage()
  })
})
