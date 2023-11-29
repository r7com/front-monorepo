import '@r7/ui-footer-delivery/css'
import { SITEMAP_DATA } from '../mocks/sitemap'
import { SitemapFooter } from '@r7/ui-footer-delivery'

const columns = SITEMAP_DATA?.children[0]?.children

export function UiFooterDelivery() {
  return (
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
    </SitemapFooter.Root>
  )
}
