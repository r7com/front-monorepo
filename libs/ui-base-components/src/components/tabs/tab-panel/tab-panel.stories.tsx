import type { Meta, StoryObj } from '@storybook/react'
import { TabPanel } from './tab-panel'
import { Button } from '../../button'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction

const meta: Meta<typeof TabPanel> = {
  title: 'Example/TabPanel',
  component: TabPanel,
  tags: ['autodocs'],
  argTypes: {
    children: {
      description: 'Content of the panel',
    },
    className: {
      description: 'CSS classes to style the panel',
      type: 'string',
    },
    id: {
      description: 'Unique identifier for the panel',
      type: 'string',
    },
    tabId: {
      description: 'Unique identifier of the tab related to the panel',
      type: 'string',
    },
  },
}

export default meta
type Story = StoryObj<typeof TabPanel>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    children: (
      <>
        <p>Conteúdo do tabpanel</p>
        <Button disabled>Button</Button>
      </>
    ),
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/nMEiuxdxLaEtYcA7K68e7r/Base-Components-(Atualiza%C3%A7%C3%A3o-2023)?node-id=1979%3A3247&mode=dev',
      accessToken: 'figd_sHs6Ap894w4C-OAFls7tuq0fMMROyue-8zQJ8hRE',
    },
  },
}
