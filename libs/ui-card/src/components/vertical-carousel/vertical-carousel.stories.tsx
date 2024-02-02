import { Meta, StoryObj } from '@storybook/react'
import { VerticalCarousel } from './vertical-carousel'
import { VERTICAL_CAROUSEL_MOCK } from './vertical-carousel.mock'

const meta: Meta<typeof VerticalCarousel> = {
  title: 'ui-card/VerticalCarousel',
  component: VerticalCarousel,
  tags: ['autodocs'],
  argTypes: {},
}

export default meta

type Story = StoryObj<typeof VerticalCarousel>

export const Default: Story = {
  render: () => (
    <VerticalCarousel>
      <VerticalCarousel.ScrollContainer id="vertical-carousel-1">
        {VERTICAL_CAROUSEL_MOCK.map(item => (
          <VerticalCarousel.Item>
            <VerticalCarousel.Figure>
              <img src={item.img} alt={item.title} />
            </VerticalCarousel.Figure>

            <VerticalCarousel.TextWrapper>
              <VerticalCarousel.Title>{item.title}</VerticalCarousel.Title>
            </VerticalCarousel.TextWrapper>
          </VerticalCarousel.Item>
        ))}
      </VerticalCarousel.ScrollContainer>

      <VerticalCarousel.ArrowLeft aria-label="Anterior" aria-controls="vertical-carousel-1" />
      <VerticalCarousel.ArrowRight aria-label="Próximo" aria-controls="vertical-carousel-1" />
    </VerticalCarousel>
  ),
  args: {},
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/jwYC575D6aiVZhw5jLW3PQ/Biblioteca-Destaques-Stories?type=design&node-id=11%3A27&mode=dev',
      accessToken: 'figd_sHs6Ap894w4C-OAFls7tuq0fMMROyue-8zQJ8hRE',
    },
  },
}
