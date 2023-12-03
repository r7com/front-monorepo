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
        <div className="layout-grid layout-grid-cols-[75%,25%]">{lineOne}</div>
      </div>
      <div>
        <div className="layout-grid layout-grid-cols-[37%,37%,25%]">{lineTwo}</div>
      </div>
    </>
  )
}

function Sidebar({ children }: SidebarProps) {
  return <div>{children}</div>
}

export function SpecialOne({ renderMain, renderSidebar }: SpecialOneProps) {
  return (
    <div className="layout-grid layout-grid-cols-[70%,30%]">
      <div>{renderMain}</div>
      <div>{renderSidebar}</div>
    </div>
  )
}

SpecialOne.Main = Main
SpecialOne.Sidebar = Sidebar
