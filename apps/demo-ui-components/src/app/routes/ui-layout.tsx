import '@r7/ui-layout/css'
import { Container, SpecialOne, Proportional, Magazine } from '@r7/ui-layout'

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
      <div className="flex flex-col gap-xxxs xl:gap-xs">
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
      </div>
    </Container>
  )
}
