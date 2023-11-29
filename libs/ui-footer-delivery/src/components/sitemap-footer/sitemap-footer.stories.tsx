import type { Meta, StoryObj } from '@storybook/react'
import { SitemapFooter } from './index'
import { SITEMAP_DATA } from '../../mocks/sitemap'

const columns = SITEMAP_DATA?.children

type SitemapFooterProps = {
  color: string
}

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<SitemapFooterProps> = {
  title: 'Footer/SitemapFooter',
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<SitemapFooterProps>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Desktop: Story = {
  render: args => (
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
  ),
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/OBWV1tXbl1eXmdxzgEmcs3/Core-C-%7C-Delivery?node-id=2546%3A8344&mode=dev',
      accessToken: 'figd_sHs6Ap894w4C-OAFls7tuq0fMMROyue-8zQJ8hRE',
    },
  },
}

export const Mobile: Story = {
  render: args => (
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
  ),
  parameters: {
    viewport: {
      defaultViewport: 'iphone12',
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/OBWV1tXbl1eXmdxzgEmcs3/Core-C-%7C-Delivery?node-id=2546%3A332&mode=dev',
      accessToken: 'figd_sHs6Ap894w4C-OAFls7tuq0fMMROyue-8zQJ8hRE',
    },
  },
}
