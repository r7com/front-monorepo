import type { Meta, StoryObj } from '@storybook/react'
import { useArgs } from '@storybook/client-api'
import { Chips, ChipsProps } from './chips'

const meta: Meta<ChipsProps<'span'>> = {
  title: 'Base/Chips',
  component: Chips,
  tags: ['autodocs'],
  argTypes: {
    color: {
      options: ['primary', 'secondary', 'tertiary'],
      control: { type: 'radio' },
    },
    size: {
      options: ['medium', 'small', 'large'],
      control: { type: 'radio' },
    },
  },
}

export default meta

type Story = StoryObj<ChipsProps<'span'>>

function Render({ ...args }) {
  const [{ selected }, updateArgs] = useArgs()
  const handleChips = () => updateArgs({ selected: !selected })

  return (
    <Chips size="large" onClick={handleChips} clickable {...args}>
      nome tag
    </Chips>
  )
}

export const Primary: Story = {
  render: Render,
  args: {
    color: 'primary',
    disabled: false,
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/nMEiuxdxLaEtYcA7K68e7r/Base-Components-(Atualiza%C3%A7%C3%A3o-2023)?type=design&node-id=1810-419&mode=design&t=NeNTxx8rH87Wy0O0-0',
      accessToken: 'figd_sHs6Ap894w4C-OAFls7tuq0fMMROyue-8zQJ8hRE',
    },
  },
}
