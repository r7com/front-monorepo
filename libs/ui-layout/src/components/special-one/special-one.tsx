import { ReactNode } from 'react'

type SpecialOneProps = {
  renderMain: ReactNode
  renderSidebar: ReactNode
}

type MainProps = {
  lineOne: ReactNode
  lineTwo: ReactNode
}

type SidebarProps = {
  children: ReactNode
}

function Main({ lineOne, lineTwo }: MainProps) {
  return (
    <>
      <div className="layout-mb-xs">
        <div className="layout-grid layout-grid-cols-[3fr,1fr] layout-gap-xs">{lineOne}</div>
      </div>
      <div>
        <div className="layout-grid layout-grid-cols-[3fr,3fr,2fr] layout-gap-xs">{lineTwo}</div>
      </div>
    </>
  )
}

function Sidebar({ children }: SidebarProps) {
  return <div>{children}</div>
}

export function SpecialOne({ renderMain, renderSidebar }: SpecialOneProps) {
  return (
    <div className="layout-grid layout-grid-cols-[7fr,3fr] layout-gap-xs">
      <div>{renderMain}</div>
      <div>{renderSidebar}</div>
    </div>
  )
}

SpecialOne.Main = Main
SpecialOne.Sidebar = Sidebar
