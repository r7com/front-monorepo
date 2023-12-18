import { Meta, StoryObj } from '@storybook/react'
import { TwoCardsSquarePhoto } from './two-cards-square-photo'

const meta: Meta<typeof TwoCardsSquarePhoto> = {
  title: 'ui-card/TwoCardsSquarePhoto',
  component: TwoCardsSquarePhoto,
  tags: ['autodocs'],
  argTypes: {},
}

export default meta

type Story = StoryObj<typeof TwoCardsSquarePhoto>

export const TwoSquareCards: Story = {
  render: () => (
    <TwoCardsSquarePhoto>
      <TwoCardsSquarePhoto.Item
        hat="digitalização"
        title="FGTS vai começar a ser pago com Pix a partir de 1º de março"
        renderImage={
          <img
            src={
              '//img.r7.com/images/fgts-celular-carteira-digital-10092023170643481?resize=113x113&amp;crop=1054x1054 0 0&amp;dimensions=113x113'
            }
            alt="FGTS vai começar a ser pago com Pix a partir de 1º de março"
            width={113}
            height={113}
          />
        }
      />

      <TwoCardsSquarePhoto.Item
        hat="traição"
        title="'Não posso ver esse cão', diz Luísa Sonza sobre Chico Moedas"
        renderImage={
          <img
            src={
              '//img.r7.com/images/luisa-sonza-chico-moedas-14122023102035926?resize=113x113&amp;crop=379x379 0 0&amp;dimensions=113x113'
            }
            alt="'Não posso ver esse cão', diz Luísa Sonza sobre Chico Moedas"
            width={113}
            height={113}
          />
        }
      />
    </TwoCardsSquarePhoto>
  ),
  args: {},
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/Pxz9nVdP2Im0YRWnDNM3J5/Core-C-%7C-Widgets-Home---VERS%C3%83O-1?node-id=2023%3A840&mode=dev',
      accessToken: 'figd_sHs6Ap894w4C-OAFls7tuq0fMMROyue-8zQJ8hRE',
    },
  },
}
