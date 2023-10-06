import type { Meta, StoryObj } from '@storybook/react'
import { Header, Menu, Sidebar } from '../'

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
  render: args => (
    <div className="h-screen">
      <Header {...args}>
        <Sidebar.Toggle>menu</Sidebar.Toggle>
        <Sidebar.Root>
          {SIDEBAR_DATA.map(({ category, data, id }) => {
            return (
              <Sidebar.Category key={id} title={category}>
                <Sidebar.List>
                  {data.map(({ id, text, submenu, title, url }) => {
                    return (
                      <Sidebar.Item key={id}>
                        {submenu?.length ? (
                          <>
                            <Sidebar.Button id={id}>{text}</Sidebar.Button>
                            {/* todo: submenu */}
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
        </Sidebar.Root>

        <Menu.Root>
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
        </Menu.Root>
      </Header>
    </div>
  ),
  args: {
    className: '',
    bgColor: '',
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/OBWV1tXbl1eXmdxzgEmcs3/Core-C-%7C-Delivery?type=design&node-id=1970-2537&mode=design&t=HMPQG6OZhc0dnwMk-0',
      accessToken: 'figd_sHs6Ap894w4C-OAFls7tuq0fMMROyue-8zQJ8hRE',
    },
  },
}
