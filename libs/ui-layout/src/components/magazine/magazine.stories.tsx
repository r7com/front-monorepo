import type { Meta, StoryObj } from '@storybook/react'
import { Magazine } from './magazine'

const Block = () => (
  <div className="layout-h-[280px] layout-bg-neutral-low-400 layout-items-center layout-justify-center layout-flex">
    Large Main Block
  </div>
)

const meta: Meta<typeof Magazine> = {
  title: 'layout/Magazine',
  tags: ['autodocs'],
}

export default meta

type StoryOne = StoryObj<typeof Magazine.One>
type StoryTwo = StoryObj<typeof Magazine.Two>

export const MagazineOne: StoryOne = {
  render: () => (
    <Magazine.One>
      <Block />
      <Block />
      <Block />
    </Magazine.One>
  ),
}

export const MagazineTwo: StoryTwo = {
  render: () => (
    <Magazine.Two>
      <Block />
      <Block />
    </Magazine.Two>
  ),
}
