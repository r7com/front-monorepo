import { Meta, StoryObj } from '@storybook/react'
import { MostRead, MostReadProps } from '.'
import { Typography } from '@r7/ui-base-components'
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
        {MOST_READ_DATA.map(({ img, sectionName, description, url }, i) => {
          const order = i + 1
          return (
            <MostRead.Item key={i}>
              <MostRead.Link url={url} title={description}>
                <MostRead.Figure>
                  <img
                    className="mb-xxxs"
                    src={img}
                    loading="lazy"
                    alt={description}
                    height={141}
                    width={141}
                    style={{ width: '141px', height: '141px' }}
                  />
                </MostRead.Figure>
                <MostRead.Order order={order}>
                  <MostRead.Hat>{sectionName}</MostRead.Hat>
                  <MostRead.Title>{description}</MostRead.Title>
                </MostRead.Order>
              </MostRead.Link>
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
