import { Meta, StoryObj } from '@storybook/react'
import { Card } from '../'
import { CardHatTitleProps } from './card-hat-title'
import { CardHatImageProps } from './card-hat-image'
import { CardHatWrapperProps } from './card-hat-wrapper'

const meta: Meta<CardHatTitleProps> = {
  title: 'ui-card/Card/Hat',
  component: Card.HatTitle,
  tags: ['autodocs'],
  argTypes: {},
}

export default meta

type HatTitleStory = StoryObj<CardHatTitleProps>
type HatImageStory = StoryObj<CardHatImageProps>
type HatAlertStory = StoryObj<CardHatWrapperProps>

export const WithoutImage: HatTitleStory = {
  render: ({ ...args }) => (
    <Card
      newsTitle="The McRib is back (again): How a McNugget shortage led to its rise"
      newsUrl="https://www.google.com"
    >
      <Card.HatTitle {...args}>News section</Card.HatTitle>
    </Card>
  ),
  args: {
    color: 'low',
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/Pxz9nVdP2Im0YRWnDNM3J5/Core-C-%7C-Widgets-Home?node-id=2039%3A624&mode=dev',
      accessToken: 'figd_sHs6Ap894w4C-OAFls7tuq0fMMROyue-8zQJ8hRE',
    },
  },
}

export const WithImage: HatImageStory = {
  render: ({ ...args }) => (
    <Card
      newsTitle="The McRib is back (again): How a McNugget shortage led to its rise"
      newsUrl="https://www.google.com"
    >
      <Card.HatWrapper>
        <Card.HatImage {...args} />
        <Card.HatTitle>News section</Card.HatTitle>
      </Card.HatWrapper>
    </Card>
  ),
  args: {
    imageSource: 'http://img.r7.com/images/concurso-publico-14032022123440824?dimensions=128x128',
    description: 'Human hand writting in a paper',
  },
  parameters: {
    controls: {
      exclude: 'color',
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/Pxz9nVdP2Im0YRWnDNM3J5/Core-C-%7C-Widgets-Home?node-id=2039%3A624&mode=dev',
      accessToken: 'figd_sHs6Ap894w4C-OAFls7tuq0fMMROyue-8zQJ8hRE',
    },
  },
}

export const BreakingNews: HatAlertStory = {
  render: ({ ...args }) => (
    <Card
      newsTitle="The McRib is back (again): How a McNugget shortage led to its rise"
      newsUrl="https://www.google.com"
    >
      <Card.HatWrapper {...args}>
        <Card.HatTitle color="high-bold">News section</Card.HatTitle>
      </Card.HatWrapper>
    </Card>
  ),
  args: {
    type: 'alert',
  },
  parameters: {
    controls: {
      exclude: 'color',
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/Pxz9nVdP2Im0YRWnDNM3J5/Core-C-%7C-Widgets-Home?node-id=2039%3A624&mode=dev',
      accessToken: 'figd_sHs6Ap894w4C-OAFls7tuq0fMMROyue-8zQJ8hRE',
    },
  },
}
