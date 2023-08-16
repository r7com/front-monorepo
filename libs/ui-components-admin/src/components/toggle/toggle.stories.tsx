import type { Meta, StoryObj } from '@storybook/react'
import { useArgs } from '@storybook/client-api'

import { Toggle } from './toggle'

const meta: Meta<typeof Toggle> = {
  title: 'Example/Toggle',
  component: Toggle,
  tags: ['autodocs'],
  argTypes: {},
}

export default meta

type Story = StoryObj<typeof Toggle>

function Render({ ...args }) {
  const [{ checked }, updateArgs] = useArgs()
  const handleToggle = () => updateArgs({ checked: !checked })

  return (
    <div>
      <Toggle {...args} name="teste" checked={checked} onChange={handleToggle} />
    </div>
  )
}

export const Default: Story = {
  render: Render,
  args: {
    size: 'large',
    disabled: false,
    disableIcon: false,
    checked: true,
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/nMEiuxdxLaEtYcA7K68e7r/Base-Components-(Atualiza%C3%A7%C3%A3o-2023)?type=design&node-id=1822-1097&mode=design&t=wnltdPYXN54z2Ykp-0',
      accessToken: 'figd_sHs6Ap894w4C-OAFls7tuq0fMMROyue-8zQJ8hRE',
    },
  },
}
