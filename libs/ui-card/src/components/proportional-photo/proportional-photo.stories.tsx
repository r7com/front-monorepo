import { Meta, StoryObj } from '@storybook/react'
import { ProportionalPhoto } from './proportional-photo'
import { Card } from '../card'
import { Bullet } from '@r7/ui-base-components'

const meta: Meta<typeof ProportionalPhoto> = {
  title: 'ui-card/ProportionalPhoto',
  component: ProportionalPhoto,
  tags: ['autodocs'],
  argTypes: {},
}

export default meta

type Story = StoryObj<typeof ProportionalPhoto>
type StoryText = StoryObj<typeof ProportionalPhoto>
type StoryBullet = StoryObj<typeof ProportionalPhoto>

export const Responsive: Story = {
  render: () => (
    <ProportionalPhoto>
      <ProportionalPhoto.Figure>
        <img
          src="//img.r7.com/images/apagao-sao-paulo-1123-19122023115816951?resize=348x199&amp;crop=1170x669 0 32&amp;dimensions=328x184"
          alt="Ministério da Justiça abre processo contra Enel por apagões"
          width="100%"
          height="auto"
        />
      </ProportionalPhoto.Figure>

      <ProportionalPhoto.TextWrapper>
        <Card.HatWrapper>
          <Card.HatTitle>são paulo e rio de janeiro</Card.HatTitle>
        </Card.HatWrapper>

        <ProportionalPhoto.Title fontSize="default">
          Ministério da Justiça abre processo contra Enel por apagões
        </ProportionalPhoto.Title>
      </ProportionalPhoto.TextWrapper>
    </ProportionalPhoto>
  ),
  args: {},
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/Pxz9nVdP2Im0YRWnDNM3J5/Core-C-%7C-Widgets-Home---VERS%C3%83O-1?type=design&node-id=2504-3593&mode=dev',
      accessToken: 'figd_sHs6Ap894w4C-OAFls7tuq0fMMROyue-8zQJ8hRE',
    },
  },
}

const ProportionalText: StoryText = {
  render: () => (
    <ProportionalPhoto>
      <ProportionalPhoto.Figure>
        <img
          src="//img.r7.com/images/apagao-sao-paulo-1123-19122023115816951?resize=348x199&amp;crop=1170x669 0 32&amp;dimensions=328x184"
          alt="Ministério da Justiça abre processo contra Enel por apagões"
          width="100%"
          height="auto"
        />
      </ProportionalPhoto.Figure>

      <ProportionalPhoto.TextWrapper marginBottom="doubleCall">
        <Card.HatWrapper>
          <Card.HatTitle>são paulo e rio de janeiro</Card.HatTitle>
        </Card.HatWrapper>

        <ProportionalPhoto.Title fontSize="doubleCall">
          Ministério da Justiça abre processo contra Enel por apagões
        </ProportionalPhoto.Title>
      </ProportionalPhoto.TextWrapper>

      <ProportionalPhoto.TextWrapper>
        <Card.HatWrapper>
          <Card.HatTitle>são paulo e rio de janeiro</Card.HatTitle>
        </Card.HatWrapper>

        <ProportionalPhoto.Title fontSize="doubleCall">
          Ministério da Justiça abre processo contra Enel por apagões
        </ProportionalPhoto.Title>
      </ProportionalPhoto.TextWrapper>
    </ProportionalPhoto>
  ),
  args: {},
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/Pxz9nVdP2Im0YRWnDNM3J5/Core-C-%7C-Widgets-Home---VERS%C3%83O-1?type=design&node-id=2504-3593&mode=dev',
      accessToken: 'figd_sHs6Ap894w4C-OAFls7tuq0fMMROyue-8zQJ8hRE',
    },
  },
}

const ProportionalBullet: StoryBullet = {
  render: () => (
    <ProportionalPhoto>
      <ProportionalPhoto.Figure>
        <img
          src="//img.r7.com/images/apagao-sao-paulo-1123-19122023115816951?resize=348x199&amp;crop=1170x669 0 32&amp;dimensions=328x184"
          alt="Ministério da Justiça abre processo contra Enel por apagões"
          width="100%"
          height="auto"
        />
      </ProportionalPhoto.Figure>

      <ProportionalPhoto.TextWrapper marginBottom="doubleCall">
        <Card.HatWrapper>
          <Card.HatTitle>são paulo e rio de janeiro</Card.HatTitle>
        </Card.HatWrapper>

        <ProportionalPhoto.Title fontSize="doubleCall">
          Ministério da Justiça abre processo contra Enel por apagões
        </ProportionalPhoto.Title>
      </ProportionalPhoto.TextWrapper>

      <ProportionalPhoto.TextWrapper>
        <ProportionalPhoto.Title>
          <Bullet url="#">Câmara aprova MP que adia Lei de Dados para 31 de dezembro</Bullet>
        </ProportionalPhoto.Title>
      </ProportionalPhoto.TextWrapper>
    </ProportionalPhoto>
  ),
  args: {},
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/Pxz9nVdP2Im0YRWnDNM3J5/Core-C-%7C-Widgets-Home---VERS%C3%83O-1?type=design&node-id=2504-3593&mode=dev',
      accessToken: 'figd_sHs6Ap894w4C-OAFls7tuq0fMMROyue-8zQJ8hRE',
    },
  },
}

export const Big: Story = {
  ...Responsive,
  decorators: [
    Story => (
      <div className="card-w-full card-max-w-[350px]">
        <Story />
      </div>
    ),
  ],
}

export const BigText: StoryText = {
  ...ProportionalText,
  decorators: [
    StoryText => (
      <div className="card-w-full card-max-w-[350px]">
        <StoryText />
      </div>
    ),
  ],
}

export const BigBullet: StoryBullet = {
  ...ProportionalBullet,
  decorators: [
    StoryBullet => (
      <div className="card-w-full card-max-w-[350px]">
        <StoryBullet />
      </div>
    ),
  ],
}

export const Medium: Story = {
  ...Responsive,
  decorators: [
    Story => (
      <div className="card-w-full card-max-w-[255px]">
        <Story />
      </div>
    ),
  ],
}

export const MediumText: StoryText = {
  ...ProportionalText,
  decorators: [
    StoryText => (
      <div className="card-w-full card-max-w-[255px]">
        <StoryText />
      </div>
    ),
  ],
}

export const MediumBullet: StoryBullet = {
  ...ProportionalBullet,
  decorators: [
    StoryBullet => (
      <div className="card-w-full card-max-w-[255px]">
        <StoryBullet />
      </div>
    ),
  ],
}

export const Small: Story = {
  ...Responsive,
  decorators: [
    Story => (
      <div className="card-w-full card-max-w-[207px]">
        <Story />
      </div>
    ),
  ],
}

export const SmallText: StoryText = {
  ...ProportionalText,
  decorators: [
    StoryText => (
      <div className="card-w-full card-max-w-[207px]">
        <StoryText />
      </div>
    ),
  ],
}

export const SmallBullet: StoryBullet = {
  ...ProportionalBullet,
  decorators: [
    StoryBullet => (
      <div className="card-w-full card-max-w-[207px]">
        <StoryBullet />
      </div>
    ),
  ],
}
