import type { Meta, StoryObj } from '@storybook/react'
import { Institutional } from './index'
import { data } from '../../mocks/institutional'
import { useId } from 'react'

type RootDesktopProps = {
  editorialName: string
}

const currentYear = new Date().getFullYear()

const RootDesktop = ({ editorialName }: RootDesktopProps) => {
  const id = useId()
  return (
    <Institutional.Root>
      <Institutional.Content>
        <Institutional.Wrapper>
          <Institutional.Logo />
          <Institutional.Editorial editorialName={editorialName} />
        </Institutional.Wrapper>
        <Institutional.Copyright>
          Todos os direitos reservados - 2009-{currentYear} - Rádio e Televisão Record S.A
        </Institutional.Copyright>
      </Institutional.Content>
      <Institutional.List>
        {data.map(({ url, name }, i) => (
          <Institutional.Item key={`${id}${i}`}>
            <Institutional.Link url={url} title={name}>
              {name}
            </Institutional.Link>
          </Institutional.Item>
        ))}
      </Institutional.List>
    </Institutional.Root>
  )
}

const RootMobile = ({ editorialName }: RootDesktopProps) => {
  return (
    <Institutional.Root>
      <Institutional.Content>
        <Institutional.Wrapper>
          <Institutional.Logo />
          <Institutional.Editorial editorialName={editorialName} />
        </Institutional.Wrapper>
        <Institutional.Copyright>
          Todos os direitos reservados - 2009-{currentYear} - Rádio e Televisão Record S.A
        </Institutional.Copyright>
      </Institutional.Content>
      <Institutional.List>
        <Institutional.Item>
          <Institutional.Link
            url={'https://www.r7.com/termos-e-condicoes'}
            title={'Termos e Condições de Uso'}
          >
            Termos e Condições de Uso
          </Institutional.Link>
        </Institutional.Item>
      </Institutional.List>
    </Institutional.Root>
  )
}

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof RootDesktop> = {
  title: 'Footer/Institutional',
  component: RootDesktop,
  tags: ['autodocs'],
  argTypes: {},
}

export default meta
type Story = StoryObj<typeof RootDesktop>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Desktop: Story = {
  render: args => <RootDesktop {...args} />,
  args: {
    editorialName: 'r7',
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/OBWV1tXbl1eXmdxzgEmcs3/Core-C-%7C-Delivery?node-id=1970%3A2582&mode=dev',
      accessToken: 'figd_sHs6Ap894w4C-OAFls7tuq0fMMROyue-8zQJ8hRE',
    },
  },
}

export const Mobile: Story = {
  render: args => <RootMobile {...args} />,
  args: {
    editorialName: 'entretenimento',
  },
  parameters: {
    viewport: {
      defaultViewport: 'ipad',
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/OBWV1tXbl1eXmdxzgEmcs3/Core-C-%7C-Delivery?node-id=2046%3A7444&mode=dev',
      accessToken: 'figd_sHs6Ap894w4C-OAFls7tuq0fMMROyue-8zQJ8hRE',
    },
  },
}
