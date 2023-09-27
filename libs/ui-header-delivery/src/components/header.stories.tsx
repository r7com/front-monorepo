import type { Meta, StoryObj } from '@storybook/react'
import { Header, Menu } from '../'

const meta: Meta<typeof Header> = {
  title: 'header-delivery/Header',
  component: Header,
  tags: ['autodocs'],
  argTypes: {},
}

export default meta

type Story = StoryObj<typeof Header>

export const Primary: Story = {
  render: ({ ...args }) => (
    <Header {...args}>
      <Menu.Root>
        <Menu.List>
          <Menu.Item url="#">brasilia</Menu.Item>
          <Menu.Item url="#">entretenimento</Menu.Item>
          <Menu.Item url="#">esportes</Menu.Item>
          <Menu.Item url="#">hora 7</Menu.Item>
          <Menu.Item url="#">jr 24h</Menu.Item>
          <Menu.Item url="#">record tv</Menu.Item>
          <Menu.Item url="#">a fazenda 15</Menu.Item>
        </Menu.List>
      </Menu.Root>
    </Header>
  ),
  args: {
    className: '',
    editorialColor: '',
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/OBWV1tXbl1eXmdxzgEmcs3/Core-C-%7C-Delivery?type=design&node-id=1970-2537&mode=design&t=HMPQG6OZhc0dnwMk-0',
      accessToken: 'figd_sHs6Ap894w4C-OAFls7tuq0fMMROyue-8zQJ8hRE',
    },
  },
}
