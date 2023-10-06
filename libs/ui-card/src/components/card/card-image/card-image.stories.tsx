import { Meta, StoryObj } from '@storybook/react'
import { Card } from '../'
import { CardImageProps } from './card-image'

const meta: Meta<CardImageProps> = {
  title: 'ui-card/Card/Image',
  component: Card.Image,
  tags: ['autodocs'],
  argTypes: {},
}

export default meta

type Story = StoryObj<CardImageProps>

export const WithoutLabel: Story = {
  render: ({ ...args }) => (
    <Card.Root
      newsTitle="The McRib is back (again): How a McNugget shortage led to its rise"
      newsUrl="https://www.google.com"
    >
      <Card.Image {...args}>
        <img
          src="//img.r7.com/images/pantano-australia-rosa-brilhante-04102023182425856?resize=536x326&crop=691x420 80 0&dimensions=536x326"
          alt="Human hand writting in a paper"
          className="w-full object-cover h-full"
        />
      </Card.Image>
    </Card.Root>
  ),
  args: {
    className: 'mb-xxxs',
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
    <Card.Root
      newsTitle="The McRib is back (again): How a McNugget shortage led to its rise"
      newsUrl="https://www.google.com"
    >
      <Card.Image {...args}>
        <img
          src="//img.r7.com/images/pantano-australia-rosa-brilhante-04102023182425856?resize=536x326&crop=691x420 80 0&dimensions=536x326"
          alt="Human hand writting in a paper"
          className="w-full object-cover h-full"
        />
        <Card.Label type="live" />
      </Card.Image>
    </Card.Root>
  ),
  args: {
    className: 'mb-xxxs',
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
