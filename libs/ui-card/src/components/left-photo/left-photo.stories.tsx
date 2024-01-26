import { Meta, StoryObj } from '@storybook/react'
import { LeftPhoto } from './left-photo'
import { Card } from '../card'
import { Bullet } from '@r7/ui-base-components'

const meta: Meta<typeof LeftPhoto> = {
  title: 'ui-card/LeftPhoto',
  component: LeftPhoto,
  tags: ['autodocs'],
  argTypes: {},
}

export default meta

type Story = StoryObj<typeof LeftPhoto>

export const TwoSquare: Story = {
  render: ({ ...args }) => (
    <LeftPhoto {...args}>
      <LeftPhoto.Item>
        <LeftPhoto.Flex>
          <LeftPhoto.Figure format="square">
            <img
              src="//img.r7.com/images/fgts-celular-carteira-digital-10092023170643481?dimensions=113x113"
              alt="FGTS vai começar a ser pago com Pix a partir de 1º de março"
              width={113}
              height={113}
            />
          </LeftPhoto.Figure>

          <LeftPhoto.TextWrapper>
            <Card.HatWrapper>
              <Card.HatTitle>digitalização</Card.HatTitle>
            </Card.HatWrapper>

            <LeftPhoto.Title fontSize="small">
              FGTS vai começar a ser pago com Pix a partir de 1º de março
            </LeftPhoto.Title>
          </LeftPhoto.TextWrapper>
        </LeftPhoto.Flex>
      </LeftPhoto.Item>

      <LeftPhoto.Item>
        <LeftPhoto.Flex>
          <LeftPhoto.Figure format="square">
            <img
              src="//img.r7.com/images/luisa-sonza-chico-moedas-14122023102035926?dimensions=113x113"
              alt="'Não posso ver esse cão', diz Luísa Sonza sobre Chico Moedas"
              width={113}
              height={113}
            />
          </LeftPhoto.Figure>

          <LeftPhoto.TextWrapper>
            <Card.HatWrapper>
              <Card.HatTitle>traição</Card.HatTitle>
            </Card.HatWrapper>

            <LeftPhoto.Title fontSize="small">
              'Não posso ver esse cão', diz Luísa Sonza sobre Chico Moedas
            </LeftPhoto.Title>
          </LeftPhoto.TextWrapper>
        </LeftPhoto.Flex>
      </LeftPhoto.Item>
    </LeftPhoto>
  ),
  args: {
    gapMd: 'xxxs',
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/Pxz9nVdP2Im0YRWnDNM3J5/Core-C-%7C-Widgets-Home---VERS%C3%83O-1?type=design&node-id=2501-2519&mode=dev',
      accessToken: 'figd_sHs6Ap894w4C-OAFls7tuq0fMMROyue-8zQJ8hRE',
    },
  },
}

export const TwoLandscape: Story = {
  render: ({ ...args }) => (
    <LeftPhoto {...args}>
      <LeftPhoto.Item>
        <LeftPhoto.Flex>
          <LeftPhoto.Figure format="landscape">
            <img
              src="https://img.r7.com/images/fgts-celular-carteira-digital-10092023170643481?dimensions=160x90"
              alt="FGTS vai começar a ser pago com Pix a partir de 1º de março"
              width={160}
              height="auto"
            />
          </LeftPhoto.Figure>

          <LeftPhoto.TextWrapper>
            <Card.HatWrapper>
              <Card.HatTitle>digitalização</Card.HatTitle>
            </Card.HatWrapper>

            <LeftPhoto.Title>
              FGTS vai começar a ser pago com Pix a partir de 1º de março
            </LeftPhoto.Title>
          </LeftPhoto.TextWrapper>
        </LeftPhoto.Flex>
      </LeftPhoto.Item>

      <LeftPhoto.Item>
        <LeftPhoto.Flex>
          <LeftPhoto.Figure format="landscape">
            <img
              src="//img.r7.com/images/luisa-sonza-chico-moedas-14122023102035926?dimensions=160x90"
              alt="'Não posso ver esse cão', diz Luísa Sonza sobre Chico Moedas"
              width={160}
              height="auto"
            />
          </LeftPhoto.Figure>

          <LeftPhoto.TextWrapper>
            <Card.HatWrapper>
              <Card.HatTitle>traição</Card.HatTitle>
            </Card.HatWrapper>

            <LeftPhoto.Title>
              'Não posso ver esse cão', diz Luísa Sonza sobre Chico Moedas
            </LeftPhoto.Title>
          </LeftPhoto.TextWrapper>
        </LeftPhoto.Flex>
      </LeftPhoto.Item>
    </LeftPhoto>
  ),
  args: {
    gapMd: 'xxxs',
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/Pxz9nVdP2Im0YRWnDNM3J5/Core-C-%7C-Widgets-Home---VERS%C3%83O-1?type=design&node-id=2501-2519&mode=dev',
      accessToken: 'figd_sHs6Ap894w4C-OAFls7tuq0fMMROyue-8zQJ8hRE',
    },
  },
}

