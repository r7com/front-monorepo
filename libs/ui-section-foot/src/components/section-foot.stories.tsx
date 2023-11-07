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

      <SectionFoot.Link href="https://www.r7.com/" title="Mais notícias">
        Mais a fazenda
      </SectionFoot.Link>
    </SectionFoot>
  ),
  args: {
    bg: '#556373',
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/OBWV1tXbl1eXmdxzgEmcs3/Core-C-%7C-Delivery?type=design&node-id=1989-3051&mode=design&t=xx7Gv2klBxZJBSky-0',
      accessToken: 'figd_sHs6Ap894w4C-OAFls7tuq0fMMROyue-8zQJ8hRE',
    },
  },
}
