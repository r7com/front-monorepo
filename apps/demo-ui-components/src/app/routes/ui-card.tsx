import '@r7/ui-card/css'
import '@r7/ui-layout/css'
import '@r7/ui-section-heading/css'
import { Container, Proportional, SpecialOne, SectionWrapper } from '@r7/ui-layout'
import { SectionHeading } from '@r7/ui-section-heading'
import {
  LeftPhoto,
  BreakingNews,
  Card,
  ProportionalPhoto,
  Guerra,
  TextOverPhoto,
} from '@r7/ui-card'
import { Bullet } from '@r7/ui-base-components'

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

  return (
    <Container>
      <SectionWrapper>
        <Proportional.One>
          <BreakingNews
            theme="live"
            title="titulo para barra"
            href="#"
            imageAlt="Human hand writting in a paper"
            imageUrl="//img.r7.com/images/pantano-australia-rosa-brilhante-04102023182425856?resize=536x326&crop=691x420 80 0&dimensions=536x326"
          />
        </Proportional.One>

        <Proportional.One>
          <BreakingNews theme="now" title="titulo para barra" href="#" />
        </Proportional.One>

        <Proportional.One>
          <BreakingNews theme="urgent" title="titulo para barra" href="#" />
        </Proportional.One>

        <Proportional.One>
          <Guerra>
            <Card.HatWrapper>
              <Card.HatTitle color="low">VALOR DEFINIDO PELO MINISTÉRIO DA SAÚDE</Card.HatTitle>
            </Card.HatWrapper>

            <Card.Title color="low" fontStyle="heading-level-1">
              Lula sanciona lei de reajuste anual da tabela do SUS para hospitais filantrópicos e
              particulares
            </Card.Title>

            <Guerra.Bullets>
              <Bullet url="#" color="neutralLow" size="large">
                Câmara aprova MP que adia Lei de Dados para 31
              </Bullet>

              <Bullet url="#" color="neutralLow" size="large">
                Casa Verde e Amarela terá financiamento
              </Bullet>

              <Bullet url="#" color="neutralLow" size="large">
                Senado aprova, em segundo turno
              </Bullet>

              <Bullet url="#" color="neutralLow" size="large">
                Guedes defende fim de deduções do IR
              </Bullet>
            </Guerra.Bullets>
          </Guerra>
        </Proportional.One>

        <Proportional.One>
          <Guerra>
            <Guerra.Figure>
              <img
                src="//img.r7.com/images/pr-jair-bolsonaro-declaracao-a-imprensa-1500-13082020105425814?resize=1100x628&crop=1101x628 123 47&dimensions=1100x628"
                alt="Esperamos ter novo valor do auxílio emergencial até sexta, diz Bolsonaro  ( Carolina Antunes/PR - 12.08.2020)"
                style={{ width: '100%' }}
              />
            </Guerra.Figure>

            <Guerra.Overlay>
              <Card.HatWrapper type="warning">
                <Card.HatTitle color="high">Economia</Card.HatTitle>
              </Card.HatWrapper>

              <Guerra.Title>
                Esperamos ter novo valor do auxílio emergencial até sexta, diz Bolsonaro
              </Guerra.Title>

              <Guerra.Bullets>
                <Bullet url="#" color="neutralHigh">
                  Câmara aprova MP que adia Lei de Dados para 31 de dezembro
                </Bullet>

                <Bullet url="#" color="neutralHigh">
                  Casa Verde e Amarela terá financiamento com juros de 4,25%
                </Bullet>

                <Bullet url="#" color="neutralHigh">
                  Senado aprova, em segundo turno, PEC de renovação do Fundeb
                </Bullet>

                <Bullet url="#" color="neutralHigh">
                  Guedes defende fim de deduções do IR para Renda Brasil chegar a R$ 300
                </Bullet>

                <Bullet url="#" color="neutralHigh">
                  Retomada de alto-forno da Usiminas terá presença de Bolsonaro e Zema
                </Bullet>

                <Bullet url="#" color="neutralHigh">
                  Senado aprova em primeiro turno PEC que renova o Fundeb
                </Bullet>

                <Bullet url="#" color="neutralHigh">
                  5 pontos para o Brasil decolar de vez na economia
                </Bullet>

                <Bullet url="#" color="neutralHigh">
                  Queda no PIB e aprovação a Bolsonaro são destaques nesta sexta (14)
                </Bullet>
              </Guerra.Bullets>
            </Guerra.Overlay>
          </Guerra>
        </Proportional.One>

        <SpecialOne
          renderMain={
            <SpecialOne.Main
              rowOne={
                <>
                  <TextOverPhoto>
                    <TextOverPhoto.Figure>
                      <img
                        src="//img.r7.com/images/daniel-erthal-03012024135027266?resize=536x326&crop=607x369 34 0&dimensions=536x326"
                        alt="Clientes dão Kombi para ex-galã Daniel Erthal trabalhar em Copacabana"
                      />
                    </TextOverPhoto.Figure>

                    <TextOverPhoto.TextWrapper>
                      <Card.HatWrapper>
                        <Card.HatTitle color="high">vendedor ambulante</Card.HatTitle>
                      </Card.HatWrapper>

                      <TextOverPhoto.Title>
                        Clientes dão Kombi para ex-galã Daniel Erthal trabalhar em Copacabana
                      </TextOverPhoto.Title>
                    </TextOverPhoto.TextWrapper>
                  </TextOverPhoto>

                  <TextOverPhoto layout="vertical">
                    <TextOverPhoto.Figure layout="vertical">
                      <img
                        src="//img.r7.com/images/leonardo-bricio-10012024120558929?resize=208x324&crop=542x844 454 0&dimensions=208x324"
                        alt="Leonardo Bricio contrai dengue e desabafa sobre estar doente e sozinho"
                      />
                    </TextOverPhoto.Figure>

                    <TextOverPhoto.TextWrapper>
                      <Card.HatWrapper>
                        <Card.HatTitle color="high">'Me recuperando'</Card.HatTitle>
                      </Card.HatWrapper>

                      <TextOverPhoto.Title>
                        Leonardo Bricio contrai dengue e desabafa sobre estar doente e sozinho
                      </TextOverPhoto.Title>
                    </TextOverPhoto.TextWrapper>
                  </TextOverPhoto>
                </>
              }
              rowTwo={
                <>
                  <ProportionalPhoto>
                    <ProportionalPhoto.Figure>
                      <img
                        src="https://img.r7.com/images/1madonna-22990128-19012024101502983?dimensions=254x145"
                        alt="Fãs processam Madonna por atrasar show; entenda"
                        width="100%"
                        height="auto"
                      />
                    </ProportionalPhoto.Figure>

                    <ProportionalPhoto.TextWrapper>
                      <Card.HatWrapper>
                        <Card.HatTitle>DEMOROU DUAS HORAS</Card.HatTitle>
                      </Card.HatWrapper>

                      <ProportionalPhoto.Title>
                        Fãs processam Madonna por atrasar show; entenda
                      </ProportionalPhoto.Title>
                    </ProportionalPhoto.TextWrapper>
                  </ProportionalPhoto>

                  <ProportionalPhoto>
                    <ProportionalPhoto.Figure>
                      <img
                        src="https://img.r7.com/images/anyconv-commamma-759x500-1-19012024093301184?dimensions=254x145"
                        alt="Apresentadora Mamma Bruschetta ganha alta da UTI"
                        width="100%"
                        height="auto"
                      />
                    </ProportionalPhoto.Figure>

                    <ProportionalPhoto.TextWrapper>
                      <Card.HatWrapper>
                        <Card.HatTitle>QUADRO ESTÁVEL</Card.HatTitle>
                      </Card.HatWrapper>

                      <ProportionalPhoto.Title>
                        Apresentadora Mamma Bruschetta ganha alta da UTI
                      </ProportionalPhoto.Title>
                    </ProportionalPhoto.TextWrapper>
                  </ProportionalPhoto>

                  <ProportionalPhoto>
                    <ProportionalPhoto.Figure>
                      <img
                        src="https://img.r7.com/images/karoline-lima-e-leo-pereira-18012024125506526?dimensions=207x118"
                        alt="aroline Lima fala sobre vida fora das redes: 'Às vezes prefiro viver na minha'"
                        width="100%"
                        height="auto"
                      />
                    </ProportionalPhoto.Figure>

                    <ProportionalPhoto.TextWrapper>
                      <Card.HatWrapper>
                        <Card.HatTitle>BOATOS DE AFFAIR</Card.HatTitle>
                      </Card.HatWrapper>

                      <ProportionalPhoto.Title>
                        Karoline Lima fala sobre vida fora das redes: 'Às vezes prefiro viver na
                        minha'
                      </ProportionalPhoto.Title>
                    </ProportionalPhoto.TextWrapper>
                  </ProportionalPhoto>
                </>
              }
            />
          }
          renderSidebar={<SidebarBlock />}
        />

        <SectionHeading>
          <a href="/">
            <SectionHeading.Image
              src="https://img.r7.com/images/jr-24h-18112019115830166?resize=110x70&crop=200x127+0+37"
              alt="Jornal da Record"
            />
          </a>

          <SectionHeading.Line />

          <SectionHeading.Tags>
            <SectionHeading.Tag href="#" title="Christina Lemos">
              Christina Lemos
            </SectionHeading.Tag>

            <SectionHeading.Tag href="#" title="Thiago Nolasco">
              Thiago Nolasco
            </SectionHeading.Tag>

            <SectionHeading.Tag href="#" title="Luiz Fara Monteiro">
              Luiz Fara Monteiro
            </SectionHeading.Tag>
          </SectionHeading.Tags>
        </SectionHeading>

        <Proportional.Three>
          <ProportionalPhoto>
            <ProportionalPhoto.Figure>
              <img
                src="//img.r7.com/images/apagao-sao-paulo-1123-19122023115816951?resize=348x199&amp;crop=1170x669 0 32&amp;dimensions=328x184"
                alt="Ministério da Justiça abre processo contra Enel por apagões"
                width="100%"
                height="auto"
              />
            </ProportionalPhoto.Figure>

            <ProportionalPhoto.TextWrapper>
              <Card.HatWrapper>
                <Card.HatTitle>são paulo e rio de janeiro</Card.HatTitle>
              </Card.HatWrapper>

              <ProportionalPhoto.Title>
                Ministério da Justiça abre processo contra Enel por apagões
              </ProportionalPhoto.Title>
            </ProportionalPhoto.TextWrapper>
          </ProportionalPhoto>

          <ProportionalPhoto>
            <ProportionalPhoto.Figure>
              <img
                src="//img.r7.com/images/renato-cariani-19122023160842176?dimensions=328x184"
                alt="‘Saí leve dos esclarecimentos’, diz Cariani sobre depoimento à PF"
                width="100%"
                height="auto"
              />
            </ProportionalPhoto.Figure>

            <ProportionalPhoto.TextWrapper>
              <Card.HatWrapper>
                <Card.HatTitle>INFLUENCIADOR FITNESS</Card.HatTitle>
              </Card.HatWrapper>

              <ProportionalPhoto.Title>
                ‘Saí leve dos esclarecimentos’, diz Cariani sobre depoimento à PF
              </ProportionalPhoto.Title>
            </ProportionalPhoto.TextWrapper>
          </ProportionalPhoto>

          <ProportionalPhoto>
            <ProportionalPhoto.Figure>
              <img
                src="//img.r7.com/images/larissa-manoela-e-andre-luiz-frambach-posam-com-os-cachorros-no-casamento-19122023163515181?dimensions=328x184"
                alt="Larissa Manoela teve a presença dos cães em seu casamento 'secreto'"
                width="100%"
                height="auto"
              />
            </ProportionalPhoto.Figure>
            <ProportionalPhoto.TextWrapper>
              <Card.HatWrapper>
                <Card.HatTitle>ausência dos pais</Card.HatTitle>
              </Card.HatWrapper>

              <ProportionalPhoto.Title>
                Larissa Manoela teve a presença dos cães em seu casamento 'secreto'
              </ProportionalPhoto.Title>
            </ProportionalPhoto.TextWrapper>
          </ProportionalPhoto>
        </Proportional.Three>

        <Proportional.Three>
          <LeftPhoto>
            <LeftPhoto.Item>
              <LeftPhoto.Flex>
                <LeftPhoto.Figure format="landscape">
                  <img
                    src="//img.r7.com/images/rei-charles-3-mensagem-de-natal-25122023151322555?resize=160x91&crop=1500x853 0 88&dimensions=160x91"
                    alt="Rei Charles passará por cirurgia após ser diagnosticado com aumento de próstata"
                    width={160}
                    height="auto"
                  />
                </LeftPhoto.Figure>

                <LeftPhoto.TextWrapper>
                  <Card.HatWrapper>
                    <Card.HatTitle>REINO UNIDO</Card.HatTitle>
                  </Card.HatWrapper>

                  <LeftPhoto.Title fontSize="medium">
                    Rei Charles passará por cirurgia após ser
                  </LeftPhoto.Title>
                </LeftPhoto.TextWrapper>
              </LeftPhoto.Flex>
            </LeftPhoto.Item>

            <LeftPhoto.Item>
              <LeftPhoto.Flex>
                <LeftPhoto.Figure format="landscape">
                  <img
                    src="//img.r7.com/images/chuvas-arvores-arvores-caidas-porto-alegre-17012024135348739?resize=160x91&crop=791x450 84 1&dimensions=160x91"
                    alt="Em uma hora, cidade registra metade da chuva esperada para o mês todo"
                    width={160}
                    height="auto"
                  />
                </LeftPhoto.Figure>

                <LeftPhoto.TextWrapper>
                  <Card.HatWrapper>
                    <Card.HatTitle>PORTO ALEGRE (RS)</Card.HatTitle>
                  </Card.HatWrapper>

                  <LeftPhoto.Title fontSize="medium">
                    Em uma hora, cidade registra metade
                  </LeftPhoto.Title>
                </LeftPhoto.TextWrapper>
              </LeftPhoto.Flex>
            </LeftPhoto.Item>

            <Bullet url="#" size="small">
              Prefeito: 'Capital está praticamente parada'
            </Bullet>
          </LeftPhoto>

          <LeftPhoto>
            <LeftPhoto.Item>
              <LeftPhoto.Flex>
                <LeftPhoto.Figure format="landscape">
                  <img
                    src="https://img.r7.com/images/r7rio-012024-praia-17012024142855425?resize=160x91&crop=771x438%200%2076&dimensions=160x91"
                    alt="Rio registra a maior temperatura do verão, e sensação chega a quase 60 °C"
                    width={160}
                    height="auto"
                  />
                </LeftPhoto.Figure>

                <LeftPhoto.TextWrapper>
                  <Card.HatWrapper>
                    <Card.HatTitle>TERMÔMETRO NAS ALTURAS</Card.HatTitle>
                  </Card.HatWrapper>

                  <LeftPhoto.Title fontSize="medium">
                    Rio registra a maior temperatura do verão
                  </LeftPhoto.Title>
                </LeftPhoto.TextWrapper>
              </LeftPhoto.Flex>
            </LeftPhoto.Item>

            <LeftPhoto.Item>
              <LeftPhoto.Flex>
                <LeftPhoto.Figure format="landscape">
                  <img
                    src="https://img.r7.com/images/morta-bela-vitoria-17012024143830665?resize=160x91&crop=489x278%200%200&dimensions=160x91"
                    alt="'Tem que ser forte para estar aqui', afirma Lily em desabafo com Tonzão"
                    width={160}
                    height="auto"
                  />
                </LeftPhoto.Figure>

                <LeftPhoto.TextWrapper>
                  <Card.HatWrapper>
                    <Card.HatTitle>BELO HORIZONTE (MG)</Card.HatTitle>
                  </Card.HatWrapper>

                  <LeftPhoto.Title fontSize="medium">
                    'Nunca foi usuária de qualquer substância'
                  </LeftPhoto.Title>
                </LeftPhoto.TextWrapper>
              </LeftPhoto.Flex>
            </LeftPhoto.Item>

            <Bullet url="#" size="small">
              Vítima foi abusada sexualmente, diz familiar
            </Bullet>
          </LeftPhoto>

          <LeftPhoto>
            <LeftPhoto.Item>
              <LeftPhoto.Flex>
                <LeftPhoto.Figure format="square">
                  <img
                    src="//img.r7.com/images/daniel-alves-17012024151701165?resize=113x113&crop=671x671%200%203&dimensions=113x113"
                    alt=""
                    width={113}
                    height={113}
                  />
                </LeftPhoto.Figure>

                <LeftPhoto.TextWrapper>
                  <Card.HatWrapper>
                    <Card.HatTitle>COSME RÍMOLI</Card.HatTitle>
                  </Card.HatWrapper>

                  <LeftPhoto.Title fontSize="small">
                    Daniel Alves vai dizer que estava bêbado e apresentar
                  </LeftPhoto.Title>
                </LeftPhoto.TextWrapper>
              </LeftPhoto.Flex>
            </LeftPhoto.Item>

            <LeftPhoto.Item>
              <LeftPhoto.Flex>
                <LeftPhoto.Figure format="square">
                  <img
                    src="//img.r7.com/images/voadora-assalto-rjnoar-17012024111548783?resize=113x113&crop=357x357%20361%200&dimensions=113x113"
                    alt="Jaquelline ensina Tonzão a tirar leite da vaca Mimosa, e faz trolagem com o peão"
                    width={113}
                    height={113}
                  />
                </LeftPhoto.Figure>

                <LeftPhoto.TextWrapper>
                  <Card.HatWrapper>
                    <Card.HatTitle>ASSALTO</Card.HatTitle>
                  </Card.HatWrapper>

                  <LeftPhoto.Title fontSize="small">
                    Homem que reagiu com 'voadora' diz ter notado que os criminosos
                  </LeftPhoto.Title>
                </LeftPhoto.TextWrapper>
              </LeftPhoto.Flex>
            </LeftPhoto.Item>
          </LeftPhoto>
        </Proportional.Three>

        <Proportional.Four>
          <ProportionalPhoto>
            <ProportionalPhoto.Figure>
              <img
                src="//img.r7.com/images/ob-onibus-15012024111113358?dimensions=254x145"
                alt="Como vou contar para minha melhor amiga algo tão, tão..."
                width="100%"
                height="auto"
              />
            </ProportionalPhoto.Figure>

            <ProportionalPhoto.TextWrapper>
              <Card.HatWrapper>
                <Card.HatTitle>MARIA DO CAOS</Card.HatTitle>
              </Card.HatWrapper>

              <ProportionalPhoto.Title>
                Como vou contar para minha melhor amiga algo tão, tão...
              </ProportionalPhoto.Title>
            </ProportionalPhoto.TextWrapper>
          </ProportionalPhoto>

          <ProportionalPhoto>
            <ProportionalPhoto.Figure>
              <img
                src="//img.r7.com/images/golf-vai-celebrar-50-anos-com-nova-versao-gti-veja-os-classicos-15012024204520012?dimensions=254x145"
                alt="Golf vai celebrar 50 anos com nova versão GTI"
                width="100%"
                height="auto"
              />
            </ProportionalPhoto.Figure>

            <ProportionalPhoto.TextWrapper>
              <Card.HatWrapper>
                <Card.HatTitle>AUTOS CARROS</Card.HatTitle>
              </Card.HatWrapper>

              <ProportionalPhoto.Title>
                Golf vai celebrar 50 anos com nova versão GTI
              </ProportionalPhoto.Title>
            </ProportionalPhoto.TextWrapper>
          </ProportionalPhoto>

          <ProportionalPhoto>
            <ProportionalPhoto.Figure>
              <img
                src="//img.r7.com/images/aviao-agricola-acidente-com-explosao-no-chile-15012024204350752?resize=254x145&crop=1289x736%200%200&dimensions=254x145"
                alt="Flagrante: avião atinge poste e cai em rodovia no Chile"
                width="100%"
                height="auto"
              />
            </ProportionalPhoto.Figure>

            <ProportionalPhoto.TextWrapper>
              <ProportionalPhoto.Title>
                Flagrante: avião atinge poste e cai em rodovia no Chile
              </ProportionalPhoto.Title>
            </ProportionalPhoto.TextWrapper>
          </ProportionalPhoto>

          <ProportionalPhoto>
            <ProportionalPhoto.Figure>
              <img
                src="//img.r7.com/images/vitamina-d-laranja-sol-verao-25122023153812819?resize=254x145&crop=736x420%2017%200&dimensions=254x145"
                alt="Por que preciso tomar vitamina D também no verão?"
                width="100%"
                height="auto"
              />
            </ProportionalPhoto.Figure>

            <ProportionalPhoto.TextWrapper>
              <Card.HatWrapper>
                <Card.HatTitle>COMO SER SAUDÁVEL</Card.HatTitle>
              </Card.HatWrapper>

              <ProportionalPhoto.Title>
                Por que preciso tomar vitamina D também no verão?
              </ProportionalPhoto.Title>
            </ProportionalPhoto.TextWrapper>
          </ProportionalPhoto>
        </Proportional.Four>

        {/** Aqui */}
        <Proportional.Three>
          <LeftPhoto>
            <LeftPhoto.Item>
              <LeftPhoto.Flex>
                <LeftPhoto.Figure format="landscape">
                  <img
                    src="//img.r7.com/images/tim-5g-16012024113916282?resize=113x65&crop=1252x720%2028%200&dimensions=113x65"
                    alt="Idosa morre e 17 ficam feridos após suposto ataque terrorista e atropelamento"
                    width={113}
                    height={65}
                  />
                </LeftPhoto.Figure>

                <LeftPhoto.TextWrapper>
                  <Card.HatWrapper>
                    <Card.HatTitle>CONTEÚDO PATROCINADO</Card.HatTitle>
                  </Card.HatWrapper>

                  <LeftPhoto.Title fontSize="small">
                    Cliente pré-pago da TIM vai ter desconto no aplicativo Zé Delivery
                  </LeftPhoto.Title>
                </LeftPhoto.TextWrapper>
              </LeftPhoto.Flex>
            </LeftPhoto.Item>

            <LeftPhoto.Item>
              <LeftPhoto.Flex>
                <LeftPhoto.Figure format="landscape">
                  <img
                    src="//img.r7.com/images/exclusivo-motos-caras-roubadas-sao-escondidas-em-area-de-mata-em-sp-16012024110347312?resize=113x65&crop=539x310%20157%2048&dimensions=113x65"
                    alt="Funcionários de empresas telefônicas ajudam criminosos a invadir contas"
                    width={113}
                    height={65}
                  />
                </LeftPhoto.Figure>

                <LeftPhoto.TextWrapper>
                  <Card.HatWrapper>
                    <Card.HatTitle>REVENDA NO MERCADO PARALELO</Card.HatTitle>
                  </Card.HatWrapper>

                  <LeftPhoto.Title fontSize="small">
                    Motos caras roubadas são escondidas em área de mata em São Paulo
                  </LeftPhoto.Title>
                </LeftPhoto.TextWrapper>
              </LeftPhoto.Flex>
            </LeftPhoto.Item>

            <LeftPhoto.Item>
              <LeftPhoto.Flex>
                <LeftPhoto.Figure format="landscape">
                  <img
                    src="//img.r7.com/images/camera-veicular-ajuda-a-evitar-assaltos-e-inibir-acao-de-criminosos-16012024110552465?resize=113x65&crop=651x374%20123%200&dimensions=113x65"
                    alt="Homem em situação de rua coloca fogo em vigilante de 60 anos"
                    width={113}
                    height={65}
                  />
                </LeftPhoto.Figure>

                <LeftPhoto.TextWrapper>
                  <Card.HatWrapper>
                    <Card.HatTitle>AUXÍLIO PARA A POLÍCIA</Card.HatTitle>
                  </Card.HatWrapper>

                  <LeftPhoto.Title fontSize="small">
                    Câmera veicular ajuda a evitar assaltos e inibir ação de criminosos
                  </LeftPhoto.Title>
                </LeftPhoto.TextWrapper>
              </LeftPhoto.Flex>
            </LeftPhoto.Item>
          </LeftPhoto>

          <LeftPhoto>
            <LeftPhoto.Item>
              <LeftPhoto.Flex>
                <LeftPhoto.Figure format="landscape">
                  <img
                    src="//img.r7.com/images/r7-cupons-arte-05122023-05122023155441424?resize=113x65&crop=183x105%200%200&dimensions=113x65"
                    alt="Idosa morre e 17 ficam feridos após suposto ataque terrorista e atropelamento"
                    width={113}
                    height={65}
                  />
                </LeftPhoto.Figure>

                <LeftPhoto.TextWrapper>
                  <Card.HatWrapper>
                    <Card.HatTitle>R7 CUPONS</Card.HatTitle>
                  </Card.HatWrapper>

                  <LeftPhoto.Title fontSize="small">
                    Confira os descontos e os melhores preços para o que você procura
                  </LeftPhoto.Title>
                </LeftPhoto.TextWrapper>
              </LeftPhoto.Flex>
            </LeftPhoto.Item>

            <LeftPhoto.Item>
              <LeftPhoto.Flex>
                <LeftPhoto.Figure format="landscape">
                  <img
                    src="//img.r7.com/images/uber-vai-recorrer-da-multa-de-r-1-bilhao-aplicada-pela-justica-de-sp-por-nao-registrar-motoristas-15092023214629879?resize=113x65&crop=518x298%20336%2084&dimensions=113x65"
                    alt="Funcionários de empresas telefônicas ajudam criminosos a invadir contas"
                    width={113}
                    height={65}
                  />
                </LeftPhoto.Figure>

                <LeftPhoto.TextWrapper>
                  <Card.HatWrapper>
                    <Card.HatTitle>POLÊMICA</Card.HatTitle>
                  </Card.HatWrapper>

                  <LeftPhoto.Title fontSize="small">
                    É preciso pagar taxa extra pelo ar-condicionado em apps de transporte?
                  </LeftPhoto.Title>
                </LeftPhoto.TextWrapper>
              </LeftPhoto.Flex>
            </LeftPhoto.Item>

            <LeftPhoto.Item>
              <LeftPhoto.Flex>
                <LeftPhoto.Figure format="landscape">
                  <img
                    src="//img.r7.com/images/byd-dolphin-plus-2024-testamos-a-versao-2x-mais-potente-do-eletrico-22122023184851069?resize=113x65&crop=1202x691%200%20467&dimensions=113x65"
                    alt="Homem em situação de rua coloca fogo em vigilante de 60 anos"
                    width={113}
                    height={65}
                  />
                </LeftPhoto.Figure>

                <LeftPhoto.TextWrapper>
                  <Card.HatWrapper>
                    <Card.HatTitle>ATÉ 52 KM/L</Card.HatTitle>
                  </Card.HatWrapper>

                  <LeftPhoto.Title fontSize="small">
                    Lista mostra os dez veículos elétricos mais econômicos do país
                  </LeftPhoto.Title>
                </LeftPhoto.TextWrapper>
              </LeftPhoto.Flex>
            </LeftPhoto.Item>
          </LeftPhoto>
        </Proportional.Three>

        <Proportional.Three>
          <LeftPhoto>
            <LeftPhoto.Item>
              <LeftPhoto.Flex>
                <LeftPhoto.Figure format="landscape">
                  <img
                    src="//img.r7.com/images/idosa-morre-e-17-ficam-feridos-apos-suposto-ataque-terrorista-seguido-de-atropelamento-em-israel-15012024114913306?resize=113x65&crop=433x249 38 12&dimensions=113x65"
                    alt="Idosa morre e 17 ficam feridos após suposto ataque terrorista e atropelamento"
                    width={113}
                    height={65}
                  />
                </LeftPhoto.Figure>

                <LeftPhoto.TextWrapper>
                  <Card.HatWrapper>
                    <Card.HatTitle>ISRAEL</Card.HatTitle>
                  </Card.HatWrapper>

                  <LeftPhoto.Title fontSize="small">
                    Idosa morre e 17 ficam feridos após suposto ataque terrorista e atropelamento
                  </LeftPhoto.Title>
                </LeftPhoto.TextWrapper>
              </LeftPhoto.Flex>
            </LeftPhoto.Item>

            <LeftPhoto.Item>
              <LeftPhoto.Flex>
                <LeftPhoto.Figure format="landscape">
                  <img
                    src="//img.r7.com/images/hacker-28112023135934867?resize=113x65&crop=1499x862%200%2070&dimensions=113x65"
                    alt="Funcionários de empresas telefônicas ajudam criminosos a invadir contas"
                    width={113}
                    height={65}
                  />
                </LeftPhoto.Figure>

                <LeftPhoto.TextWrapper>
                  <Card.HatWrapper>
                    <Card.HatTitle>GOLPES VIRTUAIS</Card.HatTitle>
                  </Card.HatWrapper>

                  <LeftPhoto.Title fontSize="small">
                    Funcionários de empresas telefônicas ajudam criminosos a invadir contas
                  </LeftPhoto.Title>
                </LeftPhoto.TextWrapper>
              </LeftPhoto.Flex>
            </LeftPhoto.Item>

            <LeftPhoto.Item>
              <LeftPhoto.Flex>
                <LeftPhoto.Figure format="landscape">
                  <img
                    src="//img.r7.com/images/balanco-geral-15012024153157664?resize=113x65&crop=730x420%200%200&dimensions=113x65"
                    alt="Homem em situação de rua coloca fogo em vigilante de 60 anos"
                    width={113}
                    height={65}
                  />
                </LeftPhoto.Figure>

                <LeftPhoto.TextWrapper>
                  <Card.HatWrapper>
                    <Card.HatTitle>QUEIMADURAS DE TERCEIRO GRAU</Card.HatTitle>
                  </Card.HatWrapper>

                  <LeftPhoto.Title fontSize="small">
                    Homem em situação de rua coloca fogo em vigilante de 60 anos
                  </LeftPhoto.Title>
                </LeftPhoto.TextWrapper>
              </LeftPhoto.Flex>
            </LeftPhoto.Item>
          </LeftPhoto>

          <LeftPhoto>
            <LeftPhoto.Item>
              <LeftPhoto.Flex>
                <LeftPhoto.Figure format="landscape">
                  <img
                    src="//img.r7.com/images/alec-musser-300x195-15012024110603317?resize=113x65&crop=229x132%2033%200&dimensions=113x65"
                    alt="Alec Musser, ator de Gente Grande, morre aos 50 anos de causa misteriosa"
                    width={113}
                    height={113}
                  />
                </LeftPhoto.Figure>

                <LeftPhoto.TextWrapper>
                  <Card.HatWrapper>
                    <Card.HatTitle>LUTO</Card.HatTitle>
                  </Card.HatWrapper>

                  <LeftPhoto.Title fontSize="small">
                    Alec Musser, ator de Gente Grande, morre aos 50 anos de causa misteriosa
                  </LeftPhoto.Title>
                </LeftPhoto.TextWrapper>
              </LeftPhoto.Flex>
            </LeftPhoto.Item>

            <LeftPhoto.Item>
              <LeftPhoto.Flex>
                <LeftPhoto.Figure format="landscape">
                  <img
                    src="//img.r7.com/images/mulher-fica-quatro-dias-presa-em-ferragens-apos-acidente-de-carro-nos-eua-15012024152013488?resize=113x65&crop=517x297%200%2030&dimensions=113x65"
                    alt="Mulher fica quatro dias presa em ferragens após acidente de carro nos EUA"
                    width={113}
                    height={65}
                  />
                </LeftPhoto.Figure>

                <LeftPhoto.TextWrapper>
                  <Card.HatWrapper>
                    <Card.HatTitle>RESGATE DE HELICÓPTERO</Card.HatTitle>
                  </Card.HatWrapper>

                  <LeftPhoto.Title fontSize="small">
                    Mulher fica quatro dias presa em ferragens após acidente de carro nos EUA
                  </LeftPhoto.Title>
                </LeftPhoto.TextWrapper>
              </LeftPhoto.Flex>
            </LeftPhoto.Item>

            <LeftPhoto.Item>
              <LeftPhoto.Flex>
                <LeftPhoto.Figure format="landscape">
                  <img
                    src="//img.r7.com/images/r7-palmeiras-campeao-paulista-2023-1500-10042023175726716?resize=113x65&crop=1230x707%20110%200&dimensions=113x65"
                    alt="Conheça a história do estadual e saiba como ver os jogos na RECORD"
                    width={113}
                    height={65}
                  />
                </LeftPhoto.Figure>

                <LeftPhoto.TextWrapper>
                  <Card.HatWrapper>
                    <Card.HatTitle>PAULISTÃO 2024</Card.HatTitle>
                  </Card.HatWrapper>

                  <LeftPhoto.Title fontSize="small">
                    Conheça a história do estadual e saiba como ver os jogos na RECORD
                  </LeftPhoto.Title>
                </LeftPhoto.TextWrapper>
              </LeftPhoto.Flex>
            </LeftPhoto.Item>
          </LeftPhoto>

          <LeftPhoto>
            <LeftPhoto.Item>
              <LeftPhoto.Flex>
                <LeftPhoto.Figure format="landscape">
                  <img
                    src="//img.r7.com/images/saiba-quem-ganhou-um-vale-credito-de-r-3-mil-nesta-segunda-feira-15-15012024121135767?resize=113x65&crop=720x414%2054%200&dimensions=113x65"
                    alt="Saiba quem ganhou um Vale-Crédito de R$ 3 mil nesta segunda-feira (15)"
                    width={113}
                    height={65}
                  />
                </LeftPhoto.Figure>

                <LeftPhoto.TextWrapper>
                  <Card.HatWrapper>
                    <Card.HatTitle>MUNDO RECORD</Card.HatTitle>
                  </Card.HatWrapper>

                  <LeftPhoto.Title fontSize="small">
                    Saiba quem ganhou um Vale-Crédito de R$ 3 mil nesta segunda-feira (15)
                  </LeftPhoto.Title>
                </LeftPhoto.TextWrapper>
              </LeftPhoto.Flex>
            </LeftPhoto.Item>

            <LeftPhoto.Item>
              <LeftPhoto.Flex>
                <LeftPhoto.Figure format="landscape">
                  <img
                    src="//img.r7.com/images/lucas-lima-e-sandy-11102023130830167?resize=113x65&crop=369x212%2013%2025&dimensions=113x65"
                    alt=""
                    width={113}
                    height={113}
                  />
                </LeftPhoto.Figure>

                <LeftPhoto.TextWrapper>
                  <Card.HatWrapper>
                    <Card.HatTitle>FÉRIAS NOS EUA</Card.HatTitle>
                  </Card.HatWrapper>

                  <LeftPhoto.Title fontSize="small">
                    Lucas Lima rebate críticas por viajar com Sandy após fim do casamento
                  </LeftPhoto.Title>
                </LeftPhoto.TextWrapper>
              </LeftPhoto.Flex>
            </LeftPhoto.Item>

            <LeftPhoto.Item>
              <LeftPhoto.Flex>
                <LeftPhoto.Figure format="landscape">
                  <img
                    src="//img.r7.com/images/cantor-sertanejo-morto-15012024152628405?resize=113x65&crop=600x345%200%20109&dimensions=113x65"
                    alt="
                    Cantor sertanejo e esposa são encontrados mortos com marcas de tiros"
                    width={113}
                    height={65}
                  />
                </LeftPhoto.Figure>

                <LeftPhoto.TextWrapper>
                  <Card.HatWrapper>
                    <Card.HatTitle>ITAPEMA (SC)</Card.HatTitle>
                  </Card.HatWrapper>

                  <LeftPhoto.Title fontSize="small">
                    Cantor sertanejo e esposa são encontrados mortos com marcas de tiros
                  </LeftPhoto.Title>
                </LeftPhoto.TextWrapper>
              </LeftPhoto.Flex>
            </LeftPhoto.Item>
          </LeftPhoto>
        </Proportional.Three>

        <Proportional.Three>
          <LeftPhoto>
            <LeftPhoto.Item>
              <LeftPhoto.Flex>
                <LeftPhoto.Figure format="square">
                  <img
                    src="//img.r7.com/images/a-fazenda-15-18122023112106357?resize=113x113&amp;crop=220x220 231 21&amp;dimensions=113x113"
                    alt="Após reencontro com ex-peões, rolou discussão entre Jaquelline e Márcia Fu"
                    width={113}
                    height={113}
                  />
                </LeftPhoto.Figure>

                <LeftPhoto.TextWrapper>
                  <Card.HatWrapper>
                    <Card.HatTitle>Lavação de roupa suja</Card.HatTitle>
                  </Card.HatWrapper>

                  <LeftPhoto.Title fontSize="small">
                    Após reencontro com ex-peões, rolou discussão entre Jaquelline e Márcia Fu
                  </LeftPhoto.Title>
                </LeftPhoto.TextWrapper>
              </LeftPhoto.Flex>
            </LeftPhoto.Item>

            <LeftPhoto.Item>
              <LeftPhoto.Flex>
                <LeftPhoto.Figure format="square">
                  <img
                    src="//img.r7.com/images/tonzao-pede-ajuda-de-wl-para-concluir-as-funcoes-designadas-a-ele-a-fazenda-15-18122023103503365?resize=113x113&amp;crop=190x190 567 85&amp;dimensions=113x113"
                    alt="Pelo 13º ano seguido, 'Miguel' é 1º em ranking de nomes dados a bebês em 2023 "
                    width={113}
                    height={113}
                  />
                </LeftPhoto.Figure>

                <LeftPhoto.TextWrapper>
                  <Card.HatWrapper>
                    <Card.HatTitle>revezamento</Card.HatTitle>
                  </Card.HatWrapper>

                  <LeftPhoto.Title fontSize="small">
                    Tonzão pede ajuda a WL para concluir suas funções, André também se dispõe a
                    colaborar
                  </LeftPhoto.Title>
                </LeftPhoto.TextWrapper>
              </LeftPhoto.Flex>
            </LeftPhoto.Item>
          </LeftPhoto>

          <LeftPhoto>
            <LeftPhoto.Item>
              <LeftPhoto.Flex>
                <LeftPhoto.Figure format="square">
                  <img
                    src="//img.r7.com/images/a-fazenda-15-18122023141440913?resize=113x113&amp;crop=369x369 124 0&amp;dimensions=113x113"
                    alt="Depois de mudança de regra, geladeira mais barata custará ao menos R$ 4.000"
                    width={113}
                    height={113}
                  />
                </LeftPhoto.Figure>

                <LeftPhoto.TextWrapper>
                  <Card.HatWrapper>
                    <Card.HatTitle>entrevista</Card.HatTitle>
                  </Card.HatWrapper>

                  <LeftPhoto.Title fontSize="small">
                    'Foi amor e eu continuo muito apaixonado', confessa Cezar Black sobre Kally
                    Fonseca
                  </LeftPhoto.Title>
                </LeftPhoto.TextWrapper>
              </LeftPhoto.Flex>
            </LeftPhoto.Item>

            <LeftPhoto.Item>
              <LeftPhoto.Flex>
                <LeftPhoto.Figure format="square">
                  <img
                    src="//img.r7.com/images/tem-que-ser-forte-para-estar-aqui-afirma-lily-em-desabafo-com-tonzao-a-fazenda-15-18122023114100634?resize=113x113&amp;crop=430x430 139 0&amp;dimensions=113x113"
                    alt="'Tem que ser forte para estar aqui', afirma Lily em desabafo com Tonzão"
                    width={113}
                    height={113}
                  />
                </LeftPhoto.Figure>

                <LeftPhoto.TextWrapper>
                  <Card.HatWrapper>
                    <Card.HatTitle>especulação</Card.HatTitle>
                  </Card.HatWrapper>

                  <LeftPhoto.Title fontSize="small">
                    'Tem que ser forte para estar aqui', afirma Lily em desabafo com Tonzão
                  </LeftPhoto.Title>
                </LeftPhoto.TextWrapper>
              </LeftPhoto.Flex>
            </LeftPhoto.Item>
          </LeftPhoto>

          <LeftPhoto>
            <LeftPhoto.Item>
              <LeftPhoto.Flex>
                <LeftPhoto.Figure format="square">
                  <img
                    src="//img.r7.com/images/reacoes-17122023003710485?resize=113x113&amp;crop=420x420 57 0&amp;dimensions=113x113"
                    alt="Acompanhe 24 horas o cotidiano, as festas e as confusões dos peões no PlayPlus"
                    width={113}
                    height={113}
                  />
                </LeftPhoto.Figure>

                <LeftPhoto.TextWrapper>
                  <Card.HatWrapper>
                    <Card.HatTitle>A FAZENDA 15</Card.HatTitle>
                  </Card.HatWrapper>

                  <LeftPhoto.Title fontSize="small">
                    Acompanhe 24 horas o cotidiano, as festas e as confusões dos peões no PlayPlus
                  </LeftPhoto.Title>
                </LeftPhoto.TextWrapper>
              </LeftPhoto.Flex>
            </LeftPhoto.Item>

            <LeftPhoto.Item>
              <LeftPhoto.Flex>
                <LeftPhoto.Figure format="square">
                  <img
                    src="//img.r7.com/images/jaque-ensina-tonzao-a-tirar-leite-da-vaca-e-faz-trolagem-com-o-peao-a-fazenda-15-18122023082502918?resize=113x113&amp;crop=365x365 39 61&amp;dimensions=113x113"
                    alt="Jaquelline ensina Tonzão a tirar leite da vaca Mimosa, e faz trolagem com o peão"
                    width={113}
                    height={113}
                  />
                </LeftPhoto.Figure>

                <LeftPhoto.TextWrapper>
                  <Card.HatWrapper>
                    <Card.HatTitle>Atividades rurais</Card.HatTitle>
                  </Card.HatWrapper>

                  <LeftPhoto.Title fontSize="small">
                    Jaquelline ensina Tonzão a tirar leite da vaca Mimosa, e faz trolagem com o peão
                  </LeftPhoto.Title>
                </LeftPhoto.TextWrapper>
              </LeftPhoto.Flex>
            </LeftPhoto.Item>
          </LeftPhoto>
        </Proportional.Three>

        <Proportional.Four>
          <LeftPhoto>
            <LeftPhoto.Item>
              <LeftPhoto.Flex>
                <LeftPhoto.Figure format="square">
                  <img
                    src="//img.r7.com/images/jojo-todynho-14122023115232287?resize=113x113&amp;crop=334x334 343 35&amp;dimensions=113x113"
                    alt="Jojo alfineta quem pede dinheiro e não devolve: 'Não ajudo mais' (Reprodução/Instagram)"
                    width={113}
                    height={113}
                  />
                </LeftPhoto.Figure>

                <LeftPhoto.TextWrapper>
                  <Card.HatWrapper>
                    <Card.HatTitle>calote</Card.HatTitle>
                  </Card.HatWrapper>

                  <LeftPhoto.Title fontSize="small">
                    Jojo alfineta quem pede dinheiro e não devolve: 'Não ajudo mais'
                  </LeftPhoto.Title>
                </LeftPhoto.TextWrapper>
              </LeftPhoto.Flex>
            </LeftPhoto.Item>

            <LeftPhoto.Item>
              <LeftPhoto.Flex>
                <LeftPhoto.Figure format="square">
                  <img
                    src="//img.r7.com/images/crianca-boneca-abuso-infantil-estupro-de-vulneravel-28082020183342242?resize=113x113&amp;crop=426x426 100 0&amp;dimensions=113x113"
                    alt="Mãe e padrasto são condenados por tortura e estupro de criança de 1 ano"
                    width={113}
                    height={113}
                  />
                </LeftPhoto.Figure>

                <LeftPhoto.TextWrapper>
                  <Card.HatWrapper>
                    <Card.HatTitle>São Paulo</Card.HatTitle>
                  </Card.HatWrapper>

                  <LeftPhoto.Title fontSize="small">
                    Mãe e padrasto são condenados por tortura e estupro de criança de 1 ano
                  </LeftPhoto.Title>
                </LeftPhoto.TextWrapper>
              </LeftPhoto.Flex>
            </LeftPhoto.Item>
          </LeftPhoto>

          <LeftPhoto>
            <LeftPhoto.Item>
              <LeftPhoto.Flex>
                <LeftPhoto.Figure format="square">
                  <img
                    src="//img.r7.com/images/fgts-celular-carteira-digital-10092023170643481?resize=113x113&amp;crop=1054x1054 0 0&amp;dimensions=113x113"
                    alt="FGTS vai começar a ser pago com Pix a partir de 1º de março"
                    width={113}
                    height={113}
                  />
                </LeftPhoto.Figure>

                <LeftPhoto.TextWrapper>
                  <Card.HatWrapper>
                    <Card.HatTitle>digitalização</Card.HatTitle>
                  </Card.HatWrapper>

                  <LeftPhoto.Title fontSize="small">
                    FGTS vai começar a ser pago com Pix a partir de 1º de março
                  </LeftPhoto.Title>
                </LeftPhoto.TextWrapper>
              </LeftPhoto.Flex>
            </LeftPhoto.Item>

            <LeftPhoto.Item>
              <LeftPhoto.Flex>
                <LeftPhoto.Figure format="square">
                  <img
                    src="//img.r7.com/images/bella-angel-exibe-resultado-de-cirurgias-14122023172503888?resize=113x113&crop=368x368 15 5&dimensions=113x113"
                    alt="Irmã de MC Melody rebate críticas após exibir resultado de plásticas"
                    width={113}
                    height={113}
                  />
                </LeftPhoto.Figure>

                <LeftPhoto.TextWrapper>
                  <Card.HatWrapper>
                    <Card.HatTitle>'Muito feliz'</Card.HatTitle>
                  </Card.HatWrapper>

                  <LeftPhoto.Title fontSize="small">
                    Irmã de MC Melody rebate críticas após exibir resultado de plásticas
                  </LeftPhoto.Title>
                </LeftPhoto.TextWrapper>
              </LeftPhoto.Flex>
            </LeftPhoto.Item>
          </LeftPhoto>

          <LeftPhoto>
            <LeftPhoto.Item>
              <LeftPhoto.Flex>
                <LeftPhoto.Figure format="square">
                  <img
                    src="//img.r7.com/images/apagao-sao-paulo-14122023170723421?resize=113x113&amp;crop=842x842 658 0&amp;dimensions=113x113"
                    alt="SP: relatório da CPI da Enel aponta irregularidades e negligência"
                    width={113}
                    height={113}
                  />
                </LeftPhoto.Figure>

                <LeftPhoto.TextWrapper>
                  <Card.HatWrapper>
                    <Card.HatTitle>assembleia legislativa</Card.HatTitle>
                  </Card.HatWrapper>

                  <LeftPhoto.Title fontSize="small">
                    SP: relatório da CPI da Enel aponta irregularidades e negligência
                  </LeftPhoto.Title>
                </LeftPhoto.TextWrapper>
              </LeftPhoto.Flex>
            </LeftPhoto.Item>

            <LeftPhoto.Item>
              <LeftPhoto.Flex>
                <LeftPhoto.Figure format="square">
                  <img
                    src="//img.r7.com/images/saiba-como-contribuir-para-a-causa-da-abads-13122023160743843?resize=113x113&amp;crop=480x480 141 0&amp;dimensions=113x113"
                    alt="Saiba como ajudar crianças e adolescentes com deficiência intelectual"
                    width={113}
                    height={113}
                  />
                </LeftPhoto.Figure>

                <LeftPhoto.TextWrapper>
                  <Card.HatWrapper>
                    <Card.HatTitle>faça sua doação à abads</Card.HatTitle>
                  </Card.HatWrapper>

                  <LeftPhoto.Title fontSize="small">
                    Saiba como ajudar crianças e adolescentes com deficiência intelectual
                  </LeftPhoto.Title>
                </LeftPhoto.TextWrapper>
              </LeftPhoto.Flex>
            </LeftPhoto.Item>
          </LeftPhoto>

          <LeftPhoto>
            <LeftPhoto.Item>
              <LeftPhoto.Flex>
                <LeftPhoto.Figure format="square">
                  <img
                    src="//img.r7.com/images/casalaje-15012024124503432?resize=113x113&crop=1200x1200 0 0&dimensions=113x113"
                    alt="Construção em que laje caiu sobre duas crianças estava irregular"
                    width={113}
                    height={113}
                  />
                </LeftPhoto.Figure>

                <LeftPhoto.TextWrapper>
                  <Card.HatWrapper>
                    <Card.HatTitle>FOZ DO IGUAÇU (PR)</Card.HatTitle>
                  </Card.HatWrapper>

                  <LeftPhoto.Title fontSize="small">
                    Construção em que laje caiu sobre duas crianças estava irregular
                  </LeftPhoto.Title>
                </LeftPhoto.TextWrapper>
              </LeftPhoto.Flex>
            </LeftPhoto.Item>

            <LeftPhoto.Item>
              <LeftPhoto.Flex>
                <LeftPhoto.Figure format="square">
                  <img
                    src="//img.r7.com/images/presidente-da-ucrania-volodmir-zelenski-afp-19052023081621179?resize=113x113&crop=689x689 228 0&dimensions=113x113"
                    alt="Ucrânia afirma ter derrubado principal aeronave-radar da Rússia"
                    width={113}
                    height={113}
                  />
                </LeftPhoto.Figure>

                <LeftPhoto.TextWrapper>
                  <Card.HatWrapper>
                    <Card.HatTitle>AVIÃO VALIOSO</Card.HatTitle>
                  </Card.HatWrapper>

                  <LeftPhoto.Title fontSize="small">
                    Ucrânia afirma ter derrubado principal aeronave-radar da Rússia
                  </LeftPhoto.Title>
                </LeftPhoto.TextWrapper>
              </LeftPhoto.Flex>
            </LeftPhoto.Item>
          </LeftPhoto>
        </Proportional.Four>

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
                  <LeftPhoto>
                    <LeftPhoto.Item>
                      <LeftPhoto.Flex>
                        <LeftPhoto.Figure format="square">
                          <img
                            src="//img.r7.com/images/carol-castro-e-o-pai-18122023104242886?resize=113x113&amp;crop=1080x1080 0 0&amp;dimensions=113x113"
                            alt="Carol Castro lamenta nas redes sociais a morte do pai, Luca Castro"
                            width={113}
                            height={113}
                          />
                        </LeftPhoto.Figure>

                        <LeftPhoto.TextWrapper>
                          <Card.HatWrapper>
                            <Card.HatTitle>'Nossa última foto juntos'</Card.HatTitle>
                          </Card.HatWrapper>

                          <LeftPhoto.Title fontSize="small">
                            Carol Castro lamenta nas redes sociais a morte do pai, Luca Castro
                          </LeftPhoto.Title>
                        </LeftPhoto.TextWrapper>
                      </LeftPhoto.Flex>
                    </LeftPhoto.Item>

                    <LeftPhoto.Item>
                      <LeftPhoto.Flex>
                        <LeftPhoto.Figure format="square">
                          <img
                            src="//img.r7.com/images/screenshot4-7-18122023115432179?resize=113x113&amp;crop=675x675 223 0&amp;dimensions=113x113"
                            alt="Kelly Key diz que abandonou a carreira na música: 'Sufocante'"
                            width={113}
                            height={113}
                          />
                        </LeftPhoto.Figure>

                        <LeftPhoto.TextWrapper>
                          <Card.HatWrapper>
                            <Card.HatTitle>reflexão</Card.HatTitle>
                          </Card.HatWrapper>

                          <LeftPhoto.Title fontSize="small">
                            Kelly Key diz que abandonou a carreira na música: 'Sufocante'
                          </LeftPhoto.Title>
                        </LeftPhoto.TextWrapper>
                      </LeftPhoto.Flex>
                    </LeftPhoto.Item>
                  </LeftPhoto>

                  <LeftPhoto>
                    <LeftPhoto.Item>
                      <LeftPhoto.Flex>
                        <LeftPhoto.Figure format="square">
                          <img
                            src="//img.r7.com/images/confira-os-vencedores-do-oscar-dos-videogames-18122023124035329?resize=113x113&amp;crop=241x241 85 0&amp;dimensions=113x113"
                            alt="Confira quem são os vencedores do 'Oscar' dos videogames"
                            width={113}
                            height={113}
                          />
                        </LeftPhoto.Figure>

                        <LeftPhoto.TextWrapper>
                          <Card.HatWrapper>
                            <Card.HatTitle>CONTEÚDO PATROCINADO</Card.HatTitle>
                          </Card.HatWrapper>

                          <LeftPhoto.Title fontSize="small">
                            Confira quem são os vencedores do 'Oscar' dos videogames
                          </LeftPhoto.Title>
                        </LeftPhoto.TextWrapper>
                      </LeftPhoto.Flex>
                    </LeftPhoto.Item>

                    <LeftPhoto.Item>
                      <LeftPhoto.Flex>
                        <LeftPhoto.Figure format="square">
                          <img
                            src="//img.r7.com/images/shakira-29112023141942291?resize=113x113&amp;crop=222x222 0 0&amp;dimensions=113x113"
                            alt="Shakira fez 'da geleia um sanduíche' e transformou traição em hits"
                            width={113}
                            height={113}
                          />
                        </LeftPhoto.Figure>

                        <LeftPhoto.TextWrapper>
                          <Card.HatWrapper>
                            <Card.HatTitle>em 2023</Card.HatTitle>
                          </Card.HatWrapper>

                          <LeftPhoto.Title fontSize="small">
                            Shakira fez 'da geleia um sanduíche' e transformou traição em hits
                          </LeftPhoto.Title>
                        </LeftPhoto.TextWrapper>
                      </LeftPhoto.Flex>
                    </LeftPhoto.Item>
                  </LeftPhoto>

                  <SmallMainBlock />
                </>
              }
            />
          }
          renderSidebar={<SidebarBlock />}
        />
      </SectionWrapper>
    </Container>
  )
}
