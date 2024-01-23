import '@r7/ui-layout/css'
import { Container, SpecialOne } from '@r7/ui-layout'
import { FiveVerticalNews } from './five-vertical-news'

describe(FiveVerticalNews.name, () => {
  beforeEach(() => {
    cy.mount(
      <Container>
        <SpecialOne
          renderMain={<SpecialOne.Main rowOne={null} rowTwo={null} />}
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
      </Container>,
    )
  })

  it('should render five cards - desktop', () => {
    cy.viewport('macbook-11')
    cy.findAllByRole('article').should('have.length', 5).and('be.visible')
    cy.matchImage()
  })

  it('should render five cards - tablet', () => {
    cy.viewport('ipad-mini')
    cy.findAllByRole('article').should('have.length', 5).and('be.visible')
    cy.matchImage()
  })

  it('should render five cards - mobile', () => {
    cy.viewport('iphone-se2')
    cy.findAllByRole('article').should('have.length', 5).and('be.visible')
    cy.matchImage()
  })
})
