import { SitemapFooter } from './index'
import { SITEMAP_DATA } from '../../mocks/sitemap'

describe('SitemapFooter', () => {
  const columns = SITEMAP_DATA?.children[0]?.children

  beforeEach(() => {
    cy.mount(
      <SitemapFooter.Root>
        <SitemapFooter.Container>
          {columns?.length > 0 &&
            columns.map(
              column =>
                column.children.length > 0 && (
                  <SitemapFooter.MenuList key={column._id}>
                    {column?.children.map(section => (
                      <SitemapFooter.MenuItem key={section._id}>
                        <SitemapFooter.MenuTitle>{section.name}</SitemapFooter.MenuTitle>
                        {section?.children.length > 0 && (
                          <SitemapFooter.Submenu>
                            {section?.children.map(sectionItem => (
                              <SitemapFooter.SubmenuItem key={sectionItem._id}>
                                <SitemapFooter.MenuLink
                                  openInNewTab={true}
                                  title={sectionItem.display_name}
                                  href={sectionItem.url}
                                >
                                  {sectionItem.display_name}
                                </SitemapFooter.MenuLink>
                              </SitemapFooter.SubmenuItem>
                            ))}
                          </SitemapFooter.Submenu>
                        )}
                      </SitemapFooter.MenuItem>
                    ))}
                  </SitemapFooter.MenuList>
                ),
            )}
        </SitemapFooter.Container>
      </SitemapFooter.Root>,
    )
  })

  it('should render Sitemap Footer with the correct structure', () => {
    cy.viewport('macbook-11')
    cy.findAllByRole('list')
      .eq(0)
      .within(() => {
        cy.findAllByRole('listitem')
          .eq(1)
          .within(() => {
            cy.findByRole('heading', { name: /jr 24h/i, level: 5 })
            cy.findByRole('list').within(() => {
              cy.findAllByRole('listitem')
                .eq(0)
                .within(() => {
                  cy.findByRole('link', { name: /economia/i })
                    .should('be.visible')
                    .and('have.attr', 'href', 'https://noticias.r7.com/economia')
                    .and('have.attr', 'title', 'ECONOMIA')
                })
            })
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
