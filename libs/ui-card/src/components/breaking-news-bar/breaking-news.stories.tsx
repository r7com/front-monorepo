import { Meta, StoryObj } from '@storybook/react'
import { BreakingNews } from './breaking-news'
import { Proportional, Container } from '@r7/ui-layout'

const meta: Meta<typeof BreakingNews> = {
  title: 'ui-card/BreakingNews',
  component: BreakingNews,
  tags: ['autodocs'],
  argTypes: {},
}

export default meta

type Story = StoryObj<typeof BreakingNews>

export const Primary: Story = {
  render: ({ ...args }) => (
    <Container>
      <div className="flex flex-col gap-xxxs xl:gap-xs">
        <Proportional.One>
          <BreakingNews {...args} />
        </Proportional.One>
      </div>
    </Container>
  ),
  args: {
    href: '#',
    showImage: true,
    tag: 'Minha Tag',
    theme: 'urgent',
    title: 'Meu Titulo',
    image: (
      <img
        src="//img.r7.com/images/pantano-australia-rosa-brilhante-04102023182425856?resize=536x326&crop=691x420 80 0&dimensions=536x326"
        alt="Human hand writting in a paper"
        className="card-w-full card-object-cover card-h-full"
      />
    ),
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/Pxz9nVdP2Im0YRWnDNM3J5/Core-C-%7C-Widgets-Home?node-id=2039%3A624&mode=dev',
      accessToken: 'figd_sHs6Ap894w4C-OAFls7tuq0fMMROyue-8zQJ8hRE',
    },
  },
}
