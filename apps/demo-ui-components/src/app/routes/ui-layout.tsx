import '@r7/ui-layout/css'
import { Container, SpecialOne } from '@r7/ui-layout'

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
    <div className="h-[calc(560px+32px)] bg-neutral-low-400 items-center justify-center flex">
      Sidebar Block
    </div>
  )

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
  )
}