export const TwoLandscapeWithBullet: Story = {
  render: ({ ...args }) => (
    <LeftPhoto {...args}>
      <LeftPhoto.Item>
        <LeftPhoto.Flex>
          <LeftPhoto.Figure format="landscape">
            <img
              src="https://img.r7.com/images/fgts-celular-carteira-digital-10092023170643481?dimensions=160x90"
              alt="FGTS vai começar a ser pago com Pix a partir de 1º de março"
              width={160}
              height="auto"
            />
          </LeftPhoto.Figure>

          <LeftPhoto.TextWrapper>
            <Card.HatWrapper>
              <Card.HatTitle>digitalização</Card.HatTitle>
            </Card.HatWrapper>

            <LeftPhoto.Title>
              FGTS vai começar a ser pago com Pix a partir de 1º de março
            </LeftPhoto.Title>
          </LeftPhoto.TextWrapper>
        </LeftPhoto.Flex>
      </LeftPhoto.Item>

      <LeftPhoto.Item>
        <LeftPhoto.Flex>
          <LeftPhoto.Figure format="landscape">
            <img
              src="//img.r7.com/images/luisa-sonza-chico-moedas-14122023102035926?dimensions=160x90"
              alt="'Não posso ver esse cão', diz Luísa Sonza sobre Chico Moedas"
              width={160}
              height="auto"
            />
          </LeftPhoto.Figure>

          <LeftPhoto.TextWrapper>
            <Card.HatWrapper>
              <Card.HatTitle>traição</Card.HatTitle>
            </Card.HatWrapper>

            <LeftPhoto.Title>
              'Não posso ver esse cão', diz Luísa Sonza sobre Chico Moedas
            </LeftPhoto.Title>
          </LeftPhoto.TextWrapper>
        </LeftPhoto.Flex>
      </LeftPhoto.Item>

      <Bullet url="#">Bullet aqui</Bullet>
    </LeftPhoto>
  ),
  args: {
    gapMd: 'xxxs',
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/Pxz9nVdP2Im0YRWnDNM3J5/Core-C-%7C-Widgets-Home---VERS%C3%83O-1?type=design&node-id=2501-2519&mode=dev',
      accessToken: 'figd_sHs6Ap894w4C-OAFls7tuq0fMMROyue-8zQJ8hRE',
    },
  },
}

export const TwoLandscapeLarge: Story = {
  render: ({ ...args }) => (
    <LeftPhoto {...args}>
      <LeftPhoto.Item>
        <LeftPhoto.Flex>
          <LeftPhoto.Figure imgSize="large" format="landscape">
            <img
              src="https://img.r7.com/images/humorista-juca-chaves-exclui-as-filhas-de-testamento-22012024182412502?dimensions=254x145"
              alt="FGTS vai começar a ser pago com Pix a partir de 1º de março"
            />
          </LeftPhoto.Figure>

          <LeftPhoto.TextWrapper>
            <Card.HatWrapper>
              <Card.HatTitle>FABÍOLA REIPERT</Card.HatTitle>
            </Card.HatWrapper>

            <LeftPhoto.Title fontSize="large">
              Humorista Juca Chaves exclui as filhas de testamento
            </LeftPhoto.Title>
          </LeftPhoto.TextWrapper>
        </LeftPhoto.Flex>
      </LeftPhoto.Item>

      <LeftPhoto.Item>
        <LeftPhoto.Flex>
          <LeftPhoto.Figure imgSize="large" format="landscape">
            <img
              src="//img.r7.com/images/jojo-todynho-26122023134329195?resize=254x145"
              alt="'Não posso ver esse cão', diz Luísa Sonza sobre Chico Moedas"
            />
          </LeftPhoto.Figure>

          <LeftPhoto.TextWrapper>
            <Card.HatWrapper>
              <Card.HatTitle>comentários maldosos</Card.HatTitle>
            </Card.HatWrapper>

            <LeftPhoto.Title fontSize="large">
              Jojo dispara contra críticas: 'Bonita é minha conta bancária'
            </LeftPhoto.Title>
          </LeftPhoto.TextWrapper>
        </LeftPhoto.Flex>
      </LeftPhoto.Item>
    </LeftPhoto>
  ),
  args: {
    gapMd: 'xxxs',
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/Pxz9nVdP2Im0YRWnDNM3J5/Core-C-%7C-Widgets-Home---VERS%C3%83O-1?type=design&node-id=2501-2519&mode=dev',
      accessToken: 'figd_sHs6Ap894w4C-OAFls7tuq0fMMROyue-8zQJ8hRE',
    },
  },
}

