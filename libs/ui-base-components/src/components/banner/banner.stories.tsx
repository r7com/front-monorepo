import type { Meta, StoryObj } from '@storybook/react'
import { Banner } from './'
import { SvgIcon } from '../svg-icon'
import { Button } from '../button'
import { useArgs } from '@storybook/client-api'
import { BannerMock } from './banner-mock'

type BannerPropsAndCustomArgs = React.ComponentProps<typeof BannerMock> & {
  handleToggle: (isVisible: boolean) => void
  teste?: 'a' | 'b'
}

const meta: Meta<BannerPropsAndCustomArgs> = {
  title: 'Example/Banner',
  component: BannerMock,
  tags: ['autodocs'],
  /** Default em todos os stories */
  args: {
    isVisible: true,
  },
  /** Switch dark mode provisório */
  parameters: {
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'dark',
          /** Tema Dark precisa ter o fundo claro, porque os componentes são escuros */
          value: '#FFF',
        },
        {
          /** Tema Light precisa ter o fundo escuro, porque os componentes são claros */
          name: 'light',
          value: '#333',
        },
      ],
    },
  },
  decorators: [
    (Story, context) => {
      const [{ isVisible }, updateArgs] = useArgs()
      const handleToggle = (isVisible: boolean) => updateArgs({ isVisible })
      const isDark = context.globals.backgrounds?.value === '#FFF'

      return (
        <div style={{ margin: '1em' }} className={isDark ? 'dark' : ''}>
          <Story args={{ ...context.args, isVisible, handleToggle }} />
        </div>
      )
    },
  ],
}

export default meta

type Story = StoryObj<typeof meta>

export const DefaultIcons: Story = {
  render: args => {
    return (
      <Banner.Root isVisible={args.isVisible}>
        <Banner.Content>
          <Banner.Icon type={args.iconType}>
            <SvgIcon iconName={args.iconName} />
          </Banner.Icon>
          <Banner.Description>{args.description}</Banner.Description>
        </Banner.Content>
      </Banner.Root>
    )
  },
  args: {
    teste: 'a',
    iconType: 'informative',
    iconName: 'bell',
    description:
      'O sistema JARVICS será atualizado durante os dias 03 e 04 de agosto de 2023. Contamos com sua compreensão.',
  },
  parameters: {
    controls: { exclude: ['imageSourceUrl'] },
  },
}

export const CustomIcon: Story = {
  render: args => {
    return (
      <Banner.Root isVisible={args.isVisible} onClose={args.handleToggle}>
        <Banner.Content>
          <Banner.Icon type={args.iconType}>
            <SvgIcon iconName={args.iconName} />
          </Banner.Icon>

          <Banner.Description>{args.description}</Banner.Description>
        </Banner.Content>
      </Banner.Root>
    )
  },
  args: {
    iconType: 'custom',
    iconName: 'record',
    description:
      'O sistema JARVICS será atualizado durante os dias 03 e 04 de agosto de 2023. Contamos com sua compreensão.',
  },
  parameters: {
    controls: { exclude: ['imageSourceUrl'] },
  },
}

export const CustomIconsAction: Story = {
  render: args => {
    return (
      <Banner.Root isVisible={args.isVisible}>
        <Banner.Content>
          <Banner.Icon type={args.iconType}>
            <SvgIcon iconName={args.iconName} />
          </Banner.Icon>

          <Banner.Description>{args.description}</Banner.Description>
        </Banner.Content>

        <Banner.Options>
          <Button onClick={() => args.handleToggle(!args.isVisible)}>ACEITAR</Button>
        </Banner.Options>
      </Banner.Root>
    )
  },
  args: {
    iconType: 'custom',
    iconName: 'record',
    description:
      'Este site utiliza cookies e outras tecnologias para melhorar sua experiência. Ao continuar navegando, você aceita as condições de nossa Política de Privacidade',
  },
}

export const ImageActions: Story = {
  render: args => {
    return (
      <Banner.Root isVisible={args.isVisible}>
        <Banner.Content>
          <Banner.Image alt="Default image" sourceUrl={args.imageSourceUrl} />

          <Banner.Description>{args.description}</Banner.Description>
        </Banner.Content>

        <Banner.Options>
          <Button>CADASTRAR</Button>

          <Button color="ghost" onClick={() => args.handleToggle(!args.isVisible)}>
            Dispensar
          </Button>
        </Banner.Options>
      </Banner.Root>
    )
  },
  args: {
    imageSourceUrl:
      'https://img.r7.com/images/r7-30072019142631584?crop_position=c&dimensions=225x70',
    description: 'Fique por dentro das melhores noticias em primeira mão',
  },
  parameters: {
    controls: { exclude: ['iconType', 'iconName'] },
  },
}
