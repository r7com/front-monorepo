import type { Meta, StoryObj } from '@storybook/react'
import { Proportional } from '.'

const Block = () => (
  <div className="layout-h-[280px] layout-bg-neutral-low-400 layout-items-center layout-justify-center layout-flex">
    Large Main Block
  </div>
)

const meta: Meta<typeof Proportional> = {
  title: 'layout/Proportional',
  tags: ['autodocs'],
}

export default meta

type StoryOne = StoryObj<typeof Proportional.One>
type StoryTwo = StoryObj<typeof Proportional.Two>
type StoryThree = StoryObj<typeof Proportional.Three>
type StoryFour = StoryObj<typeof Proportional.Four>

export const ProportionalOne: StoryOne = {
  render: () => (
    <Proportional.One>
      <Block />
    </Proportional.One>
  ),
}

export const ProportionalTwo: StoryTwo = {
  render: () => (
    <Proportional.Two>
      <Block />
      <Block />
    </Proportional.Two>
  ),
}

export const ProportionalThree: StoryThree = {
  render: () => (
    <Proportional.Three>
      <Block />
      <Block />
      <Block />
    </Proportional.Three>
  ),
}

export const ProportionalFour: StoryFour = {
  render: () => (
    <Proportional.Four>
      <Block />
      <Block />
      <Block />
      <Block />
    </Proportional.Four>
  ),
}
