import { Header } from './header'
import { Menu } from './menu'
import { Sidebar } from './sidebar'

import { MENU_DATA } from '../mocks/MENU_DATA'
import { SIDEBAR_DATA } from '../mocks/SIDEBAR_DATA'

const MockMenu = (
  <Menu>
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
  </Menu>
)

const MockSidebar = (
  <>
    <Sidebar.Toggle>menu</Sidebar.Toggle>
    <Sidebar>
      <Sidebar.Search
        onSubmit={evt => {
          evt.preventDefault()
          console.log(evt)
        }}
      />
      {SIDEBAR_DATA.map(({ category, data, id }) => {
        return (
          <Sidebar.Category key={id} title={category}>
            <Sidebar.List label={category}>
              {data.map(({ id, text, submenu, title, url }) => {
                return (
                  <Sidebar.Item key={id}>
                    {submenu?.length ? (
                      <>
                        <Sidebar.Button id={id}>{text}</Sidebar.Button>
                        <Sidebar.Submenu id={id}>
                          <Sidebar.List label={text}>
                            {submenu.map(({ id, text, title, url }) => {
                              return (
                                <Sidebar.Item key={id}>
                                  <Sidebar.Link title={title} href={url}>
                                    {text}
                                  </Sidebar.Link>
                                </Sidebar.Item>
                              )
                            })}
                          </Sidebar.List>
                        </Sidebar.Submenu>
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
    </Sidebar>
  </>
)

describe('Header with menu', () => {
  beforeEach(() => {
    cy.mount(
      <Header>
        <Header.MainSection>{MockMenu}</Header.MainSection>
      </Header>,
    )
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
    cy.mount(
      <Header>
        <Header.MainSection>{MockSidebar}</Header.MainSection>
      </Header>,
    )
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

  it('should open sidebar on sidebar-toggle click - mobile presentation', () => {
    cy.viewport('iphone-se2')

    cy.findByRole('navigation', { hidden: true }).should('not.be.visible')

    cy.findByRole('button', { expanded: false, name: /menu/i }).click()
    cy.findByRole('navigation').should('be.visible')

    cy.matchImage()
  })

  it('sidebar search form should not be visible in large displays', () => {
    cy.viewport('macbook-11')
    cy.findByRole('button', { expanded: false, name: /menu/i }).click()

    cy.findByRole('search', { hidden: true }).should('not.be.visible')
  })

  it('sidebar search form should only be visible in small devices', () => {
    cy.viewport('iphone-se2')
    cy.findByRole('button', { expanded: false, name: /menu/i }).click()

    cy.findByRole('search').should('be.visible')

    cy.matchImage()
  })
})

describe('Header with sidebar - user interactions', () => {
  beforeEach(() => {
    cy.mount(
      <Header>
        <Header.MainSection>{MockSidebar}</Header.MainSection>
      </Header>,
    )
  })

  it('click on "blogs" item should expand its submenu', () => {
    cy.viewport('macbook-11')

    cy.findByRole('button', { expanded: false, name: /menu/i }).click()
    cy.findByRole('button', { expanded: false, name: /blogs/i }).click()

    cy.findByLabelText('Menu para blogs').should('be.visible')
  })

  it('submenu for "blogs" item should not be visible on "voltar" click', () => {
    cy.viewport('macbook-11')

    cy.findByRole('button', { expanded: false, name: /menu/i }).click()
    cy.findByRole('button', { expanded: false, name: /blogs/i }).click()

    cy.findByRole('button', { name: /voltar/i }).click()

    cy.findByLabelText('Menu para blogs').should('be.not.visible')
  })
})
