import { SITEMAP_DATA } from '../mocks/sitemap'
import { SitemapFooter } from '@r7/ui-footer-delivery'

const columns = SITEMAP_DATA?.children[0]?.children

export function UiFooterDelivery() {
  return (
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
    </SitemapFooter.Root>
  )
}
