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

export const Primary: Story = {
  render: args => <TextOverPhoto {...args} />,
  args: {
    type: 'half',
    renderHat: (
      <Card.HatWrapper>
        <Card.HatTitle color="high">DE A PEQUENA SEREIA A MARIO</Card.HatTitle>
      </Card.HatWrapper>
    ),
    title: 'Saiba quais foram os filmes com as maiores bilheterias em 2023',
    renderImage: (
      <img
        src="https://img.r7.com/images/maiores-bilheterias-de-2023-filmes-cinema-07122023155527132?dimensions=550x320&crop=646x369%2031%200"
        alt="Saiba quais foram os filmes com as maiores bilheterias em 2023"
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

export const Half: Story = {
  ...Primary,
  args: {
    ...Primary.args,
    type: 'half',
  },
}

export const Vertical: Story = {
  ...Primary,
  render: args => (
    <div className="w-full sm:w-[200px]">
      <TextOverPhoto {...args} />
    </div>
  ),
  args: {
    ...Primary.args,
    title: 'fffff',
    type: 'vertical',
  },
}
