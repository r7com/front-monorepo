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
  render: args => (
    <TextOverPhoto {...args}>
      <TextOverPhoto.Figure {...args}>
        <img
          src="//img.r7.com/images/daniel-erthal-03012024135027266?resize=536x326&crop=607x369 34 0&dimensions=536x326"
          alt="Clientes dão Kombi para ex-galã Daniel Erthal trabalhar em Copacabana"
        />
      </TextOverPhoto.Figure>

      <TextOverPhoto.TextWrapper>
        <Card.HatWrapper>
          <Card.HatTitle color="high">vendedor ambulante</Card.HatTitle>
        </Card.HatWrapper>

        <TextOverPhoto.Title>
          Clientes dão Kombi para ex-galã Daniel Erthal trabalhar em Copacabana
        </TextOverPhoto.Title>
      </TextOverPhoto.TextWrapper>
    </TextOverPhoto>
  ),
  args: {
    layout: 'half',
    size: 'full',
    responsiveAfter: 'none',
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
  decorators: [
    Story => (
      <div className="w-full sm:h-[320px]">
        <Story />
      </div>
    ),
  ],
  args: {
    ...Half.args,
    layout: 'half',
    responsiveAfter: 'md',
  },
}

export const Vertical: Story = {
  ...Half,
  decorators: [
    Story => (
      <div className="h-[500px]">
        <Story />
      </div>
    ),
  ],
  render: args => (
    <TextOverPhoto {...args}>
      <TextOverPhoto.Figure {...args}>
        <img
          src="//img.r7.com/images/leonardo-bricio-10012024120558929?resize=208x324&crop=542x844 454 0&dimensions=208x324"
          alt="Leonardo Bricio contrai dengue e desabafa sobre estar doente e sozinho"
        />
      </TextOverPhoto.Figure>

      <TextOverPhoto.TextWrapper>
        <Card.HatWrapper>
          <Card.HatTitle color="high">'Me recuperando'</Card.HatTitle>
        </Card.HatWrapper>

        <TextOverPhoto.Title>
          Leonardo Bricio contrai dengue e desabafa sobre estar doente e sozinho
        </TextOverPhoto.Title>
      </TextOverPhoto.TextWrapper>
    </TextOverPhoto>
  ),
  args: {
    ...Half.args,
    layout: 'vertical',
    size: 'fullHeight',
    responsiveAfter: 'none',
  },
}

export const ResponsiveVertical: Story = {
  ...Vertical,
  decorators: [
    Story => (
      <div className="w-full sm:w-[200px]">
        <Story />
      </div>
    ),
  ],
  args: {
    ...Vertical.args,
    layout: 'vertical',
    responsiveAfter: 'md',
  },
}
