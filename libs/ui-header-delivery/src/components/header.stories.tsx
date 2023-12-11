import type { Meta, StoryObj } from '@storybook/react'
import { Header, Menu, Sidebar, InternalsHeader } from '../'

import { MENU_DATA } from '../mocks/MENU_DATA'
import { SIDEBAR_DATA } from '../mocks/SIDEBAR_DATA'

const meta: Meta<typeof Header> = {
  title: 'header-delivery/Header',
  component: Header,
  tags: ['autodocs'],
  argTypes: {},
}

export default meta

type Story = StoryObj<typeof Header>

export const Primary: Story = {
  render: () => (
    <div className="header-h-screen">
      <Header>
        <Header.MainSection>
          <Header.Logo
            link="https://www.r7.com"
            logoUrl="https://static.themebuilder.aws.arc.pub/newr7-sandbox/1698842893138.svg"
            alt="Logo R7"
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
              {MENU_DATA.map(item => {
                return (
                  <Menu.Item key={item.id}>
                    <Menu.Link href={item.url} title={item.title}>
                      {item.text}
                    </Menu.Link>
                  </Menu.Item>
                )
              })}
            </Menu.List>
          </Menu>
          <Header.SocialList>
            <Header.SocialItem
              socialName="facebook"
              socialUrl="https://www.facebook.com/portalr7"
            />
            <Header.SocialItem socialName="twitter" socialUrl="https://twitter.com/portalr7" />
            <Header.SocialItem socialName="instagram" socialUrl="https://instagram.com/portalr7" />
          </Header.SocialList>
          <Header.SearchToggle />
          <Header.Search />
        </Header.MainSection>
      </Header>
    </div>
  ),
  args: {},
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/OBWV1tXbl1eXmdxzgEmcs3/Core-C-%7C-Delivery?type=design&node-id=1970-2537&mode=design&t=HMPQG6OZhc0dnwMk-0',
      accessToken: 'figd_sHs6Ap894w4C-OAFls7tuq0fMMROyue-8zQJ8hRE',
    },
  },
}

export const Internals: Story = {
  render: () => (
    <div className="header-h-screen">
      <InternalsHeader triggerElementSelector='[data-el="heading-trigger"]'>
        <Header.Logo
          link="https://www.r7.com"
          logoUrl="https://static.themebuilder.aws.arc.pub/newr7-sandbox/1695891496962.png"
          alt="Portal R7"
        />
        <InternalsHeader.SectionName sectionUrl="#">editoria</InternalsHeader.SectionName>

        <InternalsHeader.Title>titulo do artigo</InternalsHeader.Title>
      </InternalsHeader>
    </div>
  ),
  args: {},
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/OBWV1tXbl1eXmdxzgEmcs3/Core-C-%7C-Delivery?type=design&node-id=1970-2537&mode=design&t=HMPQG6OZhc0dnwMk-0',
      accessToken: 'figd_sHs6Ap894w4C-OAFls7tuq0fMMROyue-8zQJ8hRE',
    },
  },
}
