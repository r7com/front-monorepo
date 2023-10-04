import type { Meta, StoryObj } from '@storybook/react'
import { TabButton } from './tab-button'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction

const meta: Meta<typeof TabButton> = {
  title: 'Example/TabButton',
  component: TabButton,
  tags: ['autodocs'],
  argTypes: {
    id: {
      description: 'Unique identifier for the tab',
    },
    text: {
      description: 'Name displayed on tab',
    },
    size: {
      description: 'Size of the tab',
      table: {
        defaultValue: {
          summary: 'medium',
        },
      },
      options: ['small', 'medium', 'large'],
      control: { type: 'radio' },
    },
    startIconName: {
      description: 'Name of the icon displayed at start of the tab',
    },
    endIconName: {
      description: 'Name of the icon displayed at the end of the tab',
      type: 'string',
    },
    tabpanelId: {
      description: 'Unique identifier of the panel related to the tab',
      type: 'string',
    },
  },
}

export default meta
type Story = StoryObj<typeof TabButton>

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
