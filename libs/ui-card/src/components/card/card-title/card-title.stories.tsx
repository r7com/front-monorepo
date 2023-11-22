import { Meta, StoryObj } from '@storybook/react'
import { Card } from '../'
import { CardTitleProps } from './card-title'

const meta: Meta<CardTitleProps> = {
  title: 'ui-card/Card/Title',
  component: Card.Title,
  tags: ['autodocs'],
  argTypes: {},
}

export default meta

type Story = StoryObj<CardTitleProps>

export const Primary: Story = {
  render: ({ ...args }) => (
    <Card
      className="card-flex"
      newsUrlTitle="The McRib is back (again): How a McNugget shortage led to its rise"
      newsUrl="https://www.google.com"
    >
      <Card.Title {...args}>
        The McRib is back (again): How a McNugget shortage led to its rise
      </Card.Title>
    </Card>
  ),
  args: {
    withLink: false,
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
    <Card className="card-flex" withLink={false}>
      <Card.Title {...args}>
        The McRib is back (again): How a McNugget shortage led to its rise
      </Card.Title>
    </Card>
  ),
  args: {
    withLink: true,
    newsUrl: 'https://www.google.com',
    newsUrlTitle: 'The McRib is back (again): How a McNugget shortage led to its rise',
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/Pxz9nVdP2Im0YRWnDNM3J5/Core-C-%7C-Widgets-Home?node-id=2039%3A624&mode=dev',
      accessToken: 'figd_sHs6Ap894w4C-OAFls7tuq0fMMROyue-8zQJ8hRE',
    },
  },
}
