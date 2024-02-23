import { SocialShare } from '@r7/ui-article-delivery'
import { ConditionalLink, Typography } from '@r7/ui-base-components'
import { Container } from '@r7/ui-layout'
import { TvGuide, TvGuideHighlight, TvGuidePrograms, TvGuideSelect } from './index'

const UiTvGuide = () => (
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
          <ConditionalLink href="#">
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
              <Typography>
                <TvGuide.Rating rating="L">l</TvGuide.Rating>
                <TvGuide.AudioDescription />
                <TvGuide.ClosedCaption />
                <TvGuide.HighDefinition />
                Programa a seguir
              </Typography>
              <TvGuide.Time datetime="00:00">00:00</TvGuide.Time>
            </TvGuide.Card>
          </ConditionalLink>

          <ConditionalLink href="#">
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
              <Typography>
                <TvGuide.Rating rating={'16'}>16</TvGuide.Rating>
                <TvGuide.ClosedCaption />
                <TvGuide.HighDefinition />
                Programa depois
              </Typography>
              <TvGuide.Time datetime="00:00">00:00</TvGuide.Time>
            </TvGuide.Card>
          </ConditionalLink>
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
              00h00
            </TvGuide.Time>
            <TvGuide.Card>
              <TvGuide.Figure>
                <img
                  src="//img.r7.com/images/larissa-manoela-e-andre-luiz-frambach-posam-com-os-cachorros-no-casamento-19122023163515181?dimensions=150x82"
                  alt="alt"
                  width={150}
                  height={82}
                />
              </TvGuide.Figure>
              <Typography>
                <TvGuide.Rating rating={'16'}>16</TvGuide.Rating>
                <TvGuide.ClosedCaption />
                <TvGuide.HighDefinition />
                programa segunda 1
              </Typography>
              <Typography>
                <TvGuide.Time datetime="00:00">00h00 -</TvGuide.Time>
                <TvGuide.Time datetime="01:00">01h00</TvGuide.Time>
              </Typography>
            </TvGuide.Card>
            <TvGuide.Button href="#">integra</TvGuide.Button>
            <TvGuide.Button href="#" color="tertiary">
              assista a chamada
            </TvGuide.Button>
            <TvGuidePrograms.EventDescription>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius libero similique
                adipisci quo, ut sequi ad dicta non voluptatem eum dolorem iure, perspiciatis nemo
                saepe facere at, provident harum fuga!
              </p>
              <a href="#asd">acesse o site do programa</a>
              <SocialShare>
                <SocialShare.List>
                  <SocialShare.Item name="facebook" link="#" />
                  <SocialShare.Item name="googleNews" link="#" />
                  <SocialShare.Item name="linkedin" link="#" />
                  <SocialShare.Item name="twitter" link="#" />
                  <SocialShare.Item name="whatsapp" link="#" />
                </SocialShare.List>
              </SocialShare>
            </TvGuidePrograms.EventDescription>
          </TvGuidePrograms.EventItem>

          <TvGuidePrograms.EventItem>
            <TvGuide.Time datetime="01:00" hiddenOnMobile>
              01h00
            </TvGuide.Time>
            <TvGuide.Card>
              <TvGuide.Figure>
                <img
                  src="//img.r7.com/images/larissa-manoela-e-andre-luiz-frambach-posam-com-os-cachorros-no-casamento-19122023163515181?dimensions=150x82"
                  alt="alt"
                  width={150}
                  height={82}
                />
              </TvGuide.Figure>
              <Typography>
                <TvGuide.Rating rating={'L'}>L</TvGuide.Rating>
                <TvGuide.AudioDescription />
                <TvGuide.HighDefinition />
                programa segunda 2
              </Typography>
              <Typography>
                <TvGuide.Time datetime="01:00">01h00 -</TvGuide.Time>
                <TvGuide.Time datetime="02:00">02h00</TvGuide.Time>
              </Typography>
            </TvGuide.Card>
            <TvGuide.Button href="#" color="tertiary">
              assista a chamada
            </TvGuide.Button>
            <TvGuidePrograms.EventDescription>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius libero similique
                adipisci quo, ut sequi ad dicta non voluptatem eum dolorem iure, perspiciatis nemo
                saepe facere at, provident harum fuga!
              </p>
              <a href="#asd">acesse o site do programa</a>
              <SocialShare>
                <SocialShare.List>
                  <SocialShare.Item name="facebook" link="#" />
                  <SocialShare.Item name="googleNews" link="#" />
                  <SocialShare.Item name="linkedin" link="#" />
                  <SocialShare.Item name="twitter" link="#" />
                  <SocialShare.Item name="whatsapp" link="#" />
                </SocialShare.List>
              </SocialShare>
            </TvGuidePrograms.EventDescription>
          </TvGuidePrograms.EventItem>

          <TvGuidePrograms.EventItem>
            <TvGuide.Time datetime="02:00" hiddenOnMobile>
              02h00
            </TvGuide.Time>
            <TvGuide.Card>
              <TvGuide.Figure>
                <img
                  src="//img.r7.com/images/larissa-manoela-e-andre-luiz-frambach-posam-com-os-cachorros-no-casamento-19122023163515181?dimensions=150x82"
                  alt="alt"
                  width={150}
                  height={82}
                />
              </TvGuide.Figure>
              <Typography>
                <TvGuide.Rating rating={'a10'}>a10</TvGuide.Rating>
                <TvGuide.ClosedCaption />
                <TvGuide.HighDefinition />
                programa segunda 3
              </Typography>
              <Typography>
                <TvGuide.Time datetime="00:00">02h00 -</TvGuide.Time>
                <TvGuide.Time datetime="01:00">03h00</TvGuide.Time>
              </Typography>
            </TvGuide.Card>
            <TvGuide.Button>integra</TvGuide.Button>
            <TvGuidePrograms.EventDescription>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius libero similique
                adipisci quo, ut sequi ad dicta non voluptatem eum dolorem iure, perspiciatis nemo
                saepe facere at, provident harum fuga!
              </p>
              <a href="#asd">acesse o site do programa</a>
              <SocialShare>
                <SocialShare.List>
                  <SocialShare.Item name="facebook" link="#" />
                  <SocialShare.Item name="googleNews" link="#" />
                  <SocialShare.Item name="linkedin" link="#" />
                  <SocialShare.Item name="twitter" link="#" />
                  <SocialShare.Item name="whatsapp" link="#" />
                </SocialShare.List>
              </SocialShare>
            </TvGuidePrograms.EventDescription>
          </TvGuidePrograms.EventItem>
        </TvGuidePrograms.EventsList>

        <TvGuidePrograms.EventsList id="terca">
          <TvGuidePrograms.EventItem>
            <TvGuide.Time datetime="00:00" hiddenOnMobile>
              00h00
            </TvGuide.Time>
            <TvGuide.Card>
              <TvGuide.Figure>
                <img
                  src="//img.r7.com/images/karoline-lima-e-leo-pereira-18012024125506526?dimensions=150x82"
                  alt="alt"
                  width={150}
                  height={82}
                />
              </TvGuide.Figure>
              <Typography>
                <TvGuide.Rating rating={'a12'}>a12</TvGuide.Rating>
                <TvGuide.ClosedCaption />
                <TvGuide.HighDefinition />
                programa terça 1
              </Typography>
              <Typography>
                <TvGuide.Time datetime="00:00">00h00 -</TvGuide.Time>
                <TvGuide.Time datetime="01:00">01h00</TvGuide.Time>
              </Typography>
            </TvGuide.Card>
            <TvGuide.Button href="#">integra</TvGuide.Button>
            <TvGuide.Button href="#" color="tertiary">
              assista a chamada
            </TvGuide.Button>
            <TvGuidePrograms.EventDescription>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius libero similique
                adipisci quo, ut sequi ad dicta non voluptatem eum dolorem iure, perspiciatis nemo
                saepe facere at, provident harum fuga!
              </p>
              <a href="#asd">acesse o site do programa</a>
              <SocialShare>
                <SocialShare.List>
                  <SocialShare.Item name="facebook" link="#" />
                  <SocialShare.Item name="googleNews" link="#" />
                  <SocialShare.Item name="linkedin" link="#" />
                  <SocialShare.Item name="twitter" link="#" />
                  <SocialShare.Item name="whatsapp" link="#" />
                </SocialShare.List>
              </SocialShare>
            </TvGuidePrograms.EventDescription>
          </TvGuidePrograms.EventItem>

          <TvGuidePrograms.EventItem>
            <TvGuide.Time datetime="01:00" hiddenOnMobile>
              01h00
            </TvGuide.Time>
            <TvGuide.Card>
              <TvGuide.Figure>
                <img
                  src="//img.r7.com/images/karoline-lima-e-leo-pereira-18012024125506526?dimensions=150x82"
                  alt="alt"
                  width={150}
                  height={82}
                />
              </TvGuide.Figure>
              <Typography>
                <TvGuide.Rating rating={'a14'}>a14</TvGuide.Rating>
                <TvGuide.AudioDescription />
                <TvGuide.HighDefinition />
                programa terça 2
              </Typography>
              <Typography>
                <TvGuide.Time datetime="01:00">01h00 -</TvGuide.Time>
                <TvGuide.Time datetime="02:00">02h00</TvGuide.Time>
              </Typography>
            </TvGuide.Card>
            <TvGuide.Button href="#" color="tertiary">
              assista a chamada
            </TvGuide.Button>
            <TvGuidePrograms.EventDescription>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius libero similique
                adipisci quo, ut sequi ad dicta non voluptatem eum dolorem iure, perspiciatis nemo
                saepe facere at, provident harum fuga!
              </p>
              <a href="#asd">acesse o site do programa</a>
              <SocialShare>
                <SocialShare.List>
                  <SocialShare.Item name="facebook" link="#" />
                  <SocialShare.Item name="googleNews" link="#" />
                  <SocialShare.Item name="linkedin" link="#" />
                  <SocialShare.Item name="twitter" link="#" />
                  <SocialShare.Item name="whatsapp" link="#" />
                </SocialShare.List>
              </SocialShare>
            </TvGuidePrograms.EventDescription>
          </TvGuidePrograms.EventItem>

          <TvGuidePrograms.EventItem>
            <TvGuide.Time datetime="02:00" hiddenOnMobile>
              02h00
            </TvGuide.Time>
            <TvGuide.Card>
              <TvGuide.Figure>
                <img
                  src="//img.r7.com/images/karoline-lima-e-leo-pereira-18012024125506526?dimensions=150x82"
                  alt="alt"
                  width={150}
                  height={82}
                />
              </TvGuide.Figure>
              <Typography>
                <TvGuide.Rating rating={'a16'}>a16</TvGuide.Rating>
                <TvGuide.ClosedCaption />
                <TvGuide.HighDefinition />
                programa terça 3
              </Typography>
              <Typography>
                <TvGuide.Time datetime="00:00">02h00 -</TvGuide.Time>
                <TvGuide.Time datetime="01:00">03h00</TvGuide.Time>
              </Typography>
            </TvGuide.Card>
            <TvGuide.Button>integra</TvGuide.Button>
            <TvGuidePrograms.EventDescription>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius libero similique
                adipisci quo, ut sequi ad dicta non voluptatem eum dolorem iure, perspiciatis nemo
                saepe facere at, provident harum fuga!
              </p>
              <a href="#asd">acesse o site do programa</a>
              <SocialShare>
                <SocialShare.List>
                  <SocialShare.Item name="facebook" link="#" />
                  <SocialShare.Item name="googleNews" link="#" />
                  <SocialShare.Item name="linkedin" link="#" />
                  <SocialShare.Item name="twitter" link="#" />
                  <SocialShare.Item name="whatsapp" link="#" />
                </SocialShare.List>
              </SocialShare>
            </TvGuidePrograms.EventDescription>
          </TvGuidePrograms.EventItem>
        </TvGuidePrograms.EventsList>

        <TvGuidePrograms.EventsList id="quarta">
          <TvGuidePrograms.EventItem>
            <TvGuide.Time datetime="00:00" hiddenOnMobile>
              00h00
            </TvGuide.Time>
            <TvGuide.Card>
              <TvGuide.Figure>
                <img
                  src="//img.r7.com/images/maiara-quiderolly-e-jo-25032023102338463?dimensions=150x82"
                  alt="alt"
                  width={150}
                  height={82}
                />
              </TvGuide.Figure>
              <Typography>
                <TvGuide.Rating rating={'a18'}>a18</TvGuide.Rating>
                <TvGuide.ClosedCaption />
                <TvGuide.HighDefinition />
                programa quarta 1
              </Typography>
              <Typography>
                <TvGuide.Time datetime="00:00">00h00 -</TvGuide.Time>
                <TvGuide.Time datetime="01:00">01h00</TvGuide.Time>
              </Typography>
            </TvGuide.Card>
            <TvGuide.Button href="#">integra</TvGuide.Button>
            <TvGuide.Button href="#" color="tertiary">
              assista a chamada
            </TvGuide.Button>
            <TvGuidePrograms.EventDescription>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius libero similique
                adipisci quo, ut sequi ad dicta non voluptatem eum dolorem iure, perspiciatis nemo
                saepe facere at, provident harum fuga!
              </p>
              <a href="#asd">acesse o site do programa</a>
              <SocialShare>
                <SocialShare.List>
                  <SocialShare.Item name="facebook" link="#" />
                  <SocialShare.Item name="googleNews" link="#" />
                  <SocialShare.Item name="linkedin" link="#" />
                  <SocialShare.Item name="twitter" link="#" />
                  <SocialShare.Item name="whatsapp" link="#" />
                </SocialShare.List>
              </SocialShare>
            </TvGuidePrograms.EventDescription>
          </TvGuidePrograms.EventItem>

          <TvGuidePrograms.EventItem>
            <TvGuide.Time datetime="01:00" hiddenOnMobile>
              01h00
            </TvGuide.Time>
            <TvGuide.Card>
              <TvGuide.Figure>
                <img
                  src="//img.r7.com/images/maiara-quiderolly-e-jo-25032023102338463?dimensions=150x82"
                  alt="alt"
                  width={150}
                  height={82}
                />
              </TvGuide.Figure>
              <Typography>
                <TvGuide.Rating rating={'10'}>10</TvGuide.Rating>
                <TvGuide.AudioDescription />
                <TvGuide.HighDefinition />
                programa quarta 2
              </Typography>
              <Typography>
                <TvGuide.Time datetime="01:00">01h00 -</TvGuide.Time>
                <TvGuide.Time datetime="02:00">02h00</TvGuide.Time>
              </Typography>
            </TvGuide.Card>
            <TvGuide.Button href="#" color="tertiary">
              assista a chamada
            </TvGuide.Button>
            <TvGuidePrograms.EventDescription>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius libero similique
                adipisci quo, ut sequi ad dicta non voluptatem eum dolorem iure, perspiciatis nemo
                saepe facere at, provident harum fuga!
              </p>
              <a href="#asd">acesse o site do programa</a>
              <SocialShare>
                <SocialShare.List>
                  <SocialShare.Item name="facebook" link="#" />
                  <SocialShare.Item name="googleNews" link="#" />
                  <SocialShare.Item name="linkedin" link="#" />
                  <SocialShare.Item name="twitter" link="#" />
                  <SocialShare.Item name="whatsapp" link="#" />
                </SocialShare.List>
              </SocialShare>
            </TvGuidePrograms.EventDescription>
          </TvGuidePrograms.EventItem>

          <TvGuidePrograms.EventItem>
            <TvGuide.Time datetime="02:00" hiddenOnMobile>
              02h00
            </TvGuide.Time>
            <TvGuide.Card>
              <TvGuide.Figure>
                <img
                  src="//img.r7.com/images/maiara-quiderolly-e-jo-25032023102338463?dimensions=150x82"
                  alt="alt"
                  width={150}
                  height={82}
                />
              </TvGuide.Figure>
              <Typography>
                <TvGuide.Rating rating={'12'}>12</TvGuide.Rating>
                <TvGuide.ClosedCaption />
                <TvGuide.HighDefinition />
                programa quarta 3
              </Typography>
              <Typography>
                <TvGuide.Time datetime="00:00">02h00 -</TvGuide.Time>
                <TvGuide.Time datetime="01:00">03h00</TvGuide.Time>
              </Typography>
            </TvGuide.Card>
            <TvGuide.Button>integra</TvGuide.Button>
            <TvGuidePrograms.EventDescription>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius libero similique
                adipisci quo, ut sequi ad dicta non voluptatem eum dolorem iure, perspiciatis nemo
                saepe facere at, provident harum fuga!
              </p>
              <a href="#asd">acesse o site do programa</a>
              <SocialShare>
                <SocialShare.List>
                  <SocialShare.Item name="facebook" link="#" />
                  <SocialShare.Item name="googleNews" link="#" />
                  <SocialShare.Item name="linkedin" link="#" />
                  <SocialShare.Item name="twitter" link="#" />
                  <SocialShare.Item name="whatsapp" link="#" />
                </SocialShare.List>
              </SocialShare>
            </TvGuidePrograms.EventDescription>
          </TvGuidePrograms.EventItem>
        </TvGuidePrograms.EventsList>

        <TvGuidePrograms.EventsList id="quinta">
          <TvGuidePrograms.EventItem>
            <TvGuide.Time datetime="00:00" hiddenOnMobile>
              00h00
            </TvGuide.Time>
            <TvGuide.Card>
              <TvGuide.Figure>
                <img
                  src="//img.r7.com/images/r7rio-012024-praia-17012024142855425?dimensions=150x82"
                  alt="alt"
                  width={150}
                  height={82}
                />
              </TvGuide.Figure>
              <Typography>
                <TvGuide.Rating rating={'12'}>12</TvGuide.Rating>
                <TvGuide.ClosedCaption />
                <TvGuide.HighDefinition />
                programa quinta 1
              </Typography>
              <Typography>
                <TvGuide.Time datetime="00:00">00h00 -</TvGuide.Time>
                <TvGuide.Time datetime="01:00">01h00</TvGuide.Time>
              </Typography>
            </TvGuide.Card>
            <TvGuide.Button href="#">integra</TvGuide.Button>
            <TvGuide.Button href="#" color="tertiary">
              assista a chamada
            </TvGuide.Button>
            <TvGuidePrograms.EventDescription>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius libero similique
                adipisci quo, ut sequi ad dicta non voluptatem eum dolorem iure, perspiciatis nemo
                saepe facere at, provident harum fuga!
              </p>
              <a href="#asd">acesse o site do programa</a>
              <SocialShare>
                <SocialShare.List>
                  <SocialShare.Item name="facebook" link="#" />
                  <SocialShare.Item name="googleNews" link="#" />
                  <SocialShare.Item name="linkedin" link="#" />
                  <SocialShare.Item name="twitter" link="#" />
                  <SocialShare.Item name="whatsapp" link="#" />
                </SocialShare.List>
              </SocialShare>
            </TvGuidePrograms.EventDescription>
          </TvGuidePrograms.EventItem>

          <TvGuidePrograms.EventItem>
            <TvGuide.Time datetime="01:00" hiddenOnMobile>
              01h00
            </TvGuide.Time>
            <TvGuide.Card>
              <TvGuide.Figure>
                <img
                  src="//img.r7.com/images/r7rio-012024-praia-17012024142855425?dimensions=150x82"
                  alt="alt"
                  width={150}
                  height={82}
                />
              </TvGuide.Figure>
              <Typography>
                <TvGuide.Rating rating={'14'}>14</TvGuide.Rating>
                <TvGuide.AudioDescription />
                <TvGuide.HighDefinition />
                programa quinta 2
              </Typography>
              <Typography>
                <TvGuide.Time datetime="01:00">01h00 -</TvGuide.Time>
                <TvGuide.Time datetime="02:00">02h00</TvGuide.Time>
              </Typography>
            </TvGuide.Card>
            <TvGuide.Button href="#" color="tertiary">
              assista a chamada
            </TvGuide.Button>
            <TvGuidePrograms.EventDescription>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius libero similique
                adipisci quo, ut sequi ad dicta non voluptatem eum dolorem iure, perspiciatis nemo
                saepe facere at, provident harum fuga!
              </p>
              <a href="#asd">acesse o site do programa</a>
              <SocialShare>
                <SocialShare.List>
                  <SocialShare.Item name="facebook" link="#" />
                  <SocialShare.Item name="googleNews" link="#" />
                  <SocialShare.Item name="linkedin" link="#" />
                  <SocialShare.Item name="twitter" link="#" />
                  <SocialShare.Item name="whatsapp" link="#" />
                </SocialShare.List>
              </SocialShare>
            </TvGuidePrograms.EventDescription>
          </TvGuidePrograms.EventItem>

          <TvGuidePrograms.EventItem>
            <TvGuide.Time datetime="02:00" hiddenOnMobile>
              02h00
            </TvGuide.Time>
            <TvGuide.Card>
              <TvGuide.Figure>
                <img
                  src="//img.r7.com/images/r7rio-012024-praia-17012024142855425?dimensions=150x82"
                  alt="alt"
                  width={150}
                  height={82}
                />
              </TvGuide.Figure>
              <Typography>
                <TvGuide.Rating rating={'18'}>18</TvGuide.Rating>
                <TvGuide.ClosedCaption />
                <TvGuide.HighDefinition />
                programa quinta 3
              </Typography>
              <Typography>
                <TvGuide.Time datetime="00:00">02h00 -</TvGuide.Time>
                <TvGuide.Time datetime="01:00">03h00</TvGuide.Time>
              </Typography>
            </TvGuide.Card>
            <TvGuide.Button>integra</TvGuide.Button>
            <TvGuidePrograms.EventDescription>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius libero similique
                adipisci quo, ut sequi ad dicta non voluptatem eum dolorem iure, perspiciatis nemo
                saepe facere at, provident harum fuga!
              </p>
              <a href="#asd">acesse o site do programa</a>
              <SocialShare>
                <SocialShare.List>
                  <SocialShare.Item name="facebook" link="#" />
                  <SocialShare.Item name="googleNews" link="#" />
                  <SocialShare.Item name="linkedin" link="#" />
                  <SocialShare.Item name="twitter" link="#" />
                  <SocialShare.Item name="whatsapp" link="#" />
                </SocialShare.List>
              </SocialShare>
            </TvGuidePrograms.EventDescription>
          </TvGuidePrograms.EventItem>
        </TvGuidePrograms.EventsList>

        <TvGuidePrograms.EventsList id="sexta">
          <TvGuidePrograms.EventItem>
            <TvGuide.Time datetime="00:00" hiddenOnMobile>
              00h00
            </TvGuide.Time>
            <TvGuide.Card>
              <TvGuide.Figure>
                <img
                  src="//img.r7.com/images/vitamina-d-laranja-sol-verao-25122023153812819?dimensions=150x82"
                  alt="alt"
                  width={150}
                  height={82}
                />
              </TvGuide.Figure>
              <Typography>
                <TvGuide.Rating rating={'18'}>18</TvGuide.Rating>
                <TvGuide.ClosedCaption />
                <TvGuide.HighDefinition />
                programa sexta 1
              </Typography>
              <Typography>
                <TvGuide.Time datetime="00:00">00h00 -</TvGuide.Time>
                <TvGuide.Time datetime="01:00">01h00</TvGuide.Time>
              </Typography>
            </TvGuide.Card>
            <TvGuide.Button href="#">integra</TvGuide.Button>
            <TvGuide.Button href="#" color="tertiary">
              assista a chamada
            </TvGuide.Button>
            <TvGuidePrograms.EventDescription>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius libero similique
                adipisci quo, ut sequi ad dicta non voluptatem eum dolorem iure, perspiciatis nemo
                saepe facere at, provident harum fuga!
              </p>
              <a href="#asd">acesse o site do programa</a>
              <SocialShare>
                <SocialShare.List>
                  <SocialShare.Item name="facebook" link="#" />
                  <SocialShare.Item name="googleNews" link="#" />
                  <SocialShare.Item name="linkedin" link="#" />
                  <SocialShare.Item name="twitter" link="#" />
                  <SocialShare.Item name="whatsapp" link="#" />
                </SocialShare.List>
              </SocialShare>
            </TvGuidePrograms.EventDescription>
          </TvGuidePrograms.EventItem>

          <TvGuidePrograms.EventItem>
            <TvGuide.Time datetime="01:00" hiddenOnMobile>
              01h00
            </TvGuide.Time>
            <TvGuide.Card>
              <TvGuide.Figure>
                <img
                  src="//img.r7.com/images/vitamina-d-laranja-sol-verao-25122023153812819?dimensions=150x82"
                  alt="alt"
                  width={150}
                  height={82}
                />
              </TvGuide.Figure>
              <Typography>
                <TvGuide.Rating rating={'14'}>14</TvGuide.Rating>
                <TvGuide.AudioDescription />
                <TvGuide.HighDefinition />
                programa sexta 2
              </Typography>
              <Typography>
                <TvGuide.Time datetime="01:00">01h00 -</TvGuide.Time>
                <TvGuide.Time datetime="02:00">02h00</TvGuide.Time>
              </Typography>
            </TvGuide.Card>
            <TvGuide.Button href="#" color="tertiary">
              assista a chamada
            </TvGuide.Button>
            <TvGuidePrograms.EventDescription>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius libero similique
                adipisci quo, ut sequi ad dicta non voluptatem eum dolorem iure, perspiciatis nemo
                saepe facere at, provident harum fuga!
              </p>
              <a href="#asd">acesse o site do programa</a>
              <SocialShare>
                <SocialShare.List>
                  <SocialShare.Item name="facebook" link="#" />
                  <SocialShare.Item name="googleNews" link="#" />
                  <SocialShare.Item name="linkedin" link="#" />
                  <SocialShare.Item name="twitter" link="#" />
                  <SocialShare.Item name="whatsapp" link="#" />
                </SocialShare.List>
              </SocialShare>
            </TvGuidePrograms.EventDescription>
          </TvGuidePrograms.EventItem>

          <TvGuidePrograms.EventItem>
            <TvGuide.Time datetime="02:00" hiddenOnMobile>
              02h00
            </TvGuide.Time>
            <TvGuide.Card>
              <TvGuide.Figure>
                <img
                  src="//img.r7.com/images/vitamina-d-laranja-sol-verao-25122023153812819?dimensions=150x82"
                  alt="alt"
                  width={150}
                  height={82}
                />
              </TvGuide.Figure>
              <Typography>
                <TvGuide.Rating rating={'18'}>18</TvGuide.Rating>
                <TvGuide.ClosedCaption />
                <TvGuide.HighDefinition />
                programa sexta 3
              </Typography>
              <Typography>
                <TvGuide.Time datetime="00:00">02h00 -</TvGuide.Time>
                <TvGuide.Time datetime="01:00">03h00</TvGuide.Time>
              </Typography>
            </TvGuide.Card>
            <TvGuide.Button>integra</TvGuide.Button>
            <TvGuidePrograms.EventDescription>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius libero similique
                adipisci quo, ut sequi ad dicta non voluptatem eum dolorem iure, perspiciatis nemo
                saepe facere at, provident harum fuga!
              </p>
              <a href="#asd">acesse o site do programa</a>
              <SocialShare>
                <SocialShare.List>
                  <SocialShare.Item name="facebook" link="#" />
                  <SocialShare.Item name="googleNews" link="#" />
                  <SocialShare.Item name="linkedin" link="#" />
                  <SocialShare.Item name="twitter" link="#" />
                  <SocialShare.Item name="whatsapp" link="#" />
                </SocialShare.List>
              </SocialShare>
            </TvGuidePrograms.EventDescription>
          </TvGuidePrograms.EventItem>
        </TvGuidePrograms.EventsList>

        <TvGuidePrograms.EventsList id="sabado">
          <TvGuidePrograms.EventItem>
            <TvGuide.Time datetime="00:00" hiddenOnMobile>
              00h00
            </TvGuide.Time>
            <TvGuide.Card>
              <TvGuide.Figure>
                <img
                  src="//img.r7.com/images/golf-vai-celebrar-50-anos-com-nova-versao-gti-veja-os-classicos-15012024204520012?dimensions=150x82"
                  alt="alt"
                  width={150}
                  height={82}
                />
              </TvGuide.Figure>
              <Typography>
                <TvGuide.Rating rating={'18'}>18</TvGuide.Rating>
                <TvGuide.ClosedCaption />
                <TvGuide.HighDefinition />
                programa sábado 1
              </Typography>
              <Typography>
                <TvGuide.Time datetime="00:00">00h00 -</TvGuide.Time>
                <TvGuide.Time datetime="01:00">01h00</TvGuide.Time>
              </Typography>
            </TvGuide.Card>
            <TvGuide.Button href="#">integra</TvGuide.Button>
            <TvGuide.Button href="#" color="tertiary">
              assista a chamada
            </TvGuide.Button>
            <TvGuidePrograms.EventDescription>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius libero similique
                adipisci quo, ut sequi ad dicta non voluptatem eum dolorem iure, perspiciatis nemo
                saepe facere at, provident harum fuga!
              </p>
              <a href="#asd">acesse o site do programa</a>
              <SocialShare>
                <SocialShare.List>
                  <SocialShare.Item name="facebook" link="#" />
                  <SocialShare.Item name="googleNews" link="#" />
                  <SocialShare.Item name="linkedin" link="#" />
                  <SocialShare.Item name="twitter" link="#" />
                  <SocialShare.Item name="whatsapp" link="#" />
                </SocialShare.List>
              </SocialShare>
            </TvGuidePrograms.EventDescription>
          </TvGuidePrograms.EventItem>

          <TvGuidePrograms.EventItem>
            <TvGuide.Time datetime="01:00" hiddenOnMobile>
              01h00
            </TvGuide.Time>
            <TvGuide.Card>
              <TvGuide.Figure>
                <img
                  src="//img.r7.com/images/golf-vai-celebrar-50-anos-com-nova-versao-gti-veja-os-classicos-15012024204520012?dimensions=150x82"
                  alt="alt"
                  width={150}
                  height={82}
                />
              </TvGuide.Figure>
              <Typography>
                <TvGuide.Rating rating={'14'}>14</TvGuide.Rating>
                <TvGuide.AudioDescription />
                <TvGuide.HighDefinition />
                programa sábado 2
              </Typography>
              <Typography>
                <TvGuide.Time datetime="01:00">01h00 -</TvGuide.Time>
                <TvGuide.Time datetime="02:00">02h00</TvGuide.Time>
              </Typography>
            </TvGuide.Card>
            <TvGuide.Button href="#" color="tertiary">
              assista a chamada
            </TvGuide.Button>
            <TvGuidePrograms.EventDescription>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius libero similique
                adipisci quo, ut sequi ad dicta non voluptatem eum dolorem iure, perspiciatis nemo
                saepe facere at, provident harum fuga!
              </p>
              <a href="#asd">acesse o site do programa</a>
              <SocialShare>
                <SocialShare.List>
                  <SocialShare.Item name="facebook" link="#" />
                  <SocialShare.Item name="googleNews" link="#" />
                  <SocialShare.Item name="linkedin" link="#" />
                  <SocialShare.Item name="twitter" link="#" />
                  <SocialShare.Item name="whatsapp" link="#" />
                </SocialShare.List>
              </SocialShare>
            </TvGuidePrograms.EventDescription>
          </TvGuidePrograms.EventItem>

          <TvGuidePrograms.EventItem>
            <TvGuide.Time datetime="02:00" hiddenOnMobile>
              02h00
            </TvGuide.Time>
            <TvGuide.Card>
              <TvGuide.Figure>
                <img
                  src="//img.r7.com/images/golf-vai-celebrar-50-anos-com-nova-versao-gti-veja-os-classicos-15012024204520012?dimensions=150x82"
                  alt="alt"
                  width={150}
                  height={82}
                />
              </TvGuide.Figure>
              <Typography>
                <TvGuide.Rating rating={'18'}>18</TvGuide.Rating>
                <TvGuide.ClosedCaption />
                <TvGuide.HighDefinition />
                programa sábado 3
              </Typography>
              <Typography>
                <TvGuide.Time datetime="00:00">02h00 -</TvGuide.Time>
                <TvGuide.Time datetime="01:00">03h00</TvGuide.Time>
              </Typography>
            </TvGuide.Card>
            <TvGuide.Button>integra</TvGuide.Button>
            <TvGuidePrograms.EventDescription>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius libero similique
                adipisci quo, ut sequi ad dicta non voluptatem eum dolorem iure, perspiciatis nemo
                saepe facere at, provident harum fuga!
              </p>
              <a href="#asd">acesse o site do programa</a>
              <SocialShare>
                <SocialShare.List>
                  <SocialShare.Item name="facebook" link="#" />
                  <SocialShare.Item name="googleNews" link="#" />
                  <SocialShare.Item name="linkedin" link="#" />
                  <SocialShare.Item name="twitter" link="#" />
                  <SocialShare.Item name="whatsapp" link="#" />
                </SocialShare.List>
              </SocialShare>
            </TvGuidePrograms.EventDescription>
          </TvGuidePrograms.EventItem>
        </TvGuidePrograms.EventsList>

        <TvGuidePrograms.EventsList id="domingo">
          <TvGuidePrograms.EventItem>
            <TvGuide.Time datetime="00:00" hiddenOnMobile>
              00h00
            </TvGuide.Time>
            <TvGuide.Card>
              <TvGuide.Figure>
                <img
                  src="//img.r7.com/images/renato-cariani-19122023160842176?dimensions=150x82"
                  alt="alt"
                  width={150}
                  height={82}
                />
              </TvGuide.Figure>
              <Typography>
                <TvGuide.Rating rating={'18'}>18</TvGuide.Rating>
                <TvGuide.ClosedCaption />
                <TvGuide.HighDefinition />
                programa domingo 1
              </Typography>
              <Typography>
                <TvGuide.Time datetime="00:00">00h00 -</TvGuide.Time>
                <TvGuide.Time datetime="01:00">01h00</TvGuide.Time>
              </Typography>
            </TvGuide.Card>
            <TvGuide.Button href="#">integra</TvGuide.Button>
            <TvGuide.Button href="#" color="tertiary">
              assista a chamada
            </TvGuide.Button>
            <TvGuidePrograms.EventDescription>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius libero similique
                adipisci quo, ut sequi ad dicta non voluptatem eum dolorem iure, perspiciatis nemo
                saepe facere at, provident harum fuga!
              </p>
              <a href="#asd">acesse o site do programa</a>
              <SocialShare>
                <SocialShare.List>
                  <SocialShare.Item name="facebook" link="#" />
                  <SocialShare.Item name="googleNews" link="#" />
                  <SocialShare.Item name="linkedin" link="#" />
                  <SocialShare.Item name="twitter" link="#" />
                  <SocialShare.Item name="whatsapp" link="#" />
                </SocialShare.List>
              </SocialShare>
            </TvGuidePrograms.EventDescription>
          </TvGuidePrograms.EventItem>

          <TvGuidePrograms.EventItem>
            <TvGuide.Time datetime="01:00" hiddenOnMobile>
              01h00
            </TvGuide.Time>
            <TvGuide.Card>
              <TvGuide.Figure>
                <img
                  src="//img.r7.com/images/renato-cariani-19122023160842176?dimensions=150x82"
                  alt="alt"
                  width={150}
                  height={82}
                />
              </TvGuide.Figure>
              <Typography>
                <TvGuide.Rating rating={'14'}>14</TvGuide.Rating>
                <TvGuide.AudioDescription />
                <TvGuide.HighDefinition />
                programa domingo 2
              </Typography>
              <Typography>
                <TvGuide.Time datetime="01:00">01h00 -</TvGuide.Time>
                <TvGuide.Time datetime="02:00">02h00</TvGuide.Time>
              </Typography>
            </TvGuide.Card>
            <TvGuide.Button href="#" color="tertiary">
              assista a chamada
            </TvGuide.Button>
            <TvGuidePrograms.EventDescription>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius libero similique
                adipisci quo, ut sequi ad dicta non voluptatem eum dolorem iure, perspiciatis nemo
                saepe facere at, provident harum fuga!
              </p>
              <a href="#asd">acesse o site do programa</a>
              <SocialShare>
                <SocialShare.List>
                  <SocialShare.Item name="facebook" link="#" />
                  <SocialShare.Item name="googleNews" link="#" />
                  <SocialShare.Item name="linkedin" link="#" />
                  <SocialShare.Item name="twitter" link="#" />
                  <SocialShare.Item name="whatsapp" link="#" />
                </SocialShare.List>
              </SocialShare>
            </TvGuidePrograms.EventDescription>
          </TvGuidePrograms.EventItem>

          <TvGuidePrograms.EventItem>
            <TvGuide.Time datetime="02:00" hiddenOnMobile>
              02h00
            </TvGuide.Time>
            <TvGuide.Card>
              <TvGuide.Figure>
                <img
                  src="//img.r7.com/images/renato-cariani-19122023160842176?dimensions=150x82"
                  alt="alt"
                  width={150}
                  height={82}
                />
              </TvGuide.Figure>
              <Typography>
                <TvGuide.Rating rating={'18'}>18</TvGuide.Rating>
                <TvGuide.ClosedCaption />
                <TvGuide.HighDefinition />
                programa domingo 3
              </Typography>
              <Typography>
                <TvGuide.Time datetime="00:00">02h00 -</TvGuide.Time>
                <TvGuide.Time datetime="01:00">03h00</TvGuide.Time>
              </Typography>
            </TvGuide.Card>
            <TvGuide.Button>integra</TvGuide.Button>
            <TvGuidePrograms.EventDescription>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius libero similique
                adipisci quo, ut sequi ad dicta non voluptatem eum dolorem iure, perspiciatis nemo
                saepe facere at, provident harum fuga!
              </p>
              <a href="#asd">acesse o site do programa</a>
              <SocialShare>
                <SocialShare.List>
                  <SocialShare.Item name="facebook" link="#" />
                  <SocialShare.Item name="googleNews" link="#" />
                  <SocialShare.Item name="linkedin" link="#" />
                  <SocialShare.Item name="twitter" link="#" />
                  <SocialShare.Item name="whatsapp" link="#" />
                </SocialShare.List>
              </SocialShare>
            </TvGuidePrograms.EventDescription>
          </TvGuidePrograms.EventItem>
        </TvGuidePrograms.EventsList>
      </TvGuidePrograms>
    </TvGuide>
  </Container>
)

