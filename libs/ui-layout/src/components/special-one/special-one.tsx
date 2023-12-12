import { ReactNode } from 'react'
import { Grid } from '../grid'
import { Main } from './special-one-main/special-one-main'
import { Sidebar } from './special-one-sidebar/special-one-sidebar'

type SpecialOneProps = {
  renderMain: ReactNode
  renderSidebar: ReactNode
}

export function SpecialOne({ renderMain, renderSidebar }: SpecialOneProps) {
  return (
    <Grid>
      <div className="md:layout-col-span-24 lg:layout-col-span-17">{renderMain}</div>
      <div className="md:layout-col-span-24 lg:layout-col-span-7">{renderSidebar}</div>
    </Grid>
  )
}

SpecialOne.Main = Main
SpecialOne.Sidebar = Sidebar
