import type { Meta, StoryObj } from '@storybook/react'
import { SpecialOne } from './special-one'
import { LargeMainBlock, SidebarBlock, SmallMainBlock } from './mocks/mocks'

const SpecialOneBlock = () => (
  <SpecialOne
    renderMain={
      <SpecialOne.Main
        rowOne={
          <>
            <LargeMainBlock />
            <LargeMainBlock />
          </>
        }
        rowTwo={
          <>
            <SmallMainBlock />
            <SmallMainBlock />
            <SmallMainBlock />
          </>
        }
      />
    }
    renderSidebar={<SidebarBlock />}
  />
)

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof SpecialOneBlock> = {
  title: 'Layout/SpecialOne',
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof SpecialOneBlock>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Desktop: Story = {
  render: SpecialOneBlock,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/gEAl002sSzZq02zWPm2Qfk/Teste-Grid?type=dev',
      accessToken: 'figd_sHs6Ap894w4C-OAFls7tuq0fMMROyue-8zQJ8hRE',
    },
  },
}

export const Tablet: Story = {
  render: SpecialOneBlock,
  parameters: {
    viewport: {
      defaultViewport: 'ipad',
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/gEAl002sSzZq02zWPm2Qfk/Teste-Grid?type=dev',
      accessToken: 'figd_sHs6Ap894w4C-OAFls7tuq0fMMROyue-8zQJ8hRE',
    },
  },
}

export const Mobile: Story = {
  render: SpecialOneBlock,
  parameters: {
    viewport: {
      defaultViewport: 'iphone12',
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/gEAl002sSzZq02zWPm2Qfk/Teste-Grid?type=dev',
      accessToken: 'figd_sHs6Ap894w4C-OAFls7tuq0fMMROyue-8zQJ8hRE',
    },
  },
}
