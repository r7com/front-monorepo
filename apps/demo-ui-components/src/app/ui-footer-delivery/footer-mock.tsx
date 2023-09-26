import { Footer, SitemapFooter } from '@r7/ui-footer-delivery'

export function FooterMock() {
  return (
    <Footer>
      <SitemapFooter.Root>
        <SitemapFooter.Container>
          <SitemapFooter.MenuList>
            <SitemapFooter.MenuItem>
              <SitemapFooter.MenuTitle>Brasília</SitemapFooter.MenuTitle>
              <SitemapFooter.Submenu>
                <SitemapFooter.SubmenuItem>
                  <SitemapFooter.MenuLik
                    openInNewTab={true}
                    title="Links Submenu Brasília"
                    url="/brasilia/noticias"
                  >
                    Links Submenu Brasília
                  </SitemapFooter.MenuLik>
                </SitemapFooter.SubmenuItem>
              </SitemapFooter.Submenu>
            </SitemapFooter.MenuItem>
            <SitemapFooter.MenuItem>
              <SitemapFooter.MenuTitle>
                <SitemapFooter.MenuLik url="/entretenimento" title="Entretenimento">
                  Entretenimento
                </SitemapFooter.MenuLik>
              </SitemapFooter.MenuTitle>
            </SitemapFooter.MenuItem>
          </SitemapFooter.MenuList>
        </SitemapFooter.Container>
      </SitemapFooter.Root>
    </Footer>
  )
}
