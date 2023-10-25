import type { Meta, StoryObj } from '@storybook/react'
import { Signature, SignatureProps } from './signature'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<SignatureProps> = {
  title: 'Article/Signature',
  tags: ['autodocs'],
  component: Signature,
}

export default meta
type Story = StoryObj<{ color: string }>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  render: ({ ...args }) => (
    <Signature>
      <Signature.Content>
        <Signature.Info
          author="do R7"
          color={args.color}
          sectionName="Notícias"
          sectionUrl="https://noticias.r7.com/agencia-estado"
        />
        <Signature.Date published="2023-06-29T15:12:23Z" modified="2023-08-28T14:32:13.07Z" />
      </Signature.Content>
    </Signature>
  ),
  args: {
    color: '#556373',
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/cH3xxBj1LEAUud8Cg2cdB5/Specific-C-Article-%7C-Delivery?type=design&node-id=1240-143&mode=dev',
      accessToken: 'figd_sHs6Ap894w4C-OAFls7tuq0fMMROyue-8zQJ8hRE',
    },
  },
}

export const WithAgency: Story = {
  render: ({ ...args }) => (
    <Signature>
      <Signature.Agency
        url="https://agenciaestado.com.br"
        name="Agência Estado"
        imageUrl="https://img.r7.com/images/logo-agencia-estado-09012020093353497?dimensions=50x50"
      ></Signature.Agency>
      <Signature.Content>
        <Signature.Info
          author="Agência Estado"
          color={args.color}
          sectionName="Agência Estado"
          sectionUrl="https://noticias.r7.com/agencia-estado"
        />
        <Signature.Date published="2023-06-29T15:12:23Z" modified="2023-08-28T14:32:13.07Z" />
      </Signature.Content>
    </Signature>
  ),
  args: {
    color: '#556373',
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/cH3xxBj1LEAUud8Cg2cdB5/Specific-C-Article-%7C-Delivery?type=design&node-id=1240-143&mode=dev',
      accessToken: 'figd_sHs6Ap894w4C-OAFls7tuq0fMMROyue-8zQJ8hRE',
    },
  },
}
