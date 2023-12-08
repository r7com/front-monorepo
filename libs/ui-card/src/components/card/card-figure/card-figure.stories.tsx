import { Meta, StoryObj } from '@storybook/react'
import { Card } from '..'
import { CardFigureProps } from './card-figure'
import { ConditionalLink } from '@r7/ui-base-components'

const meta: Meta<CardFigureProps> = {
  title: 'ui-card/Card/Figure',
  component: Card.Figure,
  tags: ['autodocs'],
  argTypes: {},
}

export default meta

type Story = StoryObj<CardFigureProps>

export const Primary: Story = {
  render: ({ ...args }) => (
    <Card>
      <Card.Figure {...args}>
        <img
          src="//img.r7.com/images/pantano-australia-rosa-brilhante-04102023182425856?resize=536x326&crop=691x420 80 0&dimensions=536x326"
          alt="Human hand writting in a paper"
          className="card-w-full card-object-cover card-h-full"
        />
      </Card.Figure>
    </Card>
  ),
  args: {
    className: 'card-mb-xxxs',
    format: 'landscape',
    shadow: false,
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/Pxz9nVdP2Im0YRWnDNM3J5/Core-C-%7C-Widgets-Home?node-id=2039%3A624&mode=dev',
      accessToken: 'figd_sHs6Ap894w4C-OAFls7tuq0fMMROyue-8zQJ8hRE',
    },
  },
}

export const WithLink: Story = {
  render: ({ ...args }) => (
    <Card>
      <ConditionalLink href="http://www.google.com" title="Google">
        <Card.Figure {...args}>
          <img
            src="//img.r7.com/images/pantano-australia-rosa-brilhante-04102023182425856?resize=536x326&crop=691x420 80 0&dimensions=536x326"
            alt="Human hand writting in a paper"
            className="card-w-full card-object-cover card-h-full"
          />
          <Card.Label type="live" />
        </Card.Figure>
      </ConditionalLink>
    </Card>
  ),
  args: {
    className: 'card-mb-xxxs',
    format: 'landscape',
    shadow: false,
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/Pxz9nVdP2Im0YRWnDNM3J5/Core-C-%7C-Widgets-Home?node-id=2039%3A624&mode=dev',
      accessToken: 'figd_sHs6Ap894w4C-OAFls7tuq0fMMROyue-8zQJ8hRE',
    },
  },
}

export const WithLabel: Story = {
  render: ({ ...args }) => (
    <Card>
      <Card.Figure {...args}>
        <img
          src="//img.r7.com/images/pantano-australia-rosa-brilhante-04102023182425856?resize=536x326&crop=691x420 80 0&dimensions=536x326"
          alt="Human hand writting in a paper"
          className="card-w-full card-object-cover card-h-full"
        />
        <Card.Label type="live" />
      </Card.Figure>
    </Card>
  ),
  args: {
    className: 'card-mb-xxxs',
    format: 'landscape',
    shadow: false,
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/Pxz9nVdP2Im0YRWnDNM3J5/Core-C-%7C-Widgets-Home?node-id=2039%3A624&mode=dev',
      accessToken: 'figd_sHs6Ap894w4C-OAFls7tuq0fMMROyue-8zQJ8hRE',
    },
  },
}