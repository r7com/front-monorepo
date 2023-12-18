import { TwoCardsSquarePhoto } from './two-cards-square-photo'

describe(TwoCardsSquarePhoto.name, () => {
  beforeEach(() => {
    cy.mount(
      <TwoCardsSquarePhoto>
        <TwoCardsSquarePhoto.Item
          hat="digitalização"
          title="FGTS vai começar a ser pago com Pix a partir de 1º de março"
          renderImage={
            <img
              src={
                '//img.r7.com/images/fgts-celular-carteira-digital-10092023170643481?resize=113x113&amp;crop=1054x1054 0 0&amp;dimensions=113x113'
              }
              alt="FGTS vai começar a ser pago com Pix a partir de 1º de março"
              width={113}
              height={113}
            />
          }
        />

        <TwoCardsSquarePhoto.Item
          hat="traição"
          title="'Não posso ver esse cão', diz Luísa Sonza sobre Chico Moedas"
          renderImage={
            <img
              src={
                '//img.r7.com/images/luisa-sonza-chico-moedas-14122023102035926?resize=113x113&amp;crop=379x379 0 0&amp;dimensions=113x113'
              }
              alt="'Não posso ver esse cão', diz Luísa Sonza sobre Chico Moedas"
              width={113}
              height={113}
            />
          }
        />
      </TwoCardsSquarePhoto>,
    )
  })

  it('should render two cards - desktop', () => {
    cy.viewport('macbook-16')
    cy.findAllByRole('article').should('have.length', 2)
    cy.debug()
    cy.matchImage()
  })

  it('should render two cards - mobile', () => {
    cy.viewport('iphone-se2')
    cy.findAllByRole('article').should('have.length', 2)
    cy.debug()
    cy.matchImage()
  })
})
