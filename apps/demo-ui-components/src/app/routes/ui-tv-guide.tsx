import '@r7/ui-tv-guide/css'
import '@r7/ui-article-delivery/css'
import '@r7/ui-layout/css'
import { Container } from '@r7/ui-layout'
import { TvGuide, TvGuideHighlight, TvGuidePrograms, TvGuideSelect } from '@r7/ui-tv-guide'
import { SocialShare } from '@r7/ui-article-delivery'
import { ConditionalLink, Typography } from '@r7/ui-base-components'

export function UiTvGuide() {
  // const TestBlock = () => (
  //   <div className="bg-neutral-low-400 items-center justify-center flex h-full">Block</div>
  // )

  return (
    <Container>
      <TvGuide>
        <TvGuideHighlight>
          <TvGuideHighlight.Live>
            <ConditionalLink href="#">
              <TvGuide.Figure>
                <img
                  src="//img.r7.com/images/larissa-manoela-e-andre-luiz-frambach-posam-com-os-cachorros-no-casamento-19122023163515181"
                  alt="alt"
                />
              </TvGuide.Figure>
            </ConditionalLink>
          </TvGuideHighlight.Live>
          <TvGuideHighlight.Next>
            <TvGuide.Card>
              <TvGuide.Figure>
                <img
                  src="//img.r7.com/images/larissa-manoela-e-andre-luiz-frambach-posam-com-os-cachorros-no-casamento-19122023163515181"
                  alt="alt"
                  width={150}
                  height={82}
                />
              </TvGuide.Figure>
              <Typography fontWeight="bold" className="uppercase">
                A Seguir
              </Typography>
              <Typography>icones Programa a seguir</Typography>
              <TvGuide.Time datetime="00:00">00:00</TvGuide.Time>
            </TvGuide.Card>
            <TvGuide.Card>
              <TvGuide.Figure>
                <img
                  src="//img.r7.com/images/larissa-manoela-e-andre-luiz-frambach-posam-com-os-cachorros-no-casamento-19122023163515181"
                  alt="alt"
                  width={150}
                  height={82}
                />
              </TvGuide.Figure>
              <Typography fontWeight="bold" className="uppercase">
                Depois
              </Typography>
              <Typography>icones Programa depois</Typography>
              <TvGuide.Time datetime="00:00">00:00</TvGuide.Time>
            </TvGuide.Card>
          </TvGuideHighlight.Next>
        </TvGuideHighlight>

        <TvGuideSelect onChange={console.log}>
          <TvGuideSelect.Option value={1}>esportes</TvGuideSelect.Option>
          <TvGuideSelect.Option value={2}>entretenimento</TvGuideSelect.Option>
          <TvGuideSelect.Option value={3}>politica</TvGuideSelect.Option>
          <TvGuideSelect.Option value={4}>covid</TvGuideSelect.Option>
        </TvGuideSelect>

        <TvGuidePrograms>
          <TvGuidePrograms.WeekList>
            <TvGuidePrograms.WeekDay id="segunda">segunda</TvGuidePrograms.WeekDay>
            <TvGuidePrograms.WeekDay id="terca">terça</TvGuidePrograms.WeekDay>
            <TvGuidePrograms.WeekDay id="quarta">quarta</TvGuidePrograms.WeekDay>
            <TvGuidePrograms.WeekDay id="quinta">quinta</TvGuidePrograms.WeekDay>
            <TvGuidePrograms.WeekDay id="sexta">sexta</TvGuidePrograms.WeekDay>
            <TvGuidePrograms.WeekDay id="sabado">sábado</TvGuidePrograms.WeekDay>
            <TvGuidePrograms.WeekDay id="domingo">domingo</TvGuidePrograms.WeekDay>
          </TvGuidePrograms.WeekList>
          <TvGuidePrograms.EventsList id="segunda">
            <TvGuidePrograms.EventItem>
              <TvGuide.Time datetime="00:00" hiddenOnMobile>
                00:00
              </TvGuide.Time>
              <TvGuide.Card>
                <TvGuide.Figure>
                  <img
                    src="//img.r7.com/images/larissa-manoela-e-andre-luiz-frambach-posam-com-os-cachorros-no-casamento-19122023163515181"
                    alt="alt"
                    width={150}
                    height={82}
                  />
                </TvGuide.Figure>
                programa segunda 1
              </TvGuide.Card>
              <TvGuidePrograms.EventDescription>
                <p>descricao</p>
                <a href="#asd">link</a>
                <SocialShare>
                  <SocialShare.List>
                    <SocialShare.Item name="facebook" link="#" />
                  </SocialShare.List>
                </SocialShare>
              </TvGuidePrograms.EventDescription>
            </TvGuidePrograms.EventItem>
            <TvGuidePrograms.EventItem>
              programa segunda 2
              <TvGuidePrograms.EventDescription>
                descricao escondida
              </TvGuidePrograms.EventDescription>
            </TvGuidePrograms.EventItem>
            <TvGuidePrograms.EventItem>
              programa segunda 3
              <TvGuidePrograms.EventDescription>
                descricao escondida
              </TvGuidePrograms.EventDescription>
            </TvGuidePrograms.EventItem>
          </TvGuidePrograms.EventsList>
          <TvGuidePrograms.EventsList id="terca">
            <TvGuidePrograms.EventItem>
              programa terça 1
              <TvGuidePrograms.EventDescription>
                descricao escondida
              </TvGuidePrograms.EventDescription>
            </TvGuidePrograms.EventItem>
            <TvGuidePrograms.EventItem isLive>
              programa terça 2
              <TvGuidePrograms.EventDescription>
                descricao escondida
              </TvGuidePrograms.EventDescription>
            </TvGuidePrograms.EventItem>
            <TvGuidePrograms.EventItem>
              programa terça 3
              <TvGuidePrograms.EventDescription>
                descricao escondida
              </TvGuidePrograms.EventDescription>
            </TvGuidePrograms.EventItem>
          </TvGuidePrograms.EventsList>
          <TvGuidePrograms.EventsList id="quarta">
            <TvGuidePrograms.EventItem>
              <TvGuide.Time datetime="00:00" hiddenOnMobile>
                00:00
              </TvGuide.Time>
              <p>programa quarta 1</p>
              <TvGuidePrograms.EventDescription>
                descricao escondida
              </TvGuidePrograms.EventDescription>
            </TvGuidePrograms.EventItem>
            <TvGuidePrograms.EventItem>
              programa quarta 2
              <TvGuidePrograms.EventDescription>
                descricao escondida
              </TvGuidePrograms.EventDescription>
            </TvGuidePrograms.EventItem>
            <TvGuidePrograms.EventItem>
              programa quarta 3
              <TvGuidePrograms.EventDescription>
                descricao escondida
              </TvGuidePrograms.EventDescription>
            </TvGuidePrograms.EventItem>
          </TvGuidePrograms.EventsList>
          <TvGuidePrograms.EventsList id="quinta">
            <TvGuidePrograms.EventItem>
              programa quinta 1
              <TvGuidePrograms.EventDescription>
                descricao escondida
              </TvGuidePrograms.EventDescription>
            </TvGuidePrograms.EventItem>
            <TvGuidePrograms.EventItem>
              programa quinta 2
              <TvGuidePrograms.EventDescription>
                descricao escondida
              </TvGuidePrograms.EventDescription>
            </TvGuidePrograms.EventItem>
            <TvGuidePrograms.EventItem>
              programa quinta 3
              <TvGuidePrograms.EventDescription>
                descricao escondida
              </TvGuidePrograms.EventDescription>
            </TvGuidePrograms.EventItem>
          </TvGuidePrograms.EventsList>
          <TvGuidePrograms.EventsList id="sexta">
            <TvGuidePrograms.EventItem>
              programa sexta 1
              <TvGuidePrograms.EventDescription>
                descricao escondida
              </TvGuidePrograms.EventDescription>
            </TvGuidePrograms.EventItem>
            <TvGuidePrograms.EventItem>
              programa sexta 2
              <TvGuidePrograms.EventDescription>
                descricao escondida
              </TvGuidePrograms.EventDescription>
            </TvGuidePrograms.EventItem>
            <TvGuidePrograms.EventItem>
              programa sexta 3
              <TvGuidePrograms.EventDescription>
                descricao escondida
              </TvGuidePrograms.EventDescription>
            </TvGuidePrograms.EventItem>
          </TvGuidePrograms.EventsList>
          <TvGuidePrograms.EventsList id="sabado">
            <TvGuidePrograms.EventItem>
              programa sabado 1
              <TvGuidePrograms.EventDescription>
                descricao escondida
              </TvGuidePrograms.EventDescription>
            </TvGuidePrograms.EventItem>
            <TvGuidePrograms.EventItem>
              programa sabado 2
              <TvGuidePrograms.EventDescription>
                descricao escondida
              </TvGuidePrograms.EventDescription>
            </TvGuidePrograms.EventItem>
            <TvGuidePrograms.EventItem>
              programa sabado 3
              <TvGuidePrograms.EventDescription>
                descricao escondida
              </TvGuidePrograms.EventDescription>
            </TvGuidePrograms.EventItem>
          </TvGuidePrograms.EventsList>
          <TvGuidePrograms.EventsList id="domingo">
            <TvGuidePrograms.EventItem>
              programa domingo 1
              <TvGuidePrograms.EventDescription>
                descricao escondida
              </TvGuidePrograms.EventDescription>
            </TvGuidePrograms.EventItem>
            <TvGuidePrograms.EventItem>
              programa domingo 2
              <TvGuidePrograms.EventDescription>
                descricao escondida
              </TvGuidePrograms.EventDescription>
            </TvGuidePrograms.EventItem>
            <TvGuidePrograms.EventItem>
              programa domingo 3
              <TvGuidePrograms.EventDescription>
                descricao escondida
              </TvGuidePrograms.EventDescription>
            </TvGuidePrograms.EventItem>
          </TvGuidePrograms.EventsList>
        </TvGuidePrograms>
      </TvGuide>
    </Container>
  )
}
