import { Meta, StoryObj } from '@storybook/react'
import { Container, SpecialOne } from '@r7/ui-layout'
import { FiveVerticalNews } from './five-vertical-news'
import { LargeMainBlock, SmallMainBlock } from './mocks/components'

const meta: Meta<typeof FiveVerticalNews> = {
  title: 'ui-card/FiveVerticalNews',
  component: FiveVerticalNews,
  tags: ['autodocs'],
  argTypes: {},
}

export default meta

type Story = StoryObj<typeof FiveVerticalNews>

export const Primary: Story = {
  render: () => (
    <Container>
      <SpecialOne
        renderMain={
          <SpecialOne.Main
            rowOne={
              <>
                <LargeMainBlock />
                <LargeMainBlock />
              </>
            }
            rowTwo={
              <>
                <SmallMainBlock />
                <SmallMainBlock />
                <SmallMainBlock />
              </>
            }
          />
        }
        renderSidebar={
          <FiveVerticalNews>
            <FiveVerticalNews.Title>Estrelando</FiveVerticalNews.Title>
            <FiveVerticalNews.Cards>
              <FiveVerticalNews.PrimaryItem>
                <FiveVerticalNews.ItemFigure>
                  <img
                    src="//img.r7.com/images/maiara-quiderolly-e-jo-25032023102338463?resize=254x145&crop=736x420 17 0&dimensions=254x145"
                    alt="Jô e Maiára Quiderolly passam o primeiro ano do filho brigando"
                    width="100%"
                    height="auto"
                  />
                </FiveVerticalNews.ItemFigure>
                <FiveVerticalNews.ItemTitle>
                  noticia de teste principal do bloco lorem impsu
                </FiveVerticalNews.ItemTitle>
              </FiveVerticalNews.PrimaryItem>
              <FiveVerticalNews.SecondaryItem>
                <FiveVerticalNews.ItemFigure>
                  <img
                    src="//img.r7.com/images/maiara-quiderolly-e-jo-25032023102338463?resize=254x145&crop=736x420 17 0&dimensions=254x145"
                    alt="Jô e Maiára Quiderolly passam o primeiro ano do filho brigando"
                    width="100%"
                    height="auto"
                  />
                </FiveVerticalNews.ItemFigure>
                <FiveVerticalNews.ItemTitle>
                  noticia de teste secundaria do bloco lorem impsu
                </FiveVerticalNews.ItemTitle>
              </FiveVerticalNews.SecondaryItem>
              <FiveVerticalNews.SecondaryItem>
                <FiveVerticalNews.ItemFigure>
                  <img
                    src="//img.r7.com/images/maiara-quiderolly-e-jo-25032023102338463?resize=254x145&crop=736x420 17 0&dimensions=254x145"
                    alt="Jô e Maiára Quiderolly passam o primeiro ano do filho brigando"
                    width="100%"
                    height="auto"
                  />
                </FiveVerticalNews.ItemFigure>
                <FiveVerticalNews.ItemTitle>
                  noticia de teste secundaria do bloco lorem impsu
                </FiveVerticalNews.ItemTitle>
              </FiveVerticalNews.SecondaryItem>
              <FiveVerticalNews.SecondaryItem>
                <FiveVerticalNews.ItemFigure>
                  <img
                    src="//img.r7.com/images/maiara-quiderolly-e-jo-25032023102338463?resize=254x145&crop=736x420 17 0&dimensions=254x145"
                    alt="Jô e Maiára Quiderolly passam o primeiro ano do filho brigando"
                    width="100%"
                    height="auto"
                  />
                </FiveVerticalNews.ItemFigure>
                <FiveVerticalNews.ItemTitle>
                  noticia de teste secundaria do bloco lorem impsu
                </FiveVerticalNews.ItemTitle>
              </FiveVerticalNews.SecondaryItem>
              <FiveVerticalNews.SecondaryItem>
                <FiveVerticalNews.ItemFigure>
                  <img
                    src="//img.r7.com/images/maiara-quiderolly-e-jo-25032023102338463?resize=254x145&crop=736x420 17 0&dimensions=254x145"
                    alt="Jô e Maiára Quiderolly passam o primeiro ano do filho brigando"
                    width="100%"
                    height="auto"
                  />
                </FiveVerticalNews.ItemFigure>
                <FiveVerticalNews.ItemTitle>
                  noticia de teste secundaria do bloco lorem impsu
                </FiveVerticalNews.ItemTitle>
              </FiveVerticalNews.SecondaryItem>
            </FiveVerticalNews.Cards>
          </FiveVerticalNews>
        }
      />
    </Container>
  ),
  args: {},
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/Pxz9nVdP2Im0YRWnDNM3J5/Core-C-%7C-Widgets-Home---VERS%C3%83O-1?type=design&node-id=2271-2995&mode=design&t=aGDm93zx8yJFnMZy-0',
      accessToken: 'figd_sHs6Ap894w4C-OAFls7tuq0fMMROyue-8zQJ8hRE',
    },
  },
}
