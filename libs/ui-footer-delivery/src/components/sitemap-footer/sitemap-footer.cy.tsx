import { SitemapFooter } from './index'
import { SITEMAP_DATA } from '../../mocks/sitemap'

describe('SitemapFooter', () => {
  const columns = SITEMAP_DATA?.children

  beforeEach(() => {
    cy.mount(
      <SitemapFooter.Root>
        <SitemapFooter.MenuList>
          {columns.length > 0 &&
            columns.map(column => (
              <SitemapFooter.MenuItem key={column._id}>
                <SitemapFooter.MenuTitle>
                  <SitemapFooter.Dropdown id={column._id}>
                    <SitemapFooter.MenuLink title={column.name} href={column.navigation?.menu_url}>
                      {column.name}
                    </SitemapFooter.MenuLink>
                  </SitemapFooter.Dropdown>
                </SitemapFooter.MenuTitle>
                <SitemapFooter.Submenu id={column._id}>
                  {column.children.length > 0 &&
                    column.children.map(
                      submenu =>
                        submenu.navigation && (
                          <SitemapFooter.SubmenuItem key={submenu._id}>
                            <SitemapFooter.MenuLink
                              title={submenu.navigation.nav_title}
                              href={submenu.navigation.menu_url}
                            >
                              {submenu.name}
                            </SitemapFooter.MenuLink>
                          </SitemapFooter.SubmenuItem>
                        ),
                    )}
                </SitemapFooter.Submenu>
              </SitemapFooter.MenuItem>
            ))}
        </SitemapFooter.MenuList>
      </SitemapFooter.Root>,
    )
  })

  it('should render Sitemap Footer with the correct structure', () => {
    cy.viewport('macbook-11')
    cy.findAllByRole('list')
      .eq(0)
      .within(() => {
        cy.findAllByRole('listitem')
          .eq(0)
          .within(() => {
            cy.findByRole('heading', { name: /jr 24h/i, level: 5 })
            cy.findByRole('list').within(() => {
              cy.findAllByRole('listitem')
                .eq(0)
                .within(() => {
                  cy.findByRole('link')
                    .eq(0)
                    .should('be.visible')
                    .and('have.attr', 'href', 'https://noticias.r7.com/brasilia')
                    .and('have.attr', 'title', 'BRASÍLIA')
                    .within(() => {
                      cy.findByRole('heading', { name: /brasília/i, level: 6 })
                    })
                })
            })
          })
      })
    cy.matchImage()
  })

  it('should render Sitemap Footer mobile with the correct structure', () => {
    cy.viewport('iphone-se2')
    cy.findAllByRole('list')
      .eq(0)
      .within(() => {
        cy.findAllByRole('listitem')
          .eq(0)
          .within(() => {
            cy.findByRole('heading', { name: /jr 24h/i, level: 5 })
            cy.findByRole('button').eq(0).should('be.visible')
            cy.findByRole('button').eq(0).click()
            cy.findByRole('list').within(() => {
              cy.findAllByRole('listitem')
                .eq(0)
                .within(() => {
                  cy.findByRole('link')
                    .eq(0)
                    .should('be.visible')
                    .and('have.attr', 'href', 'https://noticias.r7.com/brasilia')
                    .and('have.attr', 'title', 'BRASÍLIA')
                    .within(() => {
                      cy.findByRole('heading', { name: /brasília/i, level: 6 })
                    })
                })
            })
          })
      })
    cy.matchImage()
  })

  it('should render Sitemap Footer mobile with the correct structure opening and closing dropdown', () => {
    cy.viewport('iphone-se2')
    cy.findAllByRole('list')
      .eq(0)
      .within(() => {
        cy.findAllByRole('listitem')
          .eq(0)
          .within(() => {
            cy.findByRole('heading', { name: /jr 24h/i, level: 5 })
            cy.findByRole('button').eq(0).should('be.visible')
            cy.findByRole('button').eq(0).click()
            cy.findByRole('button').eq(0).click()
            cy.findByRole('list').should('not.exist')
          })
      })
    cy.matchImage()
  })

  it('should render link component according with the props', () => {
    cy.mount(
      <SitemapFooter.MenuLink href="https://r7.com" title="R7 Home" openInNewTab>
        My link component
      </SitemapFooter.MenuLink>,
    )

    cy.findByRole('link', { name: /my link component/i })
      .should('be.visible')
      .and('have.attr', 'href', 'https://r7.com')
      .and('have.attr', 'title', 'R7 Home')
      .and('have.attr', 'target', '_blank')
      .and('have.attr', 'rel', 'noreferrer')
  })

  it('should render link component without prop openInNewTab', () => {
    cy.mount(
      <SitemapFooter.MenuLink href="https://r7.com" title="R7 Home">
        My link component
      </SitemapFooter.MenuLink>,
    )

    cy.findByRole('link', { name: /my link component/i })
      .should('be.visible')
      .and('not.have.a.property', 'target')
    // I don't know, but it's not possible to test target and rel in same assertion when I use 'not'
    cy.findByRole('link', { name: /my link component/i })
      .should('be.visible')
      .and('not.have.a.property', 'rel')
  })
})
