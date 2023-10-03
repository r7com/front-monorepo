import type { Meta, StoryObj } from '@storybook/react'
import { SitemapFooter } from './index'
import { SITEMAP_DATA } from '../../mocks/sitemap'

const columns = SITEMAP_DATA?.children[0]?.children

type SitemapFooterProps = {
  textColor: string
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
      <SitemapFooter.Container>
        {columns?.length > 0 &&
          columns.map(
            column =>
              column.children.length > 0 && (
                <SitemapFooter.MenuList key={column._id}>
                  {column?.children.map(section => (
                    <SitemapFooter.MenuItem key={section._id}>
                      <SitemapFooter.MenuTitle textColor={args.textColor}>
                        {section.name}
                      </SitemapFooter.MenuTitle>
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
  ),
  args: {
    textColor: '#218ee1',
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/aAvhagIuoibmWIOFnUorUe/Sitemap?node-id=19%3A677&mode=dev',
      accessToken: 'figd_sHs6Ap894w4C-OAFls7tuq0fMMROyue-8zQJ8hRE',
    },
  },
}
