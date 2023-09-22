import { Meta, StoryObj } from '@storybook/react'
import { TabList } from './tab-list'
import { TabButton } from '../tab-button/tab-button'

const meta: Meta<typeof TabList> = {
  title: 'Example/TabList',
  component: TabList,
  tags: ['autodocs'],
  argTypes: {
    ariaLabel: {
      description: 'Value of the aria-label property',
    },
    className: {
      description: 'CSS classes to style the tablist',
    },
  },
}

export default meta
type Story = StoryObj<typeof TabList>

export const Default: Story = {
  render: ({ ...args }) => (
    <TabList {...args}>
      <TabButton tabpanelId="panel1" id="tab1" text="sou o tab" size="large" />
      <TabButton tabpanelId="panel2" id="tab2" text="sou o tab" size="large" />
      <TabButton tabpanelId="panel3" id="tab3" text="sou o tab" size="large" />
      <TabButton tabpanelId="panel4" id="tab4" text="sou o tab" size="large" />
    </TabList>
  ),
  args: {
    ariaLabel: 'storybook tablist',
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/nMEiuxdxLaEtYcA7K68e7r/Base-Components-(Atualiza%C3%A7%C3%A3o-2023)?node-id=1979%3A3247&mode=dev',
      accessToken: 'figd_sHs6Ap894w4C-OAFls7tuq0fMMROyue-8zQJ8hRE',
    },
  },
}
