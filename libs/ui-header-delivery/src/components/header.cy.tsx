import { SvgIcon } from '@r7/ui-base-components'
import { Header } from './header'
import { Menu } from './menu'
import { Sidebar } from './sidebar'

import { MENU_DATA } from '../mocks/MENU_DATA'
import { SIDEBAR_DATA } from '../mocks/SIDEBAR_DATA'

const CompleteHeader = (
  <Header>
    <Header.MainSection>
      <Header.Logo
        link="https://www.r7.com"
        image={<SvgIcon iconName="logo-R7" color="primary" width={40} height={40} />}
      />

      <Sidebar.Toggle>menu</Sidebar.Toggle>
      <Sidebar>
        <Sidebar.Search />
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
      <Header.SocialList>
        <Header.SocialItem socialName="facebook" socialUrl="https://www.facebook.com/portalr7" />
        <Header.SocialItem socialName="twitter" socialUrl="https://twitter.com/portalr7" />
        <Header.SocialItem socialName="instagram" socialUrl="https://instagram.com/portalr7" />
      </Header.SocialList>
      <Header.SearchToggle />
      <Header.Search />
    </Header.MainSection>
  </Header>
)

describe('Header', () => {
  beforeEach(() => cy.mount(CompleteHeader))

  it('R7-Logo, sidebar-toggle button, navigation-menu, social-media share buttons and search-toggle button should be visible in large devices', () => {
    cy.viewport('macbook-11')

    cy.findByTitle('r7-logo').should('be.visible')
    cy.findByRole('button', { expanded: false, name: /menu/i }).should('be.visible')
    cy.findByLabelText('Menu principal').should('be.visible')
    cy.findByLabelText('Redes sociais para compartilhar').should('be.visible')
    cy.findByLabelText('Alternador de busca').should('be.visible')

    cy.matchImage()
  })

  it('Sidebar-toggle button and R7-Logo should be visible in small devices', () => {
    cy.viewport('iphone-se2')

    cy.findByTitle('r7-logo').should('be.visible')
    cy.findByRole('button', { expanded: false, name: /menu/i }).should('be.visible')

    cy.findByLabelText('Menu principal').should('not.be.visible')
    cy.findByLabelText('Redes sociais para compartilhar').should('not.be.visible')
    cy.findByLabelText('Alternador de busca').should('not.be.visible')

    cy.matchImage()
  })
})

describe('Header - Elements Interactions', () => {
  beforeEach(() => cy.mount(CompleteHeader))

  it('sidebar should only be visible after sidebar-toggle click - desktop presentation', () => {
    cy.viewport('macbook-11')

    cy.findByLabelText('Menu lateral').should('not.be.visible')

    cy.findByRole('button', { expanded: false, name: /menu/i }).click()
    cy.findByLabelText('Menu lateral').should('be.visible')

    cy.matchImage()
  })

  it('sidebar should only be visible after sidebar-toggle click - mobile presentation', () => {
    cy.viewport('iphone-se2')

    cy.findByLabelText('Menu lateral').should('not.be.visible')

    cy.findByRole('button', { expanded: false, name: /menu/i }).click()
    cy.findByLabelText('Menu lateral').should('be.visible')

    cy.matchImage()
  })

  it('sidebar search form should not be visible in large displays', () => {
    cy.viewport('macbook-11')
    cy.findByRole('button', { expanded: false, name: /menu/i }).click()

    cy.findByLabelText('Menu lateral').within(() => {
      cy.findByRole('search', { hidden: true }).should('not.be.visible')
    })
  })

  it('sidebar search form should only be visible in small devices', () => {
    cy.viewport('iphone-se2')
    cy.findByRole('button', { expanded: false, name: /menu/i }).click()

    cy.findByLabelText('Menu lateral').within(() => {
      cy.findByRole('search').should('be.visible')
    })

    cy.matchImage()
  })

  it('header-search-form should only be visible after header-search-toggle click', () => {
    cy.viewport('macbook-11')

    cy.findByLabelText('Busca do Portal R7').should('not.be.visible')

    cy.findByLabelText('Alternador de busca').should('be.visible').click()

    cy.findByLabelText('Busca do Portal R7').should('be.visible')

    cy.matchImage()
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