describe('TvGuide', () => {
  beforeEach(() => cy.mount(<UiTvGuide />))

  it('should render ui-tv-guide in desktop mode', () => {
    cy.viewport('macbook-11')
    cy.matchImage()
  })

  it('should render ui-tv-guide in tablet mode', () => {
    cy.viewport('ipad-mini')
    cy.matchImage()
  })

  it('should render ui-tv-guide in mobile mode', () => {
    cy.viewport('iphone-se2')
    cy.matchImage()
  })
})

describe('TvGuide - Elements Interactions', () => {
  beforeEach(() => cy.mount(<UiTvGuide />))

  it('should change select value', () => {
    cy.get('select').select('politica').should('have.value', 3)
    cy.get('select').select('entretenimento').should('have.value', 2)
  })

  it('should change active tabs', () => {
    cy.findByRole('tablist').get('#tab-terca').click()

    cy.get('#tabpanel-segunda').should('not.be.visible')
    cy.get('#tabpanel-terca').should('be.visible')

    cy.findByRole('tablist').get('#tab-segunda').click()

    cy.get('#tabpanel-terca').should('not.be.visible')
    cy.get('#tabpanel-segunda').should('be.visible')
  })

  it('should toggle program description', () => {
    cy.findByRole('tablist').get('#tab-segunda').click()

    cy.get('#tabpanel-segunda').get('details').eq(0).should('not.have.attr', 'open')

    cy.get('#tabpanel-segunda').get('summary').eq(0).click()

    cy.get('#tabpanel-segunda').get('details').eq(0).should('have.attr', 'open')

    cy.get('#tabpanel-segunda')
      .get('details')
      .eq(0)
      .findByText(/Lorem ipsum dolor/gi)
      .should('be.visible')
  })
})
