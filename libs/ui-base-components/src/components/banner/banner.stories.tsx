import type { Meta, StoryObj } from '@storybook/react'
import { Banner } from './'
import { SvgIcon } from '../svg-icon'
import { Button } from '../button'
import { useArgs } from '@storybook/client-api'
import { BannerMock } from './banner-mock'

const meta: Meta<typeof BannerMock> = {
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
      default: 'dark',
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
}

export default meta

type Story = StoryObj<typeof BannerMock>

export const DefaultIcons: Story = {
  render: function Render({ ...args }, { globals }) {
    const [{ isVisible }, updateArgs] = useArgs()
    const handleToggle = (isVisible: boolean) => updateArgs({ isVisible })
    console.log('#', globals)

    return (
      <div className={globals?.backgrounds?.value === '#333' ? 'light' : 'dark'}>
        <Banner.Root isVisible={isVisible} onClose={handleToggle}>
          <Banner.Content>
            <Banner.Icon type={args.iconType} />
            <Banner.Description>{args.description}</Banner.Description>
          </Banner.Content>
        </Banner.Root>
      </div>
    )
  },
  args: {
    iconType: 'informative',
    description:
      'O sistema JARVICS será atualizado durante os dias 03 e 04 de agosto de 2023. Contamos com sua compreensão.',
  },
  parameters: {
    controls: { exclude: ['customIconName', 'imageSourceUrl'] },
  },
}

export const CustomIcon: Story = {
  render: function Render({ ...args }, { globals }) {
    const [{ isVisible }, updateArgs] = useArgs()
    const handleToggle = (isVisible: boolean) => updateArgs({ isVisible })

    return (
      <div className={globals?.backgrounds?.value === '#333' ? 'light' : 'dark'}>
        <Banner.Root isVisible={isVisible} onClose={handleToggle}>
          <Banner.Content>
            <Banner.Icon type="custom">
              <SvgIcon iconName={args.customIconName} />
            </Banner.Icon>

            <Banner.Description>{args.description}</Banner.Description>
          </Banner.Content>
        </Banner.Root>
      </div>
    )
  },
  args: {
    customIconName: 'record',
    description:
      'O sistema JARVICS será atualizado durante os dias 03 e 04 de agosto de 2023. Contamos com sua compreensão.',
  },
  parameters: {
    controls: { exclude: ['iconType'] },
  },
}

export const CustomIconsAction: Story = {
  render: function Render({ ...args }, { globals }) {
    const [{ isVisible }, updateArgs] = useArgs()
    const handleToggle = (isVisible: boolean) => updateArgs({ isVisible })

    return (
      <div className={globals?.backgrounds?.value === '#333' ? 'light' : 'dark'}>
        <Banner.Root isVisible={isVisible}>
          <Banner.Content>
            <Banner.Icon type="custom">
              <SvgIcon iconName={args.customIconName} />
            </Banner.Icon>

            <Banner.Description>{args.description}</Banner.Description>
          </Banner.Content>

          <Banner.Options>
            <Button onClick={() => handleToggle(!isVisible)}>ACEITAR</Button>
          </Banner.Options>
        </Banner.Root>
      </div>
    )
  },
  args: {
    customIconName: 'record',
    description:
      'Este site utiliza cookies e outras tecnologias para melhorar sua experiência. Ao continuar navegando, você aceita as condições de nossa Política de Privacidade',
  },
  parameters: {
    controls: { exclude: ['iconType'] },
  },
}

export const ImageActions: Story = {
  render: function Render({ ...args }, { globals }) {
    const [{ isVisible }, updateArgs] = useArgs()
    const handleToggle = (isVisible: boolean) => updateArgs({ isVisible })

    return (
      <div className={globals?.backgrounds?.value === '#333' ? 'light' : 'dark'}>
        <Banner.Root isVisible={isVisible}>
          <Banner.Content>
            <Banner.Image alt="Default image" sourceUrl={args.imageSourceUrl} />

            <Banner.Description>{args.description}</Banner.Description>
          </Banner.Content>

          <Banner.Options>
            <Button>CADASTRAR</Button>

            <Button color="ghost" onClick={() => handleToggle(!isVisible)}>
              Dispensar
            </Button>
          </Banner.Options>
        </Banner.Root>
      </div>
    )
  },
  args: {
    description: 'Fique por dentro das melhores noticias em primeira mão',
    imageSourceUrl:
      'https://img.r7.com/images/r7-30072019142631584?crop_position=c&dimensions=160x80',
  },
  parameters: {
    controls: { exclude: ['iconType', 'customIconName'] },
  },
}
