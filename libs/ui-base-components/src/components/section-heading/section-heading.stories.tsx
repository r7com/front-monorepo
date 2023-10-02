import type { Meta, StoryObj } from '@storybook/react'
import { SectionHeading as SectionHeadingRoot, SectionHeadingProps } from './section-heading'
import { SectionHeading } from './'

const meta: Meta<SectionHeadingProps> = {
  title: 'Heading/SectionHeading',
  component: SectionHeadingRoot,
  tags: ['autodocs'],
  argTypes: {},
}

export default meta
type Story = StoryObj<SectionHeadingProps>

export const Default: Story = {
  render: ({ ...args }) => (
    <SectionHeading.Root {...args}>
      <SectionHeading.Title>
        <a href="/">Entretenimento</a>
      </SectionHeading.Title>

      <SectionHeading.Line />

      <SectionHeading.Tags>
        <SectionHeading.Tag href="#" title="Flavio Ricco">
          Flavio Ricco
        </SectionHeading.Tag>

        <SectionHeading.Tag href="#" title="Keila Jimenez">
          Keila Jimenez
        </SectionHeading.Tag>

        <SectionHeading.Tag href="#" title="Fabíola Reipert">
          Fabíola Reipert
        </SectionHeading.Tag>
      </SectionHeading.Tags>
    </SectionHeading.Root>
  ),
  args: {
    color: '#F78714',
  },
}

export const Image: Story = {
  render: ({ ...args }) => (
    <SectionHeading.Root {...args}>
      <a href="/">
        <SectionHeading.Image
          src="https://img.r7.com/images/jr-24h-18112019115830166?resize=110x70&crop=200x127+0+37"
          alt="Jornal da Record"
        />
      </a>

      <SectionHeading.Line />

      <SectionHeading.Tags>
        <SectionHeading.Tag href="#" title="Christina Lemos">
          Christina Lemos
        </SectionHeading.Tag>

        <SectionHeading.Tag href="#" title="Thiago Nolasco">
          Thiago Nolasco
        </SectionHeading.Tag>

        <SectionHeading.Tag href="#" title="Luiz Fara Monteiro">
          Luiz Fara Monteiro
        </SectionHeading.Tag>
      </SectionHeading.Tags>
    </SectionHeading.Root>
  ),
  args: {
    color: '#4766ac',
  },
}

export const TitleNoLink: Story = {
  render: ({ ...args }) => (
    <SectionHeading.Root {...args}>
      <SectionHeading.Title>Em alta</SectionHeading.Title>

      <SectionHeading.Line />
    </SectionHeading.Root>
  ),
  args: {
    color: '#218EE1',
  },
}

export const NoTags: Story = {
  render: ({ ...args }) => (
    <SectionHeading.Root {...args}>
      <SectionHeading.Title>
        <a href="/">Record TV</a>
      </SectionHeading.Title>

      <SectionHeading.Line />
    </SectionHeading.Root>
  ),
  args: {
    color: '#4766ac',
  },
}
