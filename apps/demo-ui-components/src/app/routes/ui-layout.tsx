import '@r7/ui-layout/css'
import { Container, SpecialOne, Proportional } from '@r7/ui-layout'

export function UiLayout() {
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
    <div className="h-[calc(560px+32px)] bg-neutral-low-400 items-center justify-center flex">
      Sidebar Block
    </div>
  )

  return (
    <div className="flex flex-col gap-xs">
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
                  <SmallMainBlock />
                  <SmallMainBlock />
                  <SmallMainBlock />
                </>
              }
            />
          }
          renderSidebar={<SidebarBlock />}
        />
      </Container>
      <Container>
        <Proportional.One>
          <LargeMainBlock />
        </Proportional.One>
      </Container>
      <Container>
        <Proportional.Two>
          <LargeMainBlock />
          <LargeMainBlock />
        </Proportional.Two>
      </Container>
      <Container>
        <Proportional.Three>
          <LargeMainBlock />
          <LargeMainBlock />
          <LargeMainBlock />
        </Proportional.Three>
      </Container>
      <Container>
        <Proportional.Four>
          <LargeMainBlock />
          <LargeMainBlock />
          <LargeMainBlock />
          <LargeMainBlock />
        </Proportional.Four>
      </Container>
    </div>
  )
}
