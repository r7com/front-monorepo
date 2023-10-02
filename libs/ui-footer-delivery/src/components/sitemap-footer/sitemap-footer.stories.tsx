import type { Meta, StoryObj } from '@storybook/react'
import { SitemapFooter } from './index'
import { sitemapData } from '../../mocks/sitemap'

type RootDesktopProps = {
  textColor: string
}

const columns = sitemapData?.children[0]?.children

const RootDesktop = ({ textColor }: RootDesktopProps) => {
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
                      <SitemapFooter.MenuTitle textColor={textColor}>
                        {section.name}
                      </SitemapFooter.MenuTitle>
                      {section?.children.length > 0 && (
                        <SitemapFooter.Submenu>
                          {section?.children.map(sectionItem => (
                            <SitemapFooter.SubmenuItem key={sectionItem._id}>
                              <SitemapFooter.MenuLik
                                openInNewTab={true}
                                title={sectionItem.display_name}
                                url={sectionItem.url}
                              >
                                {sectionItem.display_name}
                              </SitemapFooter.MenuLik>
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

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof RootDesktop> = {
  title: 'Footer/SitemapFooter',
  component: RootDesktop,
  tags: ['autodocs'],
  argTypes: {},
}

export default meta
type Story = StoryObj<typeof RootDesktop>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Desktop: Story = {
  render: args => <RootDesktop {...args} />,
  args: {
    textColor: '#218ee1',
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/aAvhagIuoibmWIOFnUorUe/Sitemap?node-id=20%3A263&mode=dev',
      accessToken: 'figd_sHs6Ap894w4C-OAFls7tuq0fMMROyue-8zQJ8hRE',
    },
  },
}
