import { Meta, StoryObj } from '@storybook/react'
import { MostRead, MostReadProps } from '.'
import { ConditionalLink, Typography } from '@r7/ui-base-components'
import { MOST_READ_DATA } from './mock/MOST_READ_DATA'

const meta: Meta<MostReadProps> = {
  title: 'ui-card/MostRead',
  component: MostRead,
  tags: ['autodocs'],
  argTypes: {},
}

export default meta

type Story = StoryObj<MostReadProps>

const MostReadBlock = () => {
  return (
    <MostRead>
      <Typography primaryTitle as="header">
        Mais Lidas
      </Typography>
      <MostRead.List>
        {MOST_READ_DATA.map(({ img, sectioName, description, url }, i) => {
          const order = i + 1
          return (
            <MostRead.Item key={i}>
              <ConditionalLink href={url} title={description}>
                <MostRead.Figure>
                  <MostRead.Image img={img} description={description} />
                  <MostRead.Order order={order}>
                    <MostRead.Title>{sectioName}</MostRead.Title>
                    <MostRead.Description>{description}</MostRead.Description>
                  </MostRead.Order>
                </MostRead.Figure>
              </ConditionalLink>
            </MostRead.Item>
          )
        })}
      </MostRead.List>
    </MostRead>
  )
}

export const Desktop: Story = {
  render: () => <MostReadBlock />,
}

export const Mobile: Story = {
  render: () => <MostReadBlock />,
  parameters: {
    viewport: {
      defaultViewport: 'iphonexr',
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/Pxz9nVdP2Im0YRWnDNM3J5/Core-C-%7C-Widgets-Home---VERS%C3%83O-1?type=design&node-id=2493-2863&mode=design&t=94bA9qjxHPbWH57k-0',
      accessToken: 'figd_sHs6Ap894w4C-OAFls7tuq0fMMROyue-8zQJ8hRE',
    },
  },
}
