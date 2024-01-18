import { Meta, StoryObj } from '@storybook/react'
import { Bullet } from '@r7/ui-base-components'
import { TitleWithBullets } from './title-with-bullets'

const meta: Meta<typeof TitleWithBullets> = {
  title: 'ui-card/TitleWithBullets',
  component: TitleWithBullets,
  tags: ['autodocs'],
  argTypes: {},
}

export default meta

type Story = StoryObj<typeof TitleWithBullets>

export const Primary: Story = {
  render: args => (
    <TitleWithBullets hat={args.hat} title={args.title} renderBullets={args.renderBullets} />
  ),
  args: {
    hat: 'Economia',
    title: 'Esperamos ter novo valor do auxílio emergencial até sexta, diz Bolsonaro ',
    renderBullets: (
      <>
        <Bullet url="#">Câmara aprova MP que adia Lei de Dados para 31 de dezembro</Bullet>
        <Bullet url="#">Casa Verde e Amarela terá financiamento com juros de 4,25%</Bullet>
        <Bullet url="#">Senado aprova, em segundo turno, PEC de renovação do Fundeb</Bullet>
        <Bullet url="#">
          Guedes defende fim de deduções do IR para Renda Brasil chegar a R$ 300
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
