import { Meta, StoryObj } from '@storybook/react'
import { ProportionalPhoto } from './proportional-photo'
import { Card } from '../card'

const meta: Meta<typeof ProportionalPhoto> = {
  title: 'ui-card/ProportionalPhoto',
  component: ProportionalPhoto,
  tags: ['autodocs'],
  argTypes: {},
}

export default meta

type Story = StoryObj<typeof ProportionalPhoto>

export const TwoSquareCards: Story = {
  render: args => (
    <ProportionalPhoto
      renderImage={args.renderImage}
      renderHat={args.renderHat}
      title={args.title}
    />
  ),
  args: {
    renderHat: (
      <Card.HatWrapper>
        <Card.HatTitle>são paulo e rio de janeiro</Card.HatTitle>
      </Card.HatWrapper>
    ),
    title: 'Ministério da Justiça abre processo contra Enel por apagões',
    renderImage: (
      <img
        src="//img.r7.com/images/apagao-sao-paulo-1123-19122023115816951?resize=348x199&amp;crop=1170x669 0 32&amp;dimensions=328x184"
        alt="Ministério da Justiça abre processo contra Enel por apagões"
        width="100%"
        height="auto"
      />
    ),
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/Pxz9nVdP2Im0YRWnDNM3J5/Core-C-%7C-Widgets-Home---VERS%C3%83O-1?type=design&node-id=2504-3593&mode=dev',
      accessToken: 'figd_sHs6Ap894w4C-OAFls7tuq0fMMROyue-8zQJ8hRE',
    },
  },
}
