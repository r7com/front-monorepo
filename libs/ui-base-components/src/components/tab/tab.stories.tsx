import type { Meta, StoryObj } from '@storybook/react'
import { Tab } from './tab'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction

const meta: Meta<typeof Tab> = {
  title: 'Example/Tab',
  component: Tab,
  tags: ['autodocs'],
  argTypes: {
    text: {
      description: '<b>Mandatory:</b> name displayed on tab',
    },
    size: {
      description: '<b>Optional:</b> size of the tab',
      table: {
        defaultValue: {
          summary: 'medium',
        },
      },
      options: ['small', 'medium', 'large'],
      control: { type: 'radio' },
    },
    startIconName: {
      description: '<b>Optional:</b> name of the icon displayed at start of the tab',
      type: 'string',
    },
    endIconName: {
      description: '<b>Optional:</b> name of the icon displayed at the end of the tab',
      type: 'string',
    },
    id: {
      description: '<b>Mandatory:</b> Unique identifier for the tab',
      type: 'string',
    },
    tabpanelId: {
      description: '<b>Mandatory:</b> Unique identifier of the panel related to the tab',
      type: 'string',
    },
  },
}

export default meta
type Story = StoryObj<typeof Tab>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    text: 'Tab',
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/nMEiuxdxLaEtYcA7K68e7r/Base-Components-(Atualiza%C3%A7%C3%A3o-2023)?node-id=1979%3A3247&mode=dev',
      accessToken: 'figd_sHs6Ap894w4C-OAFls7tuq0fMMROyue-8zQJ8hRE',
    },
  },
}
