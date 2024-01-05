import '@r7/ui-card/css'
import '@r7/ui-layout/css'
import { Container, Proportional, SpecialOne } from '@r7/ui-layout'
import { Card, TwoCardsSquarePhoto, ProportionalPhoto } from '@r7/ui-card'

export function UiCard() {
  const LargeMainBlock = () => (
    <div className="h-[320px] bg-neutral-low-400 items-center justify-center flex">
      Large Main Block
    </div>
  )

  const SmallMainBlock = () => (
    <div className="h-[240px] bg-neutral-low-400 items-center justify-center flex">
      Small Main Block
    </div>
  )

  const SidebarBlock = () => (
    <div className="h-giant lg:h-[calc(560px+16px)] xl:h-[calc(560px+32px)] bg-neutral-low-400 items-center justify-center flex">
      Sidebar Block
    </div>
  )

  const Separator = () => <div className="w-full h-[2px] bg-feedback-warning-600 my-md" />

  return (
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
                <ProportionalPhoto
                  renderImage={
                    <img
                      src="//img.r7.com/images/maiores-bilheterias-de-2023-filmes-cinema-07122023155527132?resize=254x145&crop=646x369 31 0&dimensions=254x145"
                      alt="Saiba quais foram os filmes com as maiores bilheterias em 2023"
                      width="100%"
                      height="auto"
                    />
                  }
                  renderHat={
                    <Card.HatWrapper>
                      <Card.HatTitle>DE A PEQUENA SEREIA A MARIO</Card.HatTitle>
                    </Card.HatWrapper>
                  }
                  title="Saiba quais foram os filmes com as maiores bilheterias em 2023"
                />

                <ProportionalPhoto
                  renderImage={
                    <img
                      src="//img.r7.com/images/maiara-quiderolly-e-jo-25032023102338463?resize=254x145&crop=736x420 17 0&dimensions=254x145"
                      alt="Jô e Maiára Quiderolly passam o primeiro ano do filho brigando"
                      width="100%"
                      height="auto"
                    />
                  }
                  renderHat={
                    <Card.HatWrapper>
                      <Card.HatTitle>PENSÃO E EXAME DE DNA</Card.HatTitle>
                    </Card.HatWrapper>
                  }
                  title="Jô e Maiára Quiderolly passam o primeiro ano do filho brigando"
                />

                <ProportionalPhoto
                  renderImage={
                    <img
                      src="//img.r7.com/images/familia-record-70-anos-26122023163912401?resize=207x118&crop=367x209 0 211&dimensions=207x118"
                      alt="Confira todos os presentes trocados no amigo-secreto da Família Record"
                      width="100%"
                      height="auto"
                    />
                  }
                  renderHat={
                    <Card.HatWrapper>
                      <Card.HatTitle>EDIÇÃO ESPECIAL</Card.HatTitle>
                    </Card.HatWrapper>
                  }
                  title="Confira todos os presentes trocados no amigo-secreto da Família Record"
                />
              </>
            }
          />
        }
        renderSidebar={<SidebarBlock />}
      />

      <Separator />

      <Proportional.Three>
        <ProportionalPhoto
          renderImage={
            <img
              src="//img.r7.com/images/apagao-sao-paulo-1123-19122023115816951?resize=348x199&amp;crop=1170x669 0 32&amp;dimensions=328x184"
              alt="Ministério da Justiça abre processo contra Enel por apagões"
              width="100%"
              height="auto"
            />
          }
          renderHat={
            <Card.HatWrapper>
              <Card.HatTitle>são paulo e rio de janeiro</Card.HatTitle>
            </Card.HatWrapper>
          }
          title="Ministério da Justiça abre processo contra Enel por apagões"
        />

        <ProportionalPhoto
          renderImage={
            <img
              src="//img.r7.com/images/renato-cariani-19122023160842176?dimensions=328x184"
              alt="‘Saí leve dos esclarecimentos’, diz Cariani sobre depoimento à PF"
              width="100%"
              height="auto"
            />
          }
          renderHat={
            <Card.HatWrapper>
              <Card.HatTitle>INFLUENCIADOR FITNESS</Card.HatTitle>
            </Card.HatWrapper>
          }
          title="‘Saí leve dos esclarecimentos’, diz Cariani sobre depoimento à PF"
        />

        <ProportionalPhoto
          renderImage={
            <img
              src="//img.r7.com/images/larissa-manoela-e-andre-luiz-frambach-posam-com-os-cachorros-no-casamento-19122023163515181?dimensions=328x184"
              alt="Larissa Manoela teve a presença dos cães em seu casamento 'secreto'"
              width="100%"
              height="auto"
            />
          }
          renderHat={
            <Card.HatWrapper>
              <Card.HatTitle>ausência dos pais</Card.HatTitle>
            </Card.HatWrapper>
          }
          title="Larissa Manoela teve a presença dos cães em seu casamento 'secreto'"
        />
      </Proportional.Three>

      <Separator />

      <Proportional.Three>
        <TwoCardsSquarePhoto>
          <TwoCardsSquarePhoto.Item
            hat="Lavação de roupa suja "
            title="Após reencontro com ex-peões, rolou discussão entre Jaquelline e Márcia Fu"
            renderImage={
              <img
                src={
                  '//img.r7.com/images/a-fazenda-15-18122023112106357?resize=113x113&amp;crop=220x220 231 21&amp;dimensions=113x113'
                }
                alt="Após reencontro com ex-peões, rolou discussão entre Jaquelline e Márcia Fu"
                width={113}
                height={113}
              />
            }
          />

          <TwoCardsSquarePhoto.Item
            hat="revezamento"
            title="Tonzão pede ajuda a WL para concluir suas funções, André também se dispõe a colaborar"
            renderImage={
              <img
                src={
                  '//img.r7.com/images/tonzao-pede-ajuda-de-wl-para-concluir-as-funcoes-designadas-a-ele-a-fazenda-15-18122023103503365?resize=113x113&amp;crop=190x190 567 85&amp;dimensions=113x113'
                }
                alt="Pelo 13º ano seguido, 'Miguel' é 1º em ranking de nomes dados a bebês em 2023 "
                width={113}
                height={113}
              />
            }
          />
        </TwoCardsSquarePhoto>

        <TwoCardsSquarePhoto>
          <TwoCardsSquarePhoto.Item
            hat="entrevista"
            title="'Foi amor e eu continuo muito apaixonado', confessa Cezar Black sobre Kally Fonseca"
            renderImage={
              <img
                src={
                  '//img.r7.com/images/a-fazenda-15-18122023141440913?resize=113x113&amp;crop=369x369 124 0&amp;dimensions=113x113'
                }
                alt="Depois de mudança de regra, geladeira mais barata custará ao menos R$ 4.000"
                width={113}
                height={113}
              />
            }
          />

          <TwoCardsSquarePhoto.Item
            hat="especulação"
            title="'Tem que ser forte para estar aqui', afirma Lily em desabafo com Tonzão"
            renderImage={
              <img
                src={
                  '//img.r7.com/images/tem-que-ser-forte-para-estar-aqui-afirma-lily-em-desabafo-com-tonzao-a-fazenda-15-18122023114100634?resize=113x113&amp;crop=430x430 139 0&amp;dimensions=113x113'
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
            hat="A FAZENDA 15"
            title="Acompanhe 24 horas o cotidiano, as festas e as confusões dos peões no PlayPlus"
            renderImage={
              <img
                src={
                  '//img.r7.com/images/reacoes-17122023003710485?resize=113x113&amp;crop=420x420 57 0&amp;dimensions=113x113'
                }
                alt="Acompanhe 24 horas o cotidiano, as festas e as confusões dos peões no PlayPlus"
                width={113}
                height={113}
              />
            }
          />

          <TwoCardsSquarePhoto.Item
            hat="Atividades rurais"
            title="Jaquelline ensina Tonzão a tirar leite da vaca Mimosa, e faz trolagem com o peão"
            renderImage={
              <img
                src={
                  '//img.r7.com/images/jaque-ensina-tonzao-a-tirar-leite-da-vaca-e-faz-trolagem-com-o-peao-a-fazenda-15-18122023082502918?resize=113x113&amp;crop=365x365 39 61&amp;dimensions=113x113'
                }
                alt="Jaquelline ensina Tonzão a tirar leite da vaca Mimosa, e faz trolagem com o peão"
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
                    hat="'Nossa última foto juntos'"
                    title="Carol Castro lamenta nas redes sociais a morte do pai, Luca Castro"
                    renderImage={
                      <img
                        src={
                          '//img.r7.com/images/carol-castro-e-o-pai-18122023104242886?resize=113x113&amp;crop=1080x1080 0 0&amp;dimensions=113x113'
                        }
                        alt="Carol Castro lamenta nas redes sociais a morte do pai, Luca Castro"
                        width={113}
                        height={113}
                      />
                    }
                  />

                  <TwoCardsSquarePhoto.Item
                    hat="reflexão"
                    title="Kelly Key diz que abandonou a carreira na música: 'Sufocante'"
                    renderImage={
                      <img
                        src={
                          '//img.r7.com/images/screenshot4-7-18122023115432179?resize=113x113&amp;crop=675x675 223 0&amp;dimensions=113x113'
                        }
                        alt="Kelly Key diz que abandonou a carreira na música: 'Sufocante'"
                        width={113}
                        height={113}
                      />
                    }
                  />
                </TwoCardsSquarePhoto>

                <TwoCardsSquarePhoto>
                  <TwoCardsSquarePhoto.Item
                    hat="CONTEÚDO PATROCINADO"
                    title="Confira quem são os vencedores do 'Oscar' dos videogames"
                    renderImage={
                      <img
                        src={
                          '//img.r7.com/images/confira-os-vencedores-do-oscar-dos-videogames-18122023124035329?resize=113x113&amp;crop=241x241 85 0&amp;dimensions=113x113'
                        }
                        alt="Confira quem são os vencedores do 'Oscar' dos videogames"
                        width={113}
                        height={113}
                      />
                    }
                  />

                  <TwoCardsSquarePhoto.Item
                    hat="em 2023"
                    title="Shakira fez 'da geleia um sanduíche' e transformou traição em hits"
                    renderImage={
                      <img
                        src={
                          '//img.r7.com/images/shakira-29112023141942291?resize=113x113&amp;crop=222x222 0 0&amp;dimensions=113x113'
                        }
                        alt="Shakira fez 'da geleia um sanduíche' e transformou traição em hits"
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
