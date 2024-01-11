import { Meta, StoryObj } from '@storybook/react'
import { Bullet } from '@r7/ui-base-components'
import { Guerra } from './guerra'

const meta: Meta<typeof Guerra> = {
  title: 'ui-card/Guerra',
  component: Guerra,
  tags: ['autodocs'],
  argTypes: {},
}

export default meta

type Story = StoryObj<typeof Guerra>

export const Primary: Story = {
  render: args => (
    <Guerra
      renderImage={args.renderImage}
      hat={args.hat}
      title={args.title}
      renderBullets={args.renderBullets}
    />
  ),
  args: {
    hat: 'Economia',
    title: 'Esperamos ter novo valor do auxílio emergencial até sexta, diz Bolsonaro ',
    renderImage: (
      <img
        src="//img.r7.com/images/pr-jair-bolsonaro-declaracao-a-imprensa-1500-13082020105425814?resize=1100x628&crop=1101x628 123 47&dimensions=1100x628"
        alt="Esperamos ter novo valor do auxílio emergencial até sexta, diz Bolsonaro  ( Carolina Antunes/PR - 12.08.2020)"
        style={{ width: '100%' }}
      />
    ),
    renderBullets: (
      <>
        <Bullet url="#" color="neutralHigh">
          Câmara aprova MP que adia Lei de Dados para 31 de dezembro
        </Bullet>
        <Bullet url="#" color="neutralHigh">
          Casa Verde e Amarela terá financiamento com juros de 4,25%
        </Bullet>
        <Bullet url="#" color="neutralHigh">
          Senado aprova, em segundo turno, PEC de renovação do Fundeb
        </Bullet>
        <Bullet url="#" color="neutralHigh">
          Guedes defende fim de deduções do IR para Renda Brasil chegar a R$ 300
        </Bullet>
        <Bullet url="#" color="neutralHigh">
          Retomada de alto-forno da Usiminas terá presença de Bolsonaro e Zema
        </Bullet>
        <Bullet url="#" color="neutralHigh">
          Senado aprova em primeiro turno PEC que renova o Fundeb
        </Bullet>
        <Bullet url="#" color="neutralHigh">
          5 pontos para o Brasil decolar de vez na economia
        </Bullet>
        <Bullet url="#" color="neutralHigh">
          Queda no PIB e aprovação a Bolsonaro são destaques nesta sexta (14)
        </Bullet>
      </>
    ),
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/Pxz9nVdP2Im0YRWnDNM3J5/Core-C-%7C-Widgets-Home---VERS%C3%83O-1?type=design&node-id=2493-2863&mode=dev',
      accessToken: 'figd_sHs6Ap894w4C-OAFls7tuq0fMMROyue-8zQJ8hRE',
    },
  },
}
