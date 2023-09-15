import type { Meta, StoryObj } from '@storybook/react'

import { Tooltip } from './tooltip'
import { Button } from '../button'

const meta: Meta<typeof Tooltip> = {
  title: 'Example/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  argTypes: {},
}

export default meta
type Story = StoryObj<typeof Tooltip>

const configs: Story = {
  render: ({ ...args }) => (
    <div className="justify-center flex items-center h-screen">
      <Tooltip {...args} />
    </div>
  ),
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/KtCmCn0gZJFU7n5JqmnfEP/Specific-C-Communication?node-id=1203%3A4513&mode=dev',
      accessToken: 'figd_sHs6Ap894w4C-OAFls7tuq0fMMROyue-8zQJ8hRE',
    },
  },
  args: {
    position: 'bottom',
    className: '',
    children: <Button>Elemento</Button>,
  },
}

export const ContentWithString: Story = {
  ...configs,
  args: {
    content: 'Conteudo com string',
    ...configs.args,
  },
}

const ContentTooltip = () => (
  <div>
    <h2>TITULO</h2>
    <p>Conteudo</p>
  </div>
)

export const ContentWithReactNode: Story = {
  ...configs,
  args: {
    content: <ContentTooltip />,
    ...configs.args,
  },
}
