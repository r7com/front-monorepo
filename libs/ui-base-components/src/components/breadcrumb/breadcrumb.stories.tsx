import type { Meta, StoryObj } from '@storybook/react'
import { Breadcrumb } from './breadcrumb'
import { ConditionalLink } from '../conditional-link'
import { MENU_DATA } from './mocks/MENU_DATA'

const meta: Meta<typeof Breadcrumb> = {
  title: 'Base/Breadcrumb',
  component: Breadcrumb,
  tags: ['autodocs'],
  argTypes: {},
}

export default meta
type Story = StoryObj<typeof Breadcrumb>

const BreadcrumbDemo = () => (
  <Breadcrumb>
    <Breadcrumb.List>
      {MENU_DATA.map(({ id, text, url, title }) => {
        const lastItem = MENU_DATA[MENU_DATA.length - 1].id === id
        return (
          <Breadcrumb.Item key={id}>
            <ConditionalLink
              href={url}
              title={`Ir para a página de ${title}`}
              aria-current={lastItem ? 'page' : 'false'}
            >
              {text}
            </ConditionalLink>
          </Breadcrumb.Item>
        )
      })}
    </Breadcrumb.List>
  </Breadcrumb>
)

export const Desktop: Story = {
  render: BreadcrumbDemo,
}

export const Mobile: Story = {
  render: BreadcrumbDemo,
  parameters: {
    viewport: {
      defaultViewport: 'iphonexr',
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/OBWV1tXbl1eXmdxzgEmcs3/Core-C-%7C-Delivery?type=design&node-id=1970-2803&mode=design&t=3RiFTaeOLi6fngmi-0',
      accessToken: 'figd_sHs6Ap894w4C-OAFls7tuq0fMMROyue-8zQJ8hRE',
    },
  },
}
