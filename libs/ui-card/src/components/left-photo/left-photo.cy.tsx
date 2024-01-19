import { Bullet } from '@r7/ui-base-components'
import { Card } from '../card'
import { LeftPhoto } from './left-photo'

describe(LeftPhoto.name, () => {
  context('Two cards square photo', () => {
    beforeEach(() => {
      cy.mount(
        <div className="card-p-xxxs">
          <LeftPhoto>
            <LeftPhoto.Item>
              <Card.HatWrapper>
                <Card.HatTitle>digitalização</Card.HatTitle>
              </Card.HatWrapper>

              <LeftPhoto.Flex>
                <LeftPhoto.Figure format="square">
                  <img
                    src="//img.r7.com/images/fgts-celular-carteira-digital-10092023170643481?dimensions=113x113"
                    alt="FGTS vai começar a ser pago com Pix a partir de 1º de março"
                    width={113}
                    height={113}
                  />
                </LeftPhoto.Figure>

                <LeftPhoto.TextWrapper>
                  <LeftPhoto.Title fontSize="small">
                    FGTS vai começar a ser pago com Pix a partir de 1º de março
                  </LeftPhoto.Title>
                </LeftPhoto.TextWrapper>
              </LeftPhoto.Flex>
            </LeftPhoto.Item>

            <LeftPhoto.Item>
              <Card.HatWrapper>
                <Card.HatTitle>traição</Card.HatTitle>
              </Card.HatWrapper>

              <LeftPhoto.Flex>
                <LeftPhoto.Figure format="square">
                  <img
                    src="//img.r7.com/images/luisa-sonza-chico-moedas-14122023102035926?dimensions=113x113"
                    alt="'Não posso ver esse cão', diz Luísa Sonza sobre Chico Moedas"
                    width={113}
                    height={113}
                  />
                </LeftPhoto.Figure>

                <LeftPhoto.TextWrapper>
                  <LeftPhoto.Title fontSize="small">
                    'Não posso ver esse cão', diz Luísa Sonza sobre Chico Moedas
                  </LeftPhoto.Title>
                </LeftPhoto.TextWrapper>
              </LeftPhoto.Flex>
            </LeftPhoto.Item>
          </LeftPhoto>
        </div>,
      )
    })

    it('should render two cards - desktop', () => {
      cy.viewport('macbook-16')
      cy.findAllByRole('article').should('have.length', 2)
      cy.matchImage()
    })

    it('should render two cards - mobile', () => {
      cy.viewport('iphone-se2')
      cy.findAllByRole('article').should('have.length', 2)
      cy.matchImage()
    })
  })

  context('Two cards landscape photo', () => {
    beforeEach(() => {
      cy.mount(
        <div className="card-p-xxxs">
          <LeftPhoto>
            <LeftPhoto.Item>
              <Card.HatWrapper>
                <Card.HatTitle>digitalização</Card.HatTitle>
              </Card.HatWrapper>

              <LeftPhoto.Flex>
                <LeftPhoto.Figure format="landscape">
                  <img
                    src="https://img.r7.com/images/fgts-celular-carteira-digital-10092023170643481?dimensions=160x90"
                    alt="FGTS vai começar a ser pago com Pix a partir de 1º de março"
                    width={160}
                    height="auto"
                  />
                </LeftPhoto.Figure>

                <LeftPhoto.TextWrapper>
                  <LeftPhoto.Title>
                    FGTS vai começar a ser pago com Pix a partir de 1º de março
                  </LeftPhoto.Title>
                </LeftPhoto.TextWrapper>
              </LeftPhoto.Flex>
            </LeftPhoto.Item>

            <LeftPhoto.Item>
              <Card.HatWrapper>
                <Card.HatTitle>traição</Card.HatTitle>
              </Card.HatWrapper>

              <LeftPhoto.Flex>
                <LeftPhoto.Figure format="landscape">
                  <img
                    src="//img.r7.com/images/luisa-sonza-chico-moedas-14122023102035926?dimensions=160x90"
                    alt="'Não posso ver esse cão', diz Luísa Sonza sobre Chico Moedas"
                    width={160}
                    height="auto"
                  />
                </LeftPhoto.Figure>

                <LeftPhoto.TextWrapper>
                  <LeftPhoto.Title>
                    'Não posso ver esse cão', diz Luísa Sonza sobre Chico Moedas
                  </LeftPhoto.Title>
                </LeftPhoto.TextWrapper>
              </LeftPhoto.Flex>
            </LeftPhoto.Item>
          </LeftPhoto>
        </div>,
      )
    })

    it('should render two cards - desktop', () => {
      cy.viewport('macbook-16')
      cy.findAllByRole('article').should('have.length', 2)
      cy.matchImage()
    })

    it('should render two cards - mobile', () => {
      cy.viewport('iphone-se2')
      cy.findAllByRole('article').should('have.length', 2)
      cy.matchImage()
    })
  })

  context('Two cards landscape photo with bullet', () => {
    beforeEach(() => {
      cy.mount(
        <div className="card-p-xxxs">
          <LeftPhoto>
            <LeftPhoto.Item>
              <Card.HatWrapper>
                <Card.HatTitle>digitalização</Card.HatTitle>
              </Card.HatWrapper>

              <LeftPhoto.Flex>
                <LeftPhoto.Figure format="landscape">
                  <img
                    src="https://img.r7.com/images/fgts-celular-carteira-digital-10092023170643481?dimensions=160x90"
                    alt="FGTS vai começar a ser pago com Pix a partir de 1º de março"
                    width={160}
                    height="auto"
                  />
                </LeftPhoto.Figure>

                <LeftPhoto.TextWrapper>
                  <LeftPhoto.Title>
                    FGTS vai começar a ser pago com Pix a partir de 1º de março
                  </LeftPhoto.Title>
                </LeftPhoto.TextWrapper>
              </LeftPhoto.Flex>
            </LeftPhoto.Item>

            <LeftPhoto.Item>
              <Card.HatWrapper>
                <Card.HatTitle>traição</Card.HatTitle>
              </Card.HatWrapper>

              <LeftPhoto.Flex>
                <LeftPhoto.Figure format="landscape">
                  <img
                    src="//img.r7.com/images/luisa-sonza-chico-moedas-14122023102035926?dimensions=160x90"
                    alt="'Não posso ver esse cão', diz Luísa Sonza sobre Chico Moedas"
                    width={160}
                    height="auto"
                  />
                </LeftPhoto.Figure>

                <LeftPhoto.TextWrapper>
                  <LeftPhoto.Title>
                    'Não posso ver esse cão', diz Luísa Sonza sobre Chico Moedas
                  </LeftPhoto.Title>
                </LeftPhoto.TextWrapper>
              </LeftPhoto.Flex>
            </LeftPhoto.Item>

            <Bullet url="#">Bullet aqui</Bullet>
          </LeftPhoto>
        </div>,
      )
    })

    it('should render two cards - desktop', () => {
      cy.viewport('macbook-16')
      cy.findAllByRole('article').should('have.length', 2)
      cy.matchImage()
    })

    it('should render two cards - mobile', () => {
      cy.viewport('iphone-se2')
      cy.findAllByRole('article').should('have.length', 2)
      cy.matchImage()
    })
  })

  context('Three cards landscape small photo', () => {
    beforeEach(() => {
      cy.mount(
        <div className="card-p-xxxs">
          <LeftPhoto>
            <LeftPhoto.Item>
              <Card.HatWrapper>
                <Card.HatTitle>digitalização</Card.HatTitle>
              </Card.HatWrapper>

              <LeftPhoto.Flex>
                <LeftPhoto.Figure format="landscape">
                  <img
                    src="https://img.r7.com/images/fgts-celular-carteira-digital-10092023170643481?dimensions=113x65"
                    alt="FGTS vai começar a ser pago com Pix a partir de 1º de março"
                    width={113}
                    height="auto"
                  />
                </LeftPhoto.Figure>

                <LeftPhoto.TextWrapper>
                  <LeftPhoto.Title fontSize="small">
                    FGTS vai começar a ser pago com Pix a partir de 1º de março
                  </LeftPhoto.Title>
                </LeftPhoto.TextWrapper>
              </LeftPhoto.Flex>
            </LeftPhoto.Item>

            <LeftPhoto.Item>
              <Card.HatWrapper>
                <Card.HatTitle>brasil</Card.HatTitle>
              </Card.HatWrapper>

              <LeftPhoto.Flex>
                <LeftPhoto.Figure format="landscape">
                  <img
                    src="//img.r7.com/images/2016/08/31/3z687f953i_4s71ildhlc_file.jpg?resize=113x65&crop=749x431 0 259&dimensions=113x65"
                    alt="Dilma e PT são condenados a devolver R$ 75,5 mil à Justiça (Roberto Stuckert Filho/PR - 29.08.2016)"
                    width={113}
                    height="auto"
                  />
                </LeftPhoto.Figure>

                <LeftPhoto.TextWrapper>
                  <LeftPhoto.Title fontSize="small">
                    Dilma e PT são condenados a devolver R$ 75,5 mil à Justiça
                  </LeftPhoto.Title>
                </LeftPhoto.TextWrapper>
              </LeftPhoto.Flex>
            </LeftPhoto.Item>

            <LeftPhoto.Item>
              <Card.HatWrapper>
                <Card.HatTitle>traição</Card.HatTitle>
              </Card.HatWrapper>

              <LeftPhoto.Flex>
                <LeftPhoto.Figure format="landscape">
                  <img
                    src="//img.r7.com/images/luisa-sonza-chico-moedas-14122023102035926?dimensions=113x65"
                    alt="'Não posso ver esse cão', diz Luísa Sonza sobre Chico Moedas"
                    width={113}
                    height="auto"
                  />
                </LeftPhoto.Figure>

                <LeftPhoto.TextWrapper>
                  <LeftPhoto.Title>
                    'Não posso ver esse cão', diz Luísa Sonza sobre Chico Moedas
                  </LeftPhoto.Title>
                </LeftPhoto.TextWrapper>
              </LeftPhoto.Flex>
            </LeftPhoto.Item>
          </LeftPhoto>
        </div>,
      )
    })

    it('should render three cards - desktop', () => {
      cy.viewport('macbook-16')
      cy.findAllByRole('article').should('have.length', 3)
      cy.matchImage()
    })

    it('should render three cards - mobile', () => {
      cy.viewport('iphone-se2')
      cy.findAllByRole('article').should('have.length', 3)
      cy.matchImage()
    })
  })
})
