import type { Meta, StoryObj } from '@storybook/react'

import { Tooltip } from '.'
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
    <div className="justify-center flex items-center h-[100vh]">
      <Tooltip {...args} />
    </div>
  ),
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/EMH8xJPwcYWJYP8DBYePpR/Desktop%3A-Votação?type=design&node-id=1108%3A74&mode=dev',
      accessToken: 'figd_sHs6Ap894w4C-OAFls7tuq0fMMROyue-8zQJ8hRE',
    },
  },
  args: {
    arrow: true,
    position: 'top',
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
