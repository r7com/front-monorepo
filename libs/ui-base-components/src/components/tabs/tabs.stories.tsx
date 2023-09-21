import type { Meta, StoryObj } from '@storybook/react'
import { Tabs } from './tabs'
import { TabList } from '../tab-list'
import { Tab } from '../tab/tab'
import { TabPanel } from '../tab-panel'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Tabs> = {
  title: 'Example/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  argTypes: {
    initialTabId: {
      description: 'Id of the tab that should be actived on first render',
    },
    children: {
      description:
        'Content of the tabs. Should be one TabList component and TabPanels related to the tabs on TabList',
    },
  },
}

export default meta
type Story = StoryObj<typeof Tabs>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  render: ({ ...args }) => (
    <Tabs {...args}>
      <TabList ariaLabel="cypress tabs">
        <Tab id="tab1" tabpanelId="tabpanel1" text="tab1" />
        <Tab id="tab2" tabpanelId="tabpanel2" text="tab2" />
        <Tab id="tab3" tabpanelId="tabpanel3" text="tab3" />
      </TabList>

      <TabPanel id="tabpanel1" tabId="tab1">
        <h2>Conteúdo tab 1</h2>
      </TabPanel>

      <TabPanel id="tabpanel2" tabId="tab2">
        <h2>Conteúdo tab 2</h2>
      </TabPanel>

      <TabPanel id="tabpanel3" tabId="tab3">
        <h2>Conteúdo tab 3</h2>
      </TabPanel>
    </Tabs>
  ),
  args: {},
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/nMEiuxdxLaEtYcA7K68e7r/Base-Components-(Atualiza%C3%A7%C3%A3o-2023)?node-id=1979%3A3247&mode=dev',
      accessToken: 'figd_sHs6Ap894w4C-OAFls7tuq0fMMROyue-8zQJ8hRE',
    },
  },
}
