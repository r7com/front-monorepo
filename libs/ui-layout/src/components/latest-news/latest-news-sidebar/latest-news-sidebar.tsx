import { ReactNode } from 'react'

type LatestNewsSidebarProps = {
  rowOne: ReactNode
  rowTwo: ReactNode
  rowThree: ReactNode
}

export function Sidebar({ rowOne, rowTwo, rowThree }: LatestNewsSidebarProps) {
  return (
    <div className="layout-grid layout-gap-xxs lg:layout-mb-xs">
      <div className="md:layout-grid-cols-24 lg:layout-grid-cols-7 layout-hidden lg:layout-block">
        {rowOne}
      </div>
      <div className="md:layout-grid-cols-24 lg:layout-grid-cols-7">{rowTwo}</div>
      <div className="md:layout-grid-cols-24 lg:layout-grid-cols-7 layout-hidden lg:layout-block">
        {rowThree}
      </div>
    </div>
  )
}
