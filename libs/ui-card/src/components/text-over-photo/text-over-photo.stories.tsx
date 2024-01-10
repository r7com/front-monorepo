import { Meta, StoryObj } from '@storybook/react'
import { TextOverPhoto } from './text-over-photo'
import { Card } from '../card'

const meta: Meta<typeof TextOverPhoto> = {
  title: 'ui-card/TextOverPhoto',
  component: TextOverPhoto,
  tags: ['autodocs'],
  argTypes: {},
}

export default meta

type Story = StoryObj<typeof TextOverPhoto>

export const Half: Story = {
  render: args => <TextOverPhoto {...args} />,
  args: {
    layout: 'half',
    renderHat: (
      <Card.HatWrapper>
        <Card.HatTitle color="high">vendedor ambulante</Card.HatTitle>
      </Card.HatWrapper>
    ),
    renderTitle: ({ CardTitle }) => (
      <CardTitle>Clientes dão Kombi para ex-galã Daniel Erthal trabalhar em Copacabana</CardTitle>
    ),
    renderImage: (
      <img
        src="//img.r7.com/images/daniel-erthal-03012024135027266?resize=536x326&crop=607x369 34 0&dimensions=536x326"
        alt="Clientes dão Kombi para ex-galã Daniel Erthal trabalhar em Copacabana"
      />
    ),
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/Pxz9nVdP2Im0YRWnDNM3J5/Core-C-%7C-Widgets-Home---VERS%C3%83O-1?type=design&node-id=2506-2326&mode=dev',
      accessToken: 'figd_sHs6Ap894w4C-OAFls7tuq0fMMROyue-8zQJ8hRE',
    },
  },
}

export const ResponsiveHalf: Story = {
  ...Half,
  render: args => (
    <div className="w-full sm:h-[320px]">
      <TextOverPhoto {...args} />
    </div>
  ),
  args: {
    ...Half.args,
    layout: 'half',
    responsiveOn: 'md',
  },
}

export const Vertical: Story = {
  ...Half,
  render: args => (
    <div className="h-[500px]">
      <TextOverPhoto {...args} />
    </div>
  ),
  args: {
    ...Half.args,
    renderTitle: ({ CardTitle }) => (
      <CardTitle>Leonardo Bricio contrai dengue e desabafa sobre estar doente e sozinho</CardTitle>
    ),
    renderHat: (
      <Card.HatWrapper>
        <Card.HatTitle color="high">'Me recuperando'</Card.HatTitle>
      </Card.HatWrapper>
    ),
    renderImage: (
      <img
        src="//img.r7.com/images/leonardo-bricio-10012024120558929?resize=208x324&crop=542x844 454 0&dimensions=208x324"
        alt="Leonardo Bricio contrai dengue e desabafa sobre estar doente e sozinho"
      />
    ),
    layout: 'vertical',
    size: 'fullHeight',
  },
}

export const ResponsiveVertical: Story = {
  ...Vertical,
  render: args => (
    <div className="w-full sm:w-[200px]">
      <TextOverPhoto {...args} />
    </div>
  ),
  args: {
    ...Vertical.args,
    layout: 'vertical',
    responsiveOn: 'md',
  },
}
