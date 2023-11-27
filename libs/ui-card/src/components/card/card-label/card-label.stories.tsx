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
    <Card className="card-flex">
      <Card.Image className="card-mr-xxxs" format="landscape">
        <img
          src="http://img.r7.com/images/concurso-publico-14032022123440824?dimensions=300x200"
          alt="Human hand writting in a paper"
        />
        <Card.Label {...args} />
      </Card.Image>
    </Card>
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
      url: 'https://www.figma.com/file/OBWV1tXbl1eXmdxzgEmcs3/Core-C-%7C-Delivery?node-id=1970%3A2484&mode=dev',
      accessToken: 'figd_sHs6Ap894w4C-OAFls7tuq0fMMROyue-8zQJ8hRE',
    },
  },
}
