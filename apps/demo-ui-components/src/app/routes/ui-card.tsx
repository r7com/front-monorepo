import '@r7/ui-card/css'
import '@r7/ui-layout/css'
import { Container, Proportional, SpecialOne } from '@r7/ui-layout'
import { TwoCardsSquarePhoto } from '@r7/ui-card'

export function UiCard() {
  const LargeMainBlock = () => (
    <div className="layout-h-[320px] layout-bg-neutral-low-400 layout-items-center layout-justify-center flex">
      Large Main Block
    </div>
  )

  const SmallMainBlock = () => (
    <div className="layout-h-[240px] layout-bg-neutral-low-400 layout-items-center layout-justify-center flex">
      Small Main Block
    </div>
  )

  const SidebarBlock = () => (
    <div className="layout-h-giant lg:layout-h-[calc(560px+16px)] xl:layout-h-[calc(560px+32px)] layout-bg-neutral-low-400 layout-items-center layout-justify-center flex">
      Sidebar Block
    </div>
  )

  const Separator = () => (
    <div style={{ width: '100%', height: '2px', background: 'red', margin: '50px 0' }} />
  )

  return (
    <Container>
      <Proportional.Three>
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
        </TwoCardsSquarePhoto>

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
        </TwoCardsSquarePhoto>

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
        </TwoCardsSquarePhoto>
      </Proportional.Three>

      <Separator />

      <Proportional.Four>
        <TwoCardsSquarePhoto>
          <TwoCardsSquarePhoto.Item
            hat="calote"
            title="Jojo alfineta quem pede dinheiro e não devolve: 'Não ajudo mais'"
            renderImage={
              <img
                src={
                  '//img.r7.com/images/jojo-todynho-14122023115232287?resize=113x113&amp;crop=334x334 343 35&amp;dimensions=113x113'
                }
                alt="Jojo alfineta quem pede dinheiro e não devolve: 'Não ajudo mais' (Reprodução/Instagram)"
                width={113}
                height={113}
              />
            }
          />

          <TwoCardsSquarePhoto.Item
            hat="São Paulo"
            title="Mãe e padrasto são condenados por tortura e estupro de criança de 1 ano"
            renderImage={
              <img
                src={
                  '//img.r7.com/images/crianca-boneca-abuso-infantil-estupro-de-vulneravel-28082020183342242?resize=113x113&amp;crop=426x426 100 0&amp;dimensions=113x113'
                }
                alt="Mãe e padrasto são condenados por tortura e estupro de criança de 1 ano"
                width={113}
                height={113}
              />
            }
          />
        </TwoCardsSquarePhoto>

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
        </TwoCardsSquarePhoto>

        <TwoCardsSquarePhoto>
          <TwoCardsSquarePhoto.Item
            hat="'Muito feliz'"
            title="Irmã de MC Melody rebate críticas após exibir resultado de plásticas"
            renderImage={
              <img
                src={
                  '//img.r7.com/images/bella-angel-exibe-resultado-de-cirurgias-14122023172503888?resize=113x113&crop=368x368 15 5&dimensions=113x113'
                }
                alt="Irmã de MC Melody rebate críticas após exibir resultado de plásticas"
                width={113}
                height={113}
              />
            }
          />

          <TwoCardsSquarePhoto.Item
            hat="assembleia legislativa"
            title="SP: relatório da CPI da Enel aponta irregularidades e negligência"
            renderImage={
              <img
                src={
                  '//img.r7.com/images/apagao-sao-paulo-14122023170723421?resize=113x113&amp;crop=842x842 658 0&amp;dimensions=113x113'
                }
                alt="SP: relatório da CPI da Enel aponta irregularidades e negligência"
                width={113}
                height={113}
              />
            }
          />
        </TwoCardsSquarePhoto>

        <TwoCardsSquarePhoto>
          <TwoCardsSquarePhoto.Item
            hat="faça sua doação à abads"
            title="Saiba como ajudar crianças e adolescentes com deficiência intelectual"
            renderImage={
              <img
                src={
                  '//img.r7.com/images/saiba-como-contribuir-para-a-causa-da-abads-13122023160743843?resize=113x113&amp;crop=480x480 141 0&amp;dimensions=113x113'
                }
                alt="Saiba como ajudar crianças e adolescentes com deficiência intelectual"
                width={113}
                height={113}
              />
            }
          />

          <TwoCardsSquarePhoto.Item
            hat="SE ENGASGOU"
            title="Bárbara Evans revela que filha ainda não está curada após cirurgia"
            renderImage={
              <img
                src={
                  '//img.r7.com/images/barbara-evans-filha-ayla-14122023145804807?resize=113x113&amp;crop=336x336 0 14&amp;dimensions=113x113'
                }
                alt="Bárbara Evans revela que filha ainda não está curada após cirurgia"
                width={113}
                height={113}
              />
            }
          />
        </TwoCardsSquarePhoto>
      </Proportional.Four>

      <Separator />

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
                </TwoCardsSquarePhoto>

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
                </TwoCardsSquarePhoto>

                <SmallMainBlock />
              </>
            }
          />
        }
        renderSidebar={<SidebarBlock />}
      />
    </Container>
  )
}
