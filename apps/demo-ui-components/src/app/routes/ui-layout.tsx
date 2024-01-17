import '@r7/ui-layout/css'
import '@r7/ui-section-heading/css'
import {
  LatestNews,
  Container,
  SpecialOne,
  Proportional,
  Magazine,
  SectionWrapper,
} from '@r7/ui-layout'
import { SectionHeading } from '@r7/ui-section-heading'

export function UiLayout() {
  const LargeMainBlock = () => (
    <div className={`h-[320px] bg-neutral-low-400 items-center justify-center flex`}>
      Large Main Block
    </div>
  )

  const SmallMainBlock = () => (
    <div className={`h-[240px] bg-neutral-low-400 items-center justify-center flex`}>
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
          renderSidebar={<SidebarBlock />}
        />
        <SectionHeading color="#4766ac">
          <SectionHeading.Title>Últimas</SectionHeading.Title>
          <SectionHeading.Line />
        </SectionHeading>
        <LatestNews
          renderMain={<LargeMainBlock />}
          renderSidebar={
            <LatestNews.Sidebar
              rowOne={<SidebarBlock />}
              rowTwo={<SidebarBlock />}
              rowThree={<SidebarBlock />}
            />
          }
        />

        <Proportional.One>
          <LargeMainBlock />
        </Proportional.One>

        <Proportional.Two>
          <LargeMainBlock />
          <LargeMainBlock />
        </Proportional.Two>

        <Proportional.Three>
          <LargeMainBlock />
          <LargeMainBlock />
          <LargeMainBlock />
        </Proportional.Three>

        <Proportional.Four>
          <LargeMainBlock />
          <LargeMainBlock />
          <LargeMainBlock />
          <LargeMainBlock />
        </Proportional.Four>

        <Magazine.One>
          <LargeMainBlock />
          <LargeMainBlock />
          <LargeMainBlock />
        </Magazine.One>

        <Magazine.Two>
          <LargeMainBlock />
          <LargeMainBlock />
        </Magazine.Two>
      </SectionWrapper>
    </Container>
  )
}
