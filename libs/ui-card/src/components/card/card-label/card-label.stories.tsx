import { Meta, StoryObj } from '@storybook/react'
import { Card } from '../'
import { CardLabelProps } from './card-label'

const meta: Meta<CardLabelProps> = {
  title: 'ui-card/Card/Label',
  component: Card.Label,
  tags: ['autodocs'],
  argTypes: {},
}

export default meta

type Story = StoryObj<CardLabelProps>

export const Primary: Story = {
  render: ({ ...args }) => (
    <Card.Root
      className="flex"
      newsTitle="The McRib is back (again): How a McNugget shortage led to its rise"
      newsUrl="https://www.google.com"
    >
      <Card.Image className="mr-xxxs">
        <img
          src="http://img.r7.com/images/concurso-publico-14032022123440824?dimensions=128x128"
          alt="Human hand writting in a paper"
        />
        <Card.Label {...args} />
      </Card.Image>
    </Card.Root>
  ),
  args: {
    sponsoredByImage:
      'http://img.r7.com/images/concurso-publico-14032022123440824?dimensions=128x128',
    sponsoredByImageDesc: 'Human hand writting in a paper',
    sponsoredByTitle: 'Sponsored by',
    sponsoredByUrl: 'http://www.google.com',
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/Pxz9nVdP2Im0YRWnDNM3J5/Core-C-%7C-Widgets-Home?node-id=2039%3A624&mode=dev',
      accessToken: 'figd_sHs6Ap894w4C-OAFls7tuq0fMMROyue-8zQJ8hRE',
    },
  },
}
