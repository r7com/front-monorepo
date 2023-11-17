import type { Meta, StoryObj } from '@storybook/react'
import { SectionMenu, SectionMenuProps } from './section-menu'

import { menuData } from '../mocks/data'

const meta: Meta<SectionMenuProps> = {
  title: 'Header/SectionMenu',
  component: SectionMenu,
  tags: ['autodocs'],
  argTypes: {},
}

export default meta

type Story = StoryObj<SectionMenuProps>

export const Primary: Story = {
  render: args => (
    <div className="smenu-h-[400px]">
      <SectionMenu {...args}>
        <SectionMenu.List>
          {menuData.items.map(item => (
            <SectionMenu.Item key={item.id}>
              {item.submenu ? (
                <>
                  <SectionMenu.Button id={item.id}>{item.name}</SectionMenu.Button>
                  <SectionMenu.Submenu id={item.id}>
                    {item.submenu.map(submenu => (
                      <SectionMenu.SubmenuItem key={submenu.id}>
                        <SectionMenu.Link href={submenu.url}>{submenu.name}</SectionMenu.Link>
                      </SectionMenu.SubmenuItem>
                    ))}
                  </SectionMenu.Submenu>
                </>
              ) : (
                <SectionMenu.Link href={item.url}>{item.name}</SectionMenu.Link>
              )}
            </SectionMenu.Item>
          ))}
        </SectionMenu.List>
      </SectionMenu>
    </div>
  ),
  args: {
    label: 'Menu Storybook',
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/OBWV1tXbl1eXmdxzgEmcs3/Core-C-%7C-Delivery?type=design&node-id=2553-4499&mode=design&t=5yFzJBThiLgR0IwB-0',
      accessToken: 'figd_sHs6Ap894w4C-OAFls7tuq0fMMROyue-8zQJ8hRE',
    },
  },
}
