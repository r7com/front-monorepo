import type { Meta, StoryObj } from '@storybook/react'
import { SectionFoot, SectionFootProps } from './section-foot'

const meta: Meta<SectionFootProps> = {
  title: 'Foot/SectionFoot',
  component: SectionFoot,
  tags: ['autodocs'],
  argTypes: {},
}

export default meta
type Story = StoryObj<SectionFootProps>

export const Default: Story = {
  render: ({ ...args }) => (
    <SectionFoot {...args}>
      <SectionFoot.Line />

      <SectionFoot.Link href="https://www.r7.com/" title="Mais a fazenda">
        <SectionFoot.Title>MAIS A FAZENDA</SectionFoot.Title>
      </SectionFoot.Link>
    </SectionFoot>
  ),
  args: {
    color: '#ffffff',
    bg: '#556373',
  },
}
