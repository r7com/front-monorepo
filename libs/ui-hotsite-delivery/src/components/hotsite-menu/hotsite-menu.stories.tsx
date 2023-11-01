import type { Meta, StoryObj } from '@storybook/react'
import { Hotsite, HotsiteRootProps } from './hotsite-menu'

import { menuData } from '../../mocks/data'

const meta: Meta<HotsiteRootProps> = {
  title: 'hotsite-delivery/HotsiteMenu',
  component: Hotsite,
  tags: ['autodocs'],
  argTypes: {},
}

export default meta

type Story = StoryObj<HotsiteRootProps>

export const Primary: Story = {
  render: args => (
    <div className="h-[400px]">
      <Hotsite {...args}>
        <Hotsite.List>
          {menuData.items.map(item => (
            <Hotsite.Item key={item.id}>
              {item.submenu ? (
                <>
                  <Hotsite.Button id={item.id}>{item.name}</Hotsite.Button>
                  <Hotsite.Submenu id={item.id}>
                    {item.submenu.map(submenu => (
                      <Hotsite.SubmenuItem key={submenu.id}>
                        <Hotsite.Link href={submenu.url}>{submenu.name}</Hotsite.Link>
                      </Hotsite.SubmenuItem>
                    ))}
                  </Hotsite.Submenu>
                </>
              ) : (
                <Hotsite.Link href={item.url}>{item.name}</Hotsite.Link>
              )}
            </Hotsite.Item>
          ))}
        </Hotsite.List>
      </Hotsite>
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
