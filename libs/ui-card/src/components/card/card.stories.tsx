import { Meta, StoryObj } from '@storybook/react'
import { Card } from './'
import { CardRootProps } from './card-root/card-root'

const meta: Meta<CardRootProps> = {
  title: 'ui-card/Card',
  component: Card.Root,
  tags: ['autodocs'],
  argTypes: {},
}

export default meta

type Story = StoryObj<CardRootProps>

export const Primary: Story = {
  render: ({ ...args }) => (
    <Card.Root {...args}>
      <Card.HatWrapper>
        <Card.HatImage
          imageSource="//img.r7.com/images/concurso-publico-14032022123440824?dimensions=128x128"
          description="Human hand writting in a paper"
        />
        <Card.HatTitle>News section</Card.HatTitle>
      </Card.HatWrapper>
      <Card.Title as="h2" fontStyle="heading-level-1">
        The McRib is back (again): How a McNugget shortage led to its rise
      </Card.Title>
    </Card.Root>
  ),
  args: {
    newsTitle: 'The McRib is back (again): How a McNugget shortage led to its rise',
    newsUrl: 'https://www.google.com',
    openInBlank: true,
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/Pxz9nVdP2Im0YRWnDNM3J5/Core-C-%7C-Widgets-Home?node-id=2039%3A624&mode=dev',
      accessToken: 'figd_sHs6Ap894w4C-OAFls7tuq0fMMROyue-8zQJ8hRE',
    },
  },
}

export const ImageToTheSides: Story = {
  render: ({ ...args }) => (
    <Card.Root {...args}>
      <Card.Image className="mr-xxxs">
        <img
          src="//img.r7.com/images/concurso-publico-14032022123440824?dimensions=128x128"
          alt="Human hand writting in a paper"
        />
        <Card.Label type="live" />
      </Card.Image>
      <div>
        <Card.HatWrapper>
          <Card.HatImage
            imageSource="//img.r7.com/images/concurso-publico-14032022123440824?dimensions=128x128"
            description="Human hand writting in a paper"
          />
          <Card.HatTitle>News section</Card.HatTitle>
        </Card.HatWrapper>
        <Card.Title>The McRib is back (again): How a McNugget shortage led to its rise</Card.Title>
      </div>
    </Card.Root>
  ),
  args: {
    className: 'flex',
    newsTitle: 'The McRib is back (again): How a McNugget shortage led to its rise',
    newsUrl: 'https://www.google.com',
    openInBlank: true,
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/Pxz9nVdP2Im0YRWnDNM3J5/Core-C-%7C-Widgets-Home?node-id=2074%3A202&mode=dev',
      accessToken: 'figd_sHs6Ap894w4C-OAFls7tuq0fMMROyue-8zQJ8hRE',
    },
  },
}

export const ImageAbove: Story = {
  render: ({ ...args }) => (
    <Card.Root {...args}>
      <Card.Image className="mb-xxxs" format="landscape">
        <img
          src="//img.r7.com/images/pantano-australia-rosa-brilhante-04102023182425856?resize=536x326&crop=691x420 80 0&dimensions=536x326"
          alt="Human hand writting in a paper"
          className="w-full"
        />
        <Card.Label type="live" />
      </Card.Image>
      <div>
        <Card.HatWrapper>
          <Card.HatImage
            imageSource="//img.r7.com/images/concurso-publico-14032022123440824?dimensions=128x128"
            description="Human hand writting in a paper"
          />
          <Card.HatTitle>News section</Card.HatTitle>
        </Card.HatWrapper>
        <Card.Title>The McRib is back (again): How a McNugget shortage led to its rise</Card.Title>
      </div>
    </Card.Root>
  ),
  args: {
    newsTitle: 'The McRib is back (again): How a McNugget shortage led to its rise',
    newsUrl: 'https://www.google.com',
    openInBlank: true,
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/Pxz9nVdP2Im0YRWnDNM3J5/Core-C-%7C-Widgets-Home?node-id=2074%3A202&mode=dev',
      accessToken: 'figd_sHs6Ap894w4C-OAFls7tuq0fMMROyue-8zQJ8hRE',
    },
  },
}

export const TitleOverImage: Story = {
  render: ({ ...args }) => (
    <Card.Root {...args}>
      <Card.Image format="landscape" shadow>
        <img
          src="//img.r7.com/images/pantano-australia-rosa-brilhante-04102023182425856?resize=536x326&crop=691x420 80 0&dimensions=536x326"
          alt="cat"
          className="w-full"
        />
        <Card.Label type="live" />
      </Card.Image>
      <div className="absolute bottom-0 p-xxxs">
        <Card.HatWrapper>
          <Card.HatImage
            imageSource="//img.r7.com/images/concurso-publico-14032022123440824?dimensions=128x128"
            description="Human hand writting in a paper"
          />
          <Card.HatTitle color="high">News section</Card.HatTitle>
        </Card.HatWrapper>
        <Card.Title color="high">
          The McRib is back (again): How a McNugget shortage led to its rise
        </Card.Title>
      </div>
    </Card.Root>
  ),
  args: {
    className: 'relative',
    newsTitle: 'The McRib is back (again): How a McNugget shortage led to its rise',
    newsUrl: 'https://www.google.com',
    openInBlank: true,
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/Pxz9nVdP2Im0YRWnDNM3J5/Core-C-%7C-Widgets-Home?node-id=2027%3A1605&mode=dev',
      accessToken: 'figd_sHs6Ap894w4C-OAFls7tuq0fMMROyue-8zQJ8hRE',
    },
  },
}