export const ThreeLandscapeSmall: Story = {
  render: ({ ...args }) => (
    <LeftPhoto {...args}>
      <LeftPhoto.Item>
        <LeftPhoto.Flex>
          <LeftPhoto.Figure format="landscape">
            <img
              src="https://img.r7.com/images/fgts-celular-carteira-digital-10092023170643481?dimensions=113x65"
              alt="FGTS vai começar a ser pago com Pix a partir de 1º de março"
              width={113}
              height="auto"
            />
          </LeftPhoto.Figure>

          <LeftPhoto.TextWrapper>
            <Card.HatWrapper>
              <Card.HatTitle>digitalização</Card.HatTitle>
            </Card.HatWrapper>

            <LeftPhoto.Title fontSize="small">
              FGTS vai começar a ser pago com Pix a partir de 1º de março
            </LeftPhoto.Title>
          </LeftPhoto.TextWrapper>
        </LeftPhoto.Flex>
      </LeftPhoto.Item>

      <LeftPhoto.Item>
        <LeftPhoto.Flex>
          <LeftPhoto.Figure format="landscape">
            <img
              src="//img.r7.com/images/2016/08/31/3z687f953i_4s71ildhlc_file.jpg?resize=113x65&crop=749x431 0 259&dimensions=113x65"
              alt="Dilma e PT são condenados a devolver R$ 75,5 mil à Justiça (Roberto Stuckert Filho/PR - 29.08.2016)"
              width={113}
              height="auto"
            />
          </LeftPhoto.Figure>

          <LeftPhoto.TextWrapper>
            <Card.HatWrapper>
              <Card.HatTitle>brasil</Card.HatTitle>
            </Card.HatWrapper>

            <LeftPhoto.Title fontSize="small">
              Dilma e PT são condenados a devolver R$ 75,5 mil à Justiça
            </LeftPhoto.Title>
          </LeftPhoto.TextWrapper>
        </LeftPhoto.Flex>
      </LeftPhoto.Item>

      <LeftPhoto.Item>
        <LeftPhoto.Flex>
          <LeftPhoto.Figure format="landscape">
            <img
              src="//img.r7.com/images/luisa-sonza-chico-moedas-14122023102035926?dimensions=113x65"
              alt="'Não posso ver esse cão', diz Luísa Sonza sobre Chico Moedas"
              width={113}
              height="auto"
            />
          </LeftPhoto.Figure>

          <LeftPhoto.TextWrapper>
            <Card.HatWrapper>
              <Card.HatTitle>traição</Card.HatTitle>
            </Card.HatWrapper>

            <LeftPhoto.Title fontSize="small">
              'Não posso ver esse cão', diz Luísa Sonza sobre Chico Moedas
            </LeftPhoto.Title>
          </LeftPhoto.TextWrapper>
        </LeftPhoto.Flex>
      </LeftPhoto.Item>
    </LeftPhoto>
  ),
  args: {
    gapMd: 'xxxs',
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/Pxz9nVdP2Im0YRWnDNM3J5/Core-C-%7C-Widgets-Home---VERS%C3%83O-1?type=design&node-id=2501-2519&mode=dev',
      accessToken: 'figd_sHs6Ap894w4C-OAFls7tuq0fMMROyue-8zQJ8hRE',
    },
  },
}
